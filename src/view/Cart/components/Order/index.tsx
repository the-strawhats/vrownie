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

const SingleOreder = () => {
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
          Creme de avelã<span className="red">.</span>
        </BodyOne>

        <CardPrice color="green" variant="dark">
          $6<span className="red">.</span>00
        </CardPrice>
      </SingleOrderTextContent>
    </SingleOrderContainer>
  )
}

const Order = () => {
  return (
    <OrderContainer>
      <HeadlineFour>
        Seu pedido<span className="red">.</span>
      </HeadlineFour>
      <OrderListWrapper>
        <SingleOreder />
        <SingleOreder />
        <SingleOreder />
        <SingleOreder />
        <SingleOreder />
        <SingleOreder />
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

export default Order
