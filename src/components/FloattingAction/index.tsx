import Button from '@components/Button'
import { Paragraph } from '@components/Typography'
import { FloatingActionWrapper } from './style'

interface FloatingActionInteface {
  onClick: () => void
  isDisabled: boolean
  totalValue: string
}

const FloatingAction = ({ onClick, isDisabled, totalValue }: FloatingActionInteface) => {
  return (
    <FloatingActionWrapper>
      <Paragraph weigth="medium">
          <span>Total:</span>
          <span className="green">{totalValue}</span>
      </Paragraph>
      <Button label="Pedir agora!" onClick={onClick} isDisabled={isDisabled} />
    </FloatingActionWrapper>
  )
}

export default FloatingAction
