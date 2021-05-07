import React from 'react'
import { ButtonContainer } from './style'
import { BodyOne } from '../Typography'

interface ButtonInterface {
  label: string
  onClick?: () => any
  fixed?: boolean
}

const Button: React.FC<ButtonInterface> = ({ label, onClick, fixed  }) => {
  return (
    <ButtonContainer fixed={fixed} onClick={onClick}>
      <BodyOne weigth='bold' color="vanilla">{label}</BodyOne>
    </ButtonContainer>
  )
}

export default Button
