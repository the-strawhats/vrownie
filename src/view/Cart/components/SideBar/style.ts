import styled from 'styled-components'
import { ButtonContainer } from '../../../../components/Button/style'
import {
  InputContainer,
  InputContent
} from '../../../../components/Input/style'
import { HeadlineThree } from '../../../../components/Typography'
import { devices } from '../../../../constants/devices'

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

  @media ${devices.mobileL} {
    position: relative;
    padding: 26px 44px 32px;
    height: auto;
    min-height: 0;
    margin-bottom: 194px;
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
    position: absolute;
    bottom: 53px;

    @media ${devices.mobileL} {
      display: none;
    }
  }
`

export const SideBarInputWrapper = styled.div`
  display: flex;
  max-width: 238px;
  margin-bottom: 64px;

  > ${InputContent} {
    :first-of-type {
      margin-right: 8px;
      max-width: 75px;
    }
  }

  @media ${devices.mobileL} {
    margin-bottom: 40px;
  }
`
