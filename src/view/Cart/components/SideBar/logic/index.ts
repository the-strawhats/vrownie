import composer from '@utils/composer'
import { getStorageItem, cartListToOrder } from '@utils/index'
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
  const [currentOption, setCurrentOption] = useState('')
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
    window.open(
      `https://api.whatsapp.com/send?phone=5511967389394&text=${orderText}`
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
