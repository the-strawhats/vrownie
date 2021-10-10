import {
  BodyOne,
  CardPrice,
  HeadlineFour
} from '../../../../components/Typography'
import {
  OrderContainer,
  SingleOrderContainer,
  OrderListWrapper,
  SingleOrderTextContent
} from './style'
import Counter from '../../../../components/Counter'
import Image from '../../../../components/Image'
import enhancer from './logic'

interface OrderInterface {
  cartList: Array<{
    name: String
    price: String
    url: String
    amount: Number
  }>
}

interface SingleOrderInterface {
  name: String
  price: String
  url: String
  amount: Number
}

const SingleOreder: React.FC<SingleOrderInterface> = ({
  name,
  price,
  amount,
  url
}) => {
  console.log({ price, amount, url })
  return (
    <SingleOrderContainer>
      <Image
        src="/tradicional-brownie.png"
        alt="Picture of a brownie"
        width={86}
        height={62}
      />
      <Counter />
      <SingleOrderTextContent>
        <BodyOne weigth="medium">
          {name}
          <span className="red">.</span>
        </BodyOne>

        <CardPrice color="green" variant="dark">
          $6<span className="red">.</span>00
        </CardPrice>
      </SingleOrderTextContent>
    </SingleOrderContainer>
  )
}

const Order: React.FC<OrderInterface> = ({ cartList }) => {
  return (
    <OrderContainer>
      <HeadlineFour>
        Seu pedido<span className="red">.</span>
      </HeadlineFour>
      <OrderListWrapper>
        {cartList.map((item, idx) => {
          return (
            <SingleOreder key={idx} {...item} />
          )
        })}
      </OrderListWrapper>
      <BodyOne weigth="medium">
        Valor total<span className="red">:</span>{' '}
        <span className="green">R$33</span>
        <span className="red">.</span>
        <span className="green">00</span>
      </BodyOne>
    </OrderContainer>
  )
}

export default enhancer(Order)
