import composer from '../../../utils/composer'
import { useState } from 'react'

const defaultCustomAction = () => null

const useCounter = ({
  amount = 0,
  customHandleIncrease = defaultCustomAction,
  customHandleDecrease = defaultCustomAction
}) => {
  const [currentValue, setCurrentValue] = useState(amount)

  const handleIncrease = () => {
    setCurrentValue(currentValue + 1)
    customHandleIncrease()
  }

  const handleDecrease = () => {
    if (currentValue > 0) {
      setCurrentValue(currentValue - 1)
      customHandleDecrease()
    }
  }

  return {
    currentValue,
    handleIncrease,
    handleDecrease
  }
}

export default composer(useCounter)
