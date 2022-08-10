import React from 'react'
import {
  CounterWrapper,
  CounterLabel,
  CounterActionLeft,
  CounterActionRight
} from './style'
import enhancer from './logic/index'

interface CounterInterface {
  handleIncrease?: () => void
  handleDecrease?: () => void
  currentValue?: number
}

const Counter: React.FC<CounterInterface> = ({
  handleIncrease,
  handleDecrease,
  currentValue
}) => {
  const limitMinimum = () => {
    if (currentValue <= 1)
      return
    handleDecrease()
  }

  return (
    <CounterWrapper>
      <CounterActionLeft onClick={limitMinimum}>-</CounterActionLeft>
      <CounterLabel>
        <span>{currentValue}</span>
      </CounterLabel>
      <CounterActionRight onClick={handleIncrease}>+</CounterActionRight>
    </CounterWrapper>
  )
}

export default enhancer(Counter)
