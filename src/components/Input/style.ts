import styled from 'styled-components'
import { Label } from '@components/Typography'

interface InputContainerInterface {
  active?: boolean
}

export const InputContent = styled.div`
  width: 100%;
  max-width: 238px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin-bottom: 8px;
  }
`
export const InputContainer = styled.input<InputContainerInterface>`
  width: 100%;
  height: 40px;
  border: ${({ theme, active }) => active ? `2px solid ${theme.colors.green.main}` : `2px solid ${theme.colors.gray.main}`};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.vanilla.light};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  padding: 8px 16px;
  font-size: 16px;
  transition: all ease 0.3s;

  :focus {
    border: ${({ theme }) => `2px solid ${theme.colors.green.dark}`};
  }
`
