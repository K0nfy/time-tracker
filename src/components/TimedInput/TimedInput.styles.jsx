import styled from 'styled-components';

import { Button } from '../PlayButton/PlayButton.styles';

export const StyledTimedInput = styled.form`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  flex-basis: 100%;
  margin-bottom: 10px;
  text-align: center;
  font-size: 17px;
  line-height: 20px;
`;

export const Input = styled.input`
  flex-basis: 80%;
  padding: 0 0 0 10px;
`;

export const PlayButtonContainer = styled.div`
  flex-basis: 15%;
`;

export const StyledPlayButton = styled(Button)`
  display: block;
  margin-left: auto;
`;
