import styled from 'styled-components'
import { ButtonContainer } from '../../../../components/Button/style'
import { InputContent } from '../../../../components/Input/style'
import { HeadlineThree } from '../../../../components/Typography'

interface SideBarContainerInterface {}

export const SideBarContainer = styled.div<SideBarContainerInterface>`
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
  background-color: ${({ theme }) => theme.colors.vanilla.light};

  >${InputContent} {
    margin-bottom: 8px;
  }

  > ${HeadlineThree} {
    margin-bottom: 24px;
  }

  > ${ButtonContainer} {
    position: absolute;
    bottom: 53px;
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
`
