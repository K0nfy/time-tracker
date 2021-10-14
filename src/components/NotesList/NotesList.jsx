import { useState } from 'react';

import { StyledNotesList } from './NotesList.styles';

import NoteView from '../NoteView/NoteView';
import NoteEdit from '../NoteEdit/NoteEdit';

export default function NotesList({ list, removeNote, updateNoteText }) {
  const [inEditModeMap, setInEditModeMap] = useState({});

  const turnOnNoteEditMode = (index) => {
    const noteObj = list[index];

    setInEditModeMap(
      Object.assign({ [noteObj.id]: true }, inEditModeMap)
    );
  };

  const handleTextUpdate = (index, newText) => {
    const noteObj = list[index];

    delete inEditModeMap[noteObj.id];
    setInEditModeMap(Object.assign({}, inEditModeMap));

    updateNoteText(index, newText);
  };

  return (
    <StyledNotesList>
      {
        list.map((noteObj, i) => {
          if (inEditModeMap[noteObj.id] === true) {
            return <NoteEdit
              key={noteObj.id}
              data={noteObj}
              handleTextUpdate={(txt) => handleTextUpdate(i, txt)}
              handleDelete={() => removeNote(i)}
            />
          } else {
            return <NoteView
              key={noteObj.id}
              data={noteObj}
              handleEdit={() => turnOnNoteEditMode(i)}
              handleDelete={() => removeNote(i)}
            />
          }
        })
      }
    </StyledNotesList>
  );
}
