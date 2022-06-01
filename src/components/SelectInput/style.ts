import styled from 'styled-components'
import { Label } from '@components/Typography'

interface InputContainerInterface {
  active?: boolean
}

export const SelectInputContent = styled.div`
  width: 100%;
  max-width: 238px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin-bottom: 8px;
  }
`

export const SelectInputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`

export const SelectInputContainer = styled.div<InputContainerInterface>`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 40px;
  border: ${({ theme, active }) =>
    active
      ? `2px solid ${theme.colors.green.main}`
      : `2px solid ${theme.colors.gray.main}`};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.vanilla.light};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  padding: 8px 48px;
  font-size: 16px;
  transition: all ease 0.3s;
  z-index: 1;
  cursor: pointer;

  ::before {
    position: absolute;
    top: 50%;
    left: 16px;
    content: '';
    width: 8px;
    height: 8px;
    background-color: transparent;
    border-bottom: ${({ theme, active }) =>
      active
        ? `2px solid ${theme.colors.green.main}`
        : `2px solid ${theme.colors.gray.main}`};
    border-right: ${({ theme, active }) =>
      active
        ? `2px solid ${theme.colors.green.main}`
        : `2px solid ${theme.colors.gray.main}`};
    transform: translateY(-50%)
      ${({ active }) => (active ? 'rotateZ(45deg)' : 'rotateZ(-135deg)')};
    transition: all ease 0.3s;
  }
`
export const SelectInputOptions = styled.ul<InputContainerInterface>`
  position: absolute;
  top: calc(100% - 10px);
  max-height: ${({ active }) => (active ? '1000px' : '0px')};
  width: 100%;
  background: ${({ theme }) => theme.colors.vanilla.light};
  padding-top: 10px;
  border: ${({ theme, active }) =>
    active ? `2px solid ${theme.colors.green.dark}` : 'none'};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  list-style-type: none;
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: all ease 0.6s;
`

export const SelectInputOptionsItem = styled.li`
  width: 100%;
  padding: 8px 0px 8px 48px;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.green.dark}`};
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;

  :last-of-type {
    border-bottom: none;
  }
`
