import { msToTime } from '../../utils';

import {
  StyledNoteView, Section, EditButtons,
  Span, BoldSpan, TextSpan
} from './NoteView.styles';

import TinyButton from '../TinyButton/TinyButton';

// data: { id, title, text, timings }
export default function NoteView({
  data, handleEdit, handleDelete
}) {
  return (
    <StyledNoteView>
      <Section>
        <Span>
          <BoldSpan title="Потрачено времени">
            {`⏲ ${msToTime(data.timings.end - data.timings.start)}`}
          </BoldSpan>
          {` – ${data.title}`}
        </Span>
        <TextSpan title="Заметки">{`📝 ${data.text}`}</TextSpan>
        <Span title="Дата завершения">
          {`⏰ ${new Date(data.timings.end).toLocaleString()}`}
        </Span>
      </Section>
      <EditButtons>
        <TinyButton onClick={handleEdit} flavor="yellow">✏️</TinyButton>
        <TinyButton onClick={handleDelete} flavor="red">❌</TinyButton>
      </EditButtons>
    </StyledNoteView>
  );
}
