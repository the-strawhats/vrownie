import React from 'react'
import { ButtonContainer } from './style'
import { Paragraph } from '../Typography'

interface ButtonInterface {
  label: string
  onClick?: () => any
  fixed?: boolean
  isDisabled?: boolean
}

const Button: React.FC<ButtonInterface> = ({ label, onClick, fixed, isDisabled = false  }) => {
  return (
    <ButtonContainer fixed={fixed} onClick={onClick} isDisabled={isDisabled}>
      <Paragraph weigth='bold' color="vanilla">{label}</Paragraph>
    </ButtonContainer>
  )
}

export default Button
