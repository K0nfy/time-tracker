import styled from 'styled-components';

export const StyledTinyButton = styled.button`
  width: 30px;
  height: 30px;
  padding: 0px;
  line-height: 13px;
  cursor: pointer;
  border: 1px solid black;
  background-color: ${({ flavor }) => {
    return (
      flavor === 'green' ? '#44ff33' :
      flavor === 'yellow' ? '#fffc33' :
      flavor === 'red' ? '#ffa6a6' :
      '#efefef'
    );
  }};
`;
