import styled from 'styled-components'
import { devices } from '../../constants/devices'

interface TypographyInterface {
  color?: string
  variant?: string
  weigth?: 'light' | 'medium' | 'bold'
  fontSize?: number
}

const typographyWeigthMapper = {
  light: 300,
  medium: 500,
  bold: 700
}

export const HeadlineOne = styled.h1<TypographyInterface>`
  font-size: 80px;
  font-weight: 700;
  line-height: 100px;
  color: ${({ theme, color = 'black', variant = 'main' }) =>
    theme.colors[color][variant]};

  > .red {
    color: ${({ theme }) => theme.colors.red.main};
  }

  > .green {
    color: ${({ theme }) => theme.colors.green.dark};
  }

  @media ${devices.tablet} {
    font-size: 48px;
    line-height: 60px;
  }
`

export const HeadlineTwo = styled.h2<TypographyInterface>`
  font-size: 64px;
  font-weight: 500;
  line-height: 80px;
  color: ${({ theme, color = 'black', variant = 'main' }) =>
    theme.colors[color][variant]};

  > .red {
    color: ${({ theme }) => theme.colors.red.main};
  }

  @media ${devices.tablet} {
    font-size: 36px;
    line-height: 45px;
  }
`

export const HeadlineThree = styled.h3<TypographyInterface>`
  font-size: 48px;
  font-weight: 500;
  line-height: 60px;
  color: ${({ theme, color = 'black', variant = 'main' }) =>
    theme.colors[color][variant]};

  > .red {
    color: ${({ theme }) => theme.colors.red.main};
  }

  @media ${devices.tablet} {
    font-size: 36px;
    line-height: 45px;
  }
`
export const HeadlineFour = styled.h4<TypographyInterface>`
  font-size: 40px;
  font-weight: 500;
  line-height: 50px;
  color: ${({ theme, color = 'black', variant = 'main' }) =>
    theme.colors[color][variant]};

  > .red {
    color: ${({ theme }) => theme.colors.red.main};
  }

  @media ${devices.tablet} {
    font-size: 32px;
    line-height: 40px;
  }
`
export const BodyOne = styled.p<TypographyInterface>`
  font-size: ${({ fontSize = 24 }) => `${fontSize}px`};
  font-weight: ${({ weigth = 'light' }) => typographyWeigthMapper[weigth]};
  line-height: 34px;
  color: ${({ theme, color = 'black', variant = 'main' }) =>
    theme.colors[color][variant]};

  > .red {
    color: ${({ theme }) => theme.colors.red.main};
  }

  @media ${devices.tablet} {
    font-size: 16px;
    line-height: 22px;
  }
`

export const Caption = styled.p<TypographyInterface>`
  font-size: 9px;
  font-weight: 500;
  line-height: 10px;
  color: ${({ theme, color = 'black', variant = 'main' }) =>
    theme.colors[color][variant]};

  @media ${devices.tablet} {
    font-size: 8px;
  }
`

export const Label = styled.label<TypographyInterface>`
  font-size: 16px;
  font-weight: 800;
  line-height: 24px;
  color: ${({ theme, color = 'black', variant = 'main' }) =>
    theme.colors[color][variant]};

  > .red {
    color: ${({ theme }) => theme.colors.red.main};
  }
`

export const CardTitle = styled.label<TypographyInterface>`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme, color = 'black', variant = 'main' }) =>
    theme.colors[color][variant]};
  > .red {
    color: ${({ theme }) => theme.colors.red.main};
  }
`
export const CardPrice = styled.label<TypographyInterface>`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;

  color: ${({ theme, color = 'black', variant = 'main' }) =>
    theme.colors[color][variant]};
  > .red {
    color: ${({ theme }) => theme.colors.red.main};
  }

  > .green {
    color: ${({ theme }) => theme.colors.green.dark};
  }
`
