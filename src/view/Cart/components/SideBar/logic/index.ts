import { DeliveryType } from '@interface/index'
import composer from '@utils/composer'
import {
  getStorageItem,
  cartListToOrder,
  deliveryFormToOrder
} from '@utils/index'
import React, { useState } from 'react'
import { useOrder } from '../../Order/logic'

const initialContentForm = {
  street: '',
  neighborhood: '',
  number: '',
  complement: '',
  observation: ''
}

const useSidebar = () => {
  const [currentOption, setCurrentOption] = useState<DeliveryType>('')
  const [contentForm, setContentForm] = useState(initialContentForm)
  const [isFormValid, setIsFormValid] = useState(false)
  const [ignorableValues, setIgnorableValues] = useState([])

  const { hasCardList } = useOrder()
  const isAddress = currentOption === 'Endereço'

  const ignorableValuesMapper = {
    Endereço: ['observation'],
    Retirar: ['street', 'neighborhood', 'number', 'complement', 'observation']
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
    const form = contentForm
    const { value } = event.currentTarget
    form[model] = value

    const { requiredValues } = getRequiredFormValues(form, ignorableValues)
    const currentIsFormValid = formValidator(requiredValues)

    setIsFormValid(currentIsFormValid)
    setContentForm(form)
  }

  const handleOrderNow = () => {
    const cartList = getStorageItem('cart')
    const orderText = cartListToOrder(cartList)
    const addressText = deliveryFormToOrder(currentOption, contentForm)
    const phoneNumber = process.env.REACT_APP_PHONE_NUMBER ?? `5511988256175`
    const finalMessage = `${orderText}%0a%0a${addressText}`

    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${finalMessage}`
    )
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
    handleSelectChange,
    isButtonDisabled,
    handleOrderNow,
    currentOption,
    setCurrentOption,
    handleOnChange,
    isAddress
  }
}

export default composer(useSidebar)
