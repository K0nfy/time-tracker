import styled from 'styled-components';

export const StyledNoteView = styled.div`
  display: flex;
  justify-content: space-around;
  flex-basis: 100%;
  border: 1px solid black;
  margin-bottom: 20px;
  padding: 4px 0;
`;

export const Section = styled.section`
  flex-basis: 66%;
`;

export const Span = styled.span`
  display: block;
  margin: 9px;
`;

export const BoldSpan = styled.span`
  font-weight: bold;
`;

export const TextSpan = styled(Span)`
  overflow-wrap: anywhere;
`;

export const EditButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 25%;
`;
