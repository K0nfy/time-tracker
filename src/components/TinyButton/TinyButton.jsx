import { StyledTinyButton } from './TinyButton.styles';

export default function TinyButton({ flavor, children, onClick }) {
  return (
    <StyledTinyButton
      flavor={flavor}
      onClick={onClick}
    >{children}</StyledTinyButton>
  );
}
