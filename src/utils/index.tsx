import {
  AddressPayloadInterface,
  CartItem,
  DeliveryType
} from '@interface/index'

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

export const cartListToOrder = (data: Array<CartItem>) => {
  const orderlist = data.reduce((acc, cur) => {
    return `${acc}%0a${cur.amount}x ${cur.name}`
  }, '')
  const finalOrder = ` Ol?? Vrownie! Por favor, este ?? o meu pedido:%0a${orderlist}`

  return finalOrder
}

const observationToOrder = (addressInformation: AddressPayloadInterface) => {
  const { observation } = addressInformation
  const observationText = observation.trim()
    ? `Observa????es: %0a${observation}%0a%0a`
    : ''
  const finalAdressText = observationText + `Qual o endere??o de retirada?`
  return finalAdressText
}

const adressToOrder = (addressInformation: AddressPayloadInterface) => {
  const { street, neighborhood, complement } = addressInformation
  const adressText = `Detalhes do envio: %0a${street}, ${neighborhood}. ${complement}`

  const finalAdressText = `${adressText}${observationToOrder(
    addressInformation
  )}`

  return finalAdressText
}

const subwayToOrder = (addressInformation: AddressPayloadInterface) => {
  const { station } = addressInformation
  const stationText = `Detalhes da retirada: %0a- esta????o ${station}`

  const finalStationText = `${stationText}${observationToOrder(
    addressInformation
  )}`

  return finalStationText
}

export const deliveryFormToOrder = (
  deliveryType: DeliveryType,
  addressInformation: AddressPayloadInterface
) => {
  if (deliveryType === 'Endere??o') {
    return adressToOrder(addressInformation)
  }
  if (deliveryType === 'Metr??') {
    return subwayToOrder(addressInformation)
  }
  if (deliveryType === 'Retirar' || deliveryType === '') {
    return observationToOrder(addressInformation)
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

export const scrollIntoView = (id: string) => {
  const element = document.getElementById(id)

  element.scrollIntoView({ block: 'start', behavior: 'smooth' })
}
