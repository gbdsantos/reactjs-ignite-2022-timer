import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  height: calc(100vh - 10rem);
  max-width: 74rem;
  margin: 5rem auto;
  padding: 2.5rem;
`
