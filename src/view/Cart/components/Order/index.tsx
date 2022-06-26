import { Paragraph, CardPrice, HeadlineFour } from '@components/Typography'
import Counter from '@components/Counter'
import Image from '@components/Image'
import { splitPrice, removeCartItem, addToCart } from '@utils/index'
import { CartItem } from '@interface/index'

import {
  OrderContainer,
  SingleOrderContainer,
  OrderListWrapper,
  SingleOrderTextContent
} from './style'
import enhancer from './logic'

interface OrderInterface {
  cartList: Array<CartItem>
  totalValue: string
}

const SingleOrder: React.FC<CartItem> = item => {
  const { name, price, amount, url } = item
  const { priceStart, priceEnd } = splitPrice(price)
  return (
    <SingleOrderContainer>
      <Image src={url} alt="Picture of a brownie" width={86} height={62} />
      <Counter
        amount={amount}
        customHandleIncrease={() => addToCart(item)}
        customHandleDecrease={() => removeCartItem(item)}
      />
      <SingleOrderTextContent>
        <Paragraph weigth="medium">
          {name}
          <span className="red">.</span>
        </Paragraph>

        <CardPrice color="green" variant="dark">
          {priceStart}
          <span className="red">.</span>
          {priceEnd}
        </CardPrice>
      </SingleOrderTextContent>
    </SingleOrderContainer>
  )
}

const Order: React.FC<OrderInterface> = ({ cartList, totalValue }) => {
  const { priceStart, priceEnd } = splitPrice(totalValue)
  return (
    <OrderContainer>
      <HeadlineFour>
        Seu pedido<span className="red">.</span>
      </HeadlineFour>
      <OrderListWrapper>
        {cartList &&
          cartList.map((item, idx) => {
            return <SingleOrder key={idx} {...item} />
          })}
      </OrderListWrapper>
      <Paragraph weigth="medium">
        Valor total<span className="red">:</span>{' '}
        <span className="green">{priceStart}</span>
        <span className="red">.</span>
        <span className="green">{priceEnd}</span>
      </Paragraph>
    </OrderContainer>
  )
}

export default enhancer(Order)
