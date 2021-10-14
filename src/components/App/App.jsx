import { useState } from 'react';
import { nanoid } from 'nanoid';

import { StyledApp } from './App.styles';

import TimedInput from '../TimedInput/TimedInput';
import NotesList from '../NotesList/NotesList';

export default function App() {
  const [notesArr, setNotesArr] = useState(
    JSON.parse(localStorage.getItem('notesList')) || []
  );

  const addNote = ({ title, timings }) => {
    const newArr = notesArr.slice();
    const newNote = {
      id: nanoid(), title, text: '', timings
    };

    newArr.unshift(newNote);

    localStorage.setItem('notesList', JSON.stringify(newArr));
    setNotesArr(newArr);
  };

  const removeNote = (index) => {
    if (!confirm('Это безвозвратно удалит записку')) return;

    const newArr = notesArr.slice();

    newArr.splice(index, 1);

    localStorage.setItem('notesList', JSON.stringify(newArr));
    setNotesArr(newArr);
  };

  const updateNoteText = (index, newText) => {
    const newArr = notesArr.slice();
    const noteObj = newArr[index];

    noteObj.text = newText;

    localStorage.setItem('notesList', JSON.stringify(newArr));
    setNotesArr(newArr);
  };

  return (
    <StyledApp>
      <TimedInput handleInput={addNote}/>
      <NotesList
        list={notesArr}
        removeNote={removeNote}
        updateNoteText={updateNoteText}
      />
    </StyledApp>
  );
}
