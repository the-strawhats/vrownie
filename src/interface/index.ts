export interface CartItem {
  name: String
  price: number
  url: String
  amount?: number
}

export interface AnimatedElementInterface {
  isAnimated: boolean
}

export interface AddressPayloadInterface {
  street?: string
  neighborhood?: string
  number?: string
  complement?: string
  station?: string
  observation?: string
}

export type DeliveryType = 'Endereço' | 'Metrô' | 'Retirar' | ''
