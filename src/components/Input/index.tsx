import React from 'react'
import { InputContent, InputContainer } from './style'
import { Label } from '../Typography'

interface InputInterface {
  label?: string
  active?: boolean
}

const Input: React.FC<InputInterface> = ({
  label,
  active
}) => {
  return (
    <InputContent>
      <Label>
        {label}
        <span className="red">:</span>
      </Label>
      <InputContainer active={active} />
    </InputContent>
  )
}

export default Input
