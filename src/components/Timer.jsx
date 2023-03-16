import React, {useEffect, useState} from 'react';

export function Timer(props) {
  const [time, setTime] = useState('00:50');
  const [isStarted, setIsStarted] = useState(false);

  function handleStatus() {
    console.log(`time: ${time}   isStarted: ${isStarted}`);
  }

  function handleKey() {
    if (isStarted) {
      setIsStarted(false);
    } else {
      setIsStarted(true);
    }
  }

  useEffect(() => {
    let timeout = null;

    if (isStarted) {
      console.log(`time remaining: ${time}`);
      timeout = setTimeout(() => {
        if (time === '00:00') {
          clearTimeout(timeout);
          setIsStarted(false);
        } else {
          let [minutes, seconds] = time.split(':');

          if (seconds === '00') {
            minutes -= 1;
            seconds = 59;
          } else {
            seconds--
          }

          setTime(`${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`);
        }
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [time, isStarted])

    return (
        <>
        <div className="timer-container">
          <p>{time}</p>
          <input
              type="time"
              onChange={e => setTime(e.target.value)}
              value={time}
              id="timer"
          />
          <button onClick={handleKey}>{isStarted ? 'Stop timer' : 'Start timer'}</button>
          <button onClick={handleStatus}>Status</button>
        </div>
        <hr />
        </>
    );
  }