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
  return (
    <CounterWrapper>
      <CounterActionLeft onClick={handleDecrease}>-</CounterActionLeft>
      <CounterLabel>
        <span>{currentValue}</span>
      </CounterLabel>
      <CounterActionRight onClick={handleIncrease}>+</CounterActionRight>
    </CounterWrapper>
  )
}

export default enhancer(Counter)
