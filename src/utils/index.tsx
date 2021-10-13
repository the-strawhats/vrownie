import { CartItem } from '@interface/index'

export const getStorageItem = (item: string): any => {
  return JSON.parse(localStorage.getItem(item))
}

const addToStorage = (item: string, data: any) => {
  localStorage.setItem(item, JSON.stringify(data))
}

export const addToCart = (data: CartItem) => {
  const storageEvent = new Event('storage')
  const previusData = getStorageItem('cart')

  const currentCartValue = previusData ? previusData : []

  const currentItem = {
    ...data,
    amount: 1
  }

  const existingItemIndex = currentCartValue.findIndex(
    item => item.name === currentItem.name
  )

  const existingItem = currentCartValue[existingItemIndex]

  if (existingItem) {
    currentCartValue[existingItemIndex] = {
      ...currentItem,
      amount: existingItem.amount + 1
    }

    addToStorage('cart', currentCartValue)
    window.dispatchEvent(storageEvent)
  } else {
    const cartData = [...currentCartValue, currentItem]
    addToStorage('cart', cartData)
    window.dispatchEvent(storageEvent)
  }
}

export const removeCartItem = (data: CartItem) => {
  const storageEvent = new Event('storage')
  const previusData: Array<CartItem> = getStorageItem('cart')

  const currentCartValue = previusData ? previusData : []

  const existingItemIndex = currentCartValue.findIndex(
    item => item.name === data.name
  )

  const existingItem = currentCartValue[existingItemIndex]

  if (existingItem) {
    const { amount } = existingItem

    if (amount > 1) {
      existingItem.amount = amount - 1
      currentCartValue[existingItemIndex] = existingItem
      addToStorage('cart', currentCartValue)
      window.dispatchEvent(storageEvent)
    } else {
      currentCartValue.splice(existingItemIndex, 1)
      addToStorage('cart', currentCartValue)
      window.dispatchEvent(storageEvent)
    }
  }
}

export const numberToCurrency = (value: Number, currency: String = 'R$') => {
  const num = value.toFixed(2)
  return `${currency}${num}`
}

export const splitPrice = price => {
  const [priceStart, priceEnd] = numberToCurrency(price).split('.')

  return {
    priceStart,
    priceEnd
  }
}
