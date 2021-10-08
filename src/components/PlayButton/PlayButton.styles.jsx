import styled, { css } from 'styled-components'

export const Button = styled.button`
  width: 36px;
  height: 36px;
  padding: 0;
  cursor: pointer;
  background: transparent;
  transition: 200ms all linear;
  border-style: solid;
  border-width: 18px 0 18px 36px;
  border-color:  transparent transparent transparent #95ff0b;
  &:hover {
    border-color: transparent transparent transparent #62ff08; 
  }

  ${props => props.isSquare && css`
    border-width: 0px 0 0px 36px;
    border-color: rgb(255, 2, 68);
    &:hover {
      border-color: rgb(255, 2, 2);
    }
  `}
`;
