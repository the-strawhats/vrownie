export interface CartItem {
  name: String
  price: String
  url: String
}

const getStorageItem = (item: string): any => {
  return JSON.parse(localStorage.getItem(item))
}

const addToStorage = (item: string, data: any) => {
  localStorage.setItem(item, JSON.stringify(data))
}

export const addToCart = (data: CartItem) => {
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

    const cartData = [...currentCartValue]
    addToStorage('cart', cartData)
  } else {
    const cartData = [...currentCartValue, currentItem]
    addToStorage('cart', cartData)
  }
}
