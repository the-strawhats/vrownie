import React from 'react'
import iconMapper from '../../assets/icons'
import { IconContainer } from './style'

interface IconInterface {
  id: string
  height?: number
  width?: number
}

const Icon: React.FC<IconInterface> = ({ id, height, width }) => {
  const IconComponent = iconMapper[id]
  return (
    <IconContainer height={height} width={width}>
      <IconComponent />
    </IconContainer>
  )
}

export default Icon
