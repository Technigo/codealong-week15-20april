import styled from 'styled-components'

export const Button = styled.button`
  padding: 12px;
  margin: 6px;
  background: ${(props) => props.background || 'yellow'};
  font-size: 20px;
  border: none;
  border-radius: 6px;

  &:hover {
    background: black;
    color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
