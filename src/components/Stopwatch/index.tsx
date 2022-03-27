import { useEffect, useState } from 'react';
import Button from '../Button';
import Display from '../Display';
import './styles.css';

/**
 * Returns the time unit formatted with a 0 at the beginning when the value is
 * between 0 and 9
 *
 * @param unit - Time unit
 */
export function formatTimeUnit(unit: string): string {
  return unit.padStart(2, '0');
}

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [stopwatchState, setStopwatchState] = useState<'running' | 'stopped'>('stopped');
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  /**
   * Stop the stopwatch and reset the time
   */
  function handleStop() {
    setTime(0);
    setStopwatchState('stopped');
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (stopwatchState === 'running') {
      timeoutId = setTimeout(() => (
        setTime((previousState) => previousState + 1)
      ), 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [stopwatchState, time]);

  return (
    <div className="stopwatch">
      <Display
        minutes={formatTimeUnit(minutes.toString())}
        seconds={formatTimeUnit(seconds.toString())}
      />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        minWidth: '15rem',
      }}
      >
        <Button
          onClick={() => setStopwatchState('running')}
        >
          Play
        </Button>
        <Button
          onClick={() => setStopwatchState('stopped')}
        >
          Pause
        </Button>
        <Button
          onClick={() => handleStop()}
        >
          Stop
        </Button>
      </div>
    </div>
  );
}

export default Stopwatch;
