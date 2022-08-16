import { DeliveryType } from '@interface/index'
import composer from '@utils/composer'
import {
  getStorageItem,
  cartListToOrder,
  deliveryFormToOrder
} from '@utils/index'
import React, { useState } from 'react'
import { useOrder } from '../../Order/logic'
import { redirectToWhatsappMessage } from '@utils/redirectToWhatsappMessage'
import { Address } from 'src/services/address'

const initialContentForm = {
  street: '',
  neighborhood: '',
  number: '',
  complement: '',
  observation: ''
}

const useSidebar = () => {
  const [currentOption, setCurrentOption] = useState<DeliveryType>('')
  const [isFormValid, setIsFormValid] = useState(false)
  const [ignorableValues, setIgnorableValues] = useState([])
  const [contentForm, setContentForm] = useState(initialContentForm)
  const [isAddressFormDisabled, setIsAddressFormDisabled] = useState(true)

  const { hasCardList } = useOrder()
  const isAddress = currentOption === 'Endereço'

  const ignorableValuesMapper = {
    Endereço: ['station', 'observation', 'complement'],
    Retirar: [
      'station',
      'street',
      'neighborhood',
      'number',
      'complement',
      'observation'
    ]
  }

  const getRequiredFormValues = (
    form: { [key: string]: any },
    ignorableValues?: string[]
  ) => {
    const currentForm = { ...form }
    const formKeys = Object.keys(currentForm)

    ignorableValues.forEach(ignorableValue => {
      const hasValueKey = formKeys.includes(ignorableValue)

      if (hasValueKey) {
        delete currentForm[ignorableValue]
      }
    })

    return {
      requiredValues: currentForm
    }
  }

  const formValidator = (form: {}) => {
    const formValues = Object.values(form)
    const listValidation = formValues.map(value => {
      return value !== ''
    })

    const hasNoFalses = !listValidation.includes(false)

    return hasNoFalses
  }

  const handleOnChange = (model: string) => (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const form = { ...contentForm }
    const { value } = event.currentTarget
    form[model] = value

    const { requiredValues } = getRequiredFormValues(form, ignorableValues)
    const currentIsFormValid = formValidator(requiredValues)

    setIsFormValid(currentIsFormValid)
    setContentForm(form)
  }

  const handleZipCodeChange = (event: React.FormEvent<HTMLInputElement>) => {
    handleOnChange('cep')(event)
    const { value } = event.currentTarget

    const hasFullZipCode = value.length === 8

    if (hasFullZipCode) {
      const api = new Address()
      const { getByZipCode } = api

      getByZipCode({ cep: value }).then(res => {
        const { logradouro, bairro, erro } = res

        const error = erro && JSON.parse(erro) === true

        if (error) {
          return setIsAddressFormDisabled(false)
        }

        const currentContentForm = {
          ...contentForm,
          street: logradouro,
          neighborhood: bairro
        }

        setContentForm(currentContentForm)
      })
    }
  }

  const handleOrderNow = () => {
    const cartList = getStorageItem('cart')
    const orderText = cartListToOrder(cartList)
    const addressText = deliveryFormToOrder(currentOption, contentForm)
    const finalMessage = `${orderText}%0a%0a${addressText}`

    redirectToWhatsappMessage(finalMessage)
  }

  const handleSelectChange = value => {
    const currentignorableValues = ignorableValuesMapper[value] ?? []

    const { requiredValues } = getRequiredFormValues(
      contentForm,
      currentignorableValues
    )
    const currentIsFormValid = formValidator(requiredValues)

    setIsFormValid(currentIsFormValid)

    setIgnorableValues(currentignorableValues)
    setCurrentOption(value)
  }

  const isButtonDisabled = !isFormValid || !hasCardList

  return {
    isAddress,
    handleOnChange,
    handleOrderNow,
    isButtonDisabled,
    setCurrentOption,
    handleSelectChange,
    handleZipCodeChange,
    isAddressFormDisabled
  }
}

export default composer(useSidebar)

