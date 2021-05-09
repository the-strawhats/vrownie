import composer from '../../../utils/composer'
import { useState } from 'react'

const useCounter = ({ amount = 0 }) => {
  const [currentValue, setCurrentValue] = useState(amount)

  const handleIncrease = () => {
    setCurrentValue(currentValue + 1)
  }

  const handleDecrease = () => {
    if (currentValue > 0) {
      setCurrentValue(currentValue - 1)
    }
  }

  return {
    currentValue,
    handleIncrease,
    handleDecrease
  }
}

export default composer(useCounter)
