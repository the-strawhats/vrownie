import styled from 'styled-components'

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
`

export const CounterLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0px;
  background-color: ${({ theme }) => theme.colors.green.main};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.vanilla.light};
  cursor: default;
`

const CounterAction = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px 4px;
  background-color: ${({ theme }) => theme.colors.green.main};
  border: none;
  height: 100%;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.vanilla.light};
  cursor: pointer;
`

export const CounterActionLeft = styled(CounterAction)`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`
export const CounterActionRight = styled(CounterAction)`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`
