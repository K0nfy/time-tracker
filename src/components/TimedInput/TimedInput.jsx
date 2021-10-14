import { useState } from 'react';

import {
  StyledTimedInput, Span, Input,
  PlayButtonContainer, StyledPlayButton
} from './TimedInput.styles';

import Stopwatch from '../Stopwatch/Stopwatch';

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
      <div>{isInCountMode ? 'ಠ⁠_⁠ಠ' : '(⁠ ⁠´⁠ ⁠ｰ⁠ ⁠`⁠)'}</div>
      <Span>
        {isInCountMode ? <Stopwatch isRunning/> : <Stopwatch/>}
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
