export interface CartItem {
  name: string
  price: number
  url: string
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

export type DeliveryType = 'Endereço' | 'Retirar' | ''
