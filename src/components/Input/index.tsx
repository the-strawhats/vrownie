import React from 'react'
import { InputContent, InputContainer } from './style'
import { Label } from '../Typography'

interface InputInterface {
  label?: string
  active?: boolean
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputInterface> = ({
  label,
  active,
  onChange
}) => {
  return (
    <InputContent>
      <Label>
        {label}
        <span className="red">:</span>
      </Label>
      <InputContainer active={active} onChange={onChange}/>
    </InputContent>
  )
}

export default Input
