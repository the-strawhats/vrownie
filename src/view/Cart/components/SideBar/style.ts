import styled from 'styled-components'
import { ButtonContainer } from '@components/Button/style'
import { SelectInputContent } from '@components/SelectInput/style'

import {
  InputContainer,
  InputContent
} from '@components/Input/style'
import { HeadlineThree } from '@components/Typography'
import { devices } from '@constants/devices'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: 470px;
  padding-top: 96px;
  box-shadow: -4px 16px 8px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme.colors.vanilla.light};

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
  /*max-width: 238px;*/
  margin-bottom: 64px;

  > ${InputContent} {
    :first-of-type {
      margin-right: 8px;
      /*max-width: 75px;*/
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
