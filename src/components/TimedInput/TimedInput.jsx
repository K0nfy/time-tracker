import { useState } from 'react';

import {
  StyledTimedInput, Span, Input,
  PlayButtonContainer, StyledPlayButton
} from './TimedInput.styles';

export default function TimedInput({ handleInput }) {
  const [titleText, setTitleText] = useState('');
  const [isInCountMode, setIsInCountMode] = useState(false);
  const [startTime, setStartTime] = useState(null);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (isInCountMode) {
      setTitleText('');
      handleInput({
        title: titleText || 'Без имени',
        timings: {
          start: startTime,
          end: Number(new Date())
        }
      });
    } else {
      setStartTime(Date.now());
    }

    setIsInCountMode(!isInCountMode);
  };

  return (
    <StyledTimedInput onSubmit={handleSubmit}>
      <Span>
        {
          isInCountMode ?
          'Здесь должен был быть отсчёт времени ⁠ಠ⁠_⁠ಠ' :
          'Здесь должен был быть отсчёт времени (⁠ ⁠´⁠ ⁠ｰ⁠ ⁠`⁠)'
        }
      </Span>
      <Input
        placeholder="Чем ты будешь заниматься сейчас?"
        maxLength="30"
        type="text"
        value={titleText}
        disabled={isInCountMode}
        onChange={(ev) => setTitleText(ev.target.value)}
      />
      <PlayButtonContainer>
        <StyledPlayButton
          isSquare={isInCountMode}
          onClick={handleSubmit}
        ></StyledPlayButton>
      </PlayButtonContainer>
    </StyledTimedInput>
  );
}
