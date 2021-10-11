import { BodyOne, CardPrice, HeadlineFour } from '@components/Typography'
import Counter from '@components/Counter'
import Image from '@components/Image'
import { numberToCurrency } from '@utils/index'

import {
  OrderContainer,
  SingleOrderContainer,
  OrderListWrapper,
  SingleOrderTextContent
} from './style'
import enhancer from './logic'

interface SingleOrderInterface {
  name: String
  price: Number
  url: String
  amount: Number
}

interface OrderInterface {
  cartList: Array<SingleOrderInterface>
  finalValue: string
}

const SingleOreder: React.FC<SingleOrderInterface> = ({
  name,
  price,
  amount,
  url
}) => {
  const [priceStart, priceEnd] = numberToCurrency(price).split('.')
  return (
    <SingleOrderContainer>
      <Image
        src="/tradicional-brownie.png"
        alt="Picture of a brownie"
        width={86}
        height={62}
      />
      <Counter amount={amount} />
      <SingleOrderTextContent>
        <BodyOne weigth="medium">
          {name}
          <span className="red">.</span>
        </BodyOne>

        <CardPrice color="green" variant="dark">
          {priceStart}
          <span className="red">.</span>
          {priceEnd}
        </CardPrice>
      </SingleOrderTextContent>
    </SingleOrderContainer>
  )
}

const Order: React.FC<OrderInterface> = ({ cartList, finalValue }) => {
  const [finalValueStart, finalValueEnd] = finalValue.split('.')
  return (
    <OrderContainer>
      <HeadlineFour>
        Seu pedido<span className="red">.</span>
      </HeadlineFour>
      <OrderListWrapper>
        {cartList &&
          cartList.map((item, idx) => {
            return <SingleOreder key={idx} {...item} />
          })}
      </OrderListWrapper>
      <BodyOne weigth="medium">
        Valor total<span className="red">:</span>{' '}
        <span className="green">{finalValueStart}</span>
        <span className="red">.</span>
        <span className="green">{finalValueEnd}</span>
      </BodyOne>
    </OrderContainer>
  )
}

export default enhancer(Order)
