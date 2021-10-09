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

  const cartData = [...currentCartValue, data]

  addToStorage('cart', cartData)
}
