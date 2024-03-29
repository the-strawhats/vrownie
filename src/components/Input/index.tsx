import React from 'react'
import { InputContent, InputContainer } from './style'
import { Label } from '@components/Typography'

interface InputInterface {
  value?: string
  label?: string
  placeholder?: string
  active?: boolean
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  isDisabled?: boolean
}

const Input: React.FC<InputInterface> = ({
  value,
  label,
  placeholder,
  active,
  onChange,
  isDisabled
}) => {
  return (
    <InputContent>
      <Label>
        {label}
        <span className="red">:</span>
      </Label>
      <InputContainer
        active={active}
        onChange={onChange}
        disabled={isDisabled}
        value={value}
        placeholder={placeholder}
      />
    </InputContent>
  )
}

export default Input
