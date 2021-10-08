import { useState } from 'react';

import {
  StyledNoteEdit, Span, Textarea, Section, EditButtons
} from './NoteEdit.styles';

import TinyButton from '../TinyButton/TinyButton';

// data: { id, title, text, timings }
export default function NoteEdit({
  data, handleTextUpdate, handleDelete
}) {
  const [editedText, setEditedText] = useState(data.text);

  return (
    <StyledNoteEdit>
      <Section>
        <Span>{`⏲ ${data.title}`}</Span>
        <Textarea
          value={editedText}
          placeholder='И на что было потрачено это время?'
          onChange={(ev) => setEditedText(ev.target.value)}
        ></Textarea>
      </Section>
      <EditButtons>
        <TinyButton
          onClick={() => handleTextUpdate(editedText)}
          flavor="green"
        >✔️</TinyButton>
        <TinyButton
          onClick={handleDelete}
          flavor="red"
        >❌</TinyButton>
      </EditButtons>
    </StyledNoteEdit>
  );
}
