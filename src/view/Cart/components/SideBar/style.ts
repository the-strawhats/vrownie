import styled from 'styled-components'
import { ButtonContainer } from '@components/Button/style'
import { SelectInputContent } from '@components/SelectInput/style'

import {
  InputContainer,
  InputContent
} from '@components/Input/style'
import { HeadlineThree, Paragraph } from '@components/Typography'
import { devices } from '@constants/devices'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 120vh;
  min-height: 100vh;
  width: 100%;
  max-width: 470px;
  padding-top: 96px;
  box-shadow: 0px 8px 30px rgb(0 0 0 / 10%);
  background-color: ${({ theme }) => theme.colors.vanilla.light};

  ${HeadlineThree} {
    margin-bottom: 8px !important;
  }

  h4 {
    color: ${({theme}) => theme.colors.red.main};
    margin-bottom: 8px;
  }

  @media ${devices.laptop} {
    min-height: auto;
    max-width: 100%;
    position: relative;
    padding: 26px 44px 32px;
    margin-bottom: 194px;
  }

  > ${SelectInputContent} {
    margin-bottom: 8px;
  }

  > ${InputContent} {
    margin-bottom: 8px;
    :last-of-type {
      > ${InputContainer} {
        height: 80px;
      }
    }
  }

  > ${HeadlineThree} {
    margin-bottom: 24px;
  }

  > ${ButtonContainer} {
    bottom: 53px;
    margin-top: 16px;
    margin-bottom: 32px;

    @media ${devices.mobileL} {
      display: none;
    }
  }
`

export const SideBarInputWrapper = styled.div`
  display: flex;
  margin-bottom: 64px;
  max-width: 238px;

  > ${InputContent} {
    :first-of-type {
      margin-right: 8px;
      max-width: 75px;
    }
  }

  @media ${devices.mobileL} {
    margin-bottom: 40px;
  }

  @media ${devices.laptop} {
    margin-bottom: 40px;
    max-width: 100%;
  }
`
