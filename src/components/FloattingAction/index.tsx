import Button from '@components/Button'
import { FloatingActionWrapper } from './style'

interface FloatingActionInteface {
  onClick: () => void
  isDisabled: boolean
}

const FloatingAction = ({ onClick, isDisabled }: FloatingActionInteface) => {
  return (
    <FloatingActionWrapper>
      <Button label="Pedir agora!" onClick={onClick} isDisabled={isDisabled} />
    </FloatingActionWrapper>
  )
}

export default FloatingAction
