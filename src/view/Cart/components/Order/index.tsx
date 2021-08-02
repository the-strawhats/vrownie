import {
  BodyOne,
  CardPrice,
  HeadlineFour
} from '../../../../components/Typography'
import { OrderContainer, SingleOrderContainer } from './style'
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
      <BodyOne weigth="medium">
        Tradicional<span className="red">.</span>
      </BodyOne>

      <CardPrice color="green" variant="dark">
        $6<span className="red">.</span>00
      </CardPrice>
    </SingleOrderContainer>
  )
}

const Order = () => {
  return (
    <OrderContainer>
      <HeadlineFour>
        Seu pedido<span className="red">.</span>
      </HeadlineFour>
      <SingleOreder />
      <SingleOreder />
      <SingleOreder />
    </OrderContainer>
  )
}

export default Order
