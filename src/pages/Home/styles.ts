import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;

  form {
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  width: 100%;
`

const BaseInput = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0 0.5rem;
  height: 2.5rem;

  &:focus {
    border-color: ${(props) => props.theme['green-500']};
    box-shadow: none;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;

  color: ${(props) => props.theme['gray-100']};
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8 rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    padding: 2rem 1rem;
  }
`

export const Separator = styled.div`
  display: flex;
  justify-content: center;

  color: ${(props) => props.theme['green-500']};
  overflow: hidden;
  padding: 2rem 0;
  width: 4rem;
`

export const StartCountdonwButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;

  background: ${(props) => props.theme['green-500']};
  border: 0;
  border-radius: 8px;
  color: ${(props) => props.theme['gray-100']};
  cursor: pointer;
  font-weight: bold;
  padding: 1rem;
  width: 100%;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`
