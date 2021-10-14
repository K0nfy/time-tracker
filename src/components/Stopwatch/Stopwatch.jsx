import { useRef, useState, useEffect } from 'react';

import { msToTime } from '../../utils';

export default function Stopwatch({ isRunning }) {
  const [timePassed, setTimePassed] = useState(0);
  const digitsEl = useRef(null);

  useEffect(() => {
    if (isRunning !== true) return setTimePassed(0);

    const timer = setInterval(() => {
      setTimePassed(timePassed + 1000);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timePassed]);

  return (
    <span ref={digitsEl}>{msToTime(timePassed)}</span>
  );
}
