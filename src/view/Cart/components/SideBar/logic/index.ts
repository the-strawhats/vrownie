import { DeliveryType } from '@interface/index'
import composer from '@utils/composer'
import {
  getStorageItem,
  cartListToOrder,
  deliveryFormToOrder
} from '@utils/index'
import React, { useState } from 'react'

const initialContentForm = {
  street: '',
  neighborhood: '',
  number: '',
  complement: '',
  station: '',
  observation: ''
}

const useSidebar = () => {
  const [currentOption, setCurrentOption] = useState<DeliveryType>('')
  const [contentForm, setContentForm] = useState(initialContentForm)

  const handleOnChange = (model: string) => (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const form = contentForm
    const { value } = event.currentTarget
    form[model] = value
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
  return {
    handleOrderNow,
    currentOption,
    setCurrentOption,
    handleOnChange
  }
}

export default composer(useSidebar)
