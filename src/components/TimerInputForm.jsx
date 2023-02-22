import React, {useState} from 'react';


// TODO: адекватно с интервалами можно работать только через useEffect, нужен рефактор
// TODO: нужно потыкать аккаунты firebase
export function TimerInputForm(props) {
  const [time, setTime] = useState('00:02');
  const [isStarted, setIsStarted] = useState(false);

  function handleKey() {
    if (!isStarted) {
      setIsStarted(true);
      const interval = setInterval(() => {
        if (time === '00:01') {
          clearInterval(interval);
          setIsStarted(false);
        }

        let [minutes, seconds] = time.split(':');
        if (seconds === '00') {
          minutes -= 1;
          seconds = 59;
        } else {
          seconds--
        }
        setTime(`${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`);
        console.log(time);
      }, 1000);
    }
  }

  return (
      <div className="timer-container">
        <p>{time}</p>
        <input
            type="time"
            onChange={e => setTime(e.target.value)}
            value={time}
            id='timer'
        />
        <button onClick={handleKey}>{isStarted ? 'Stop timer' : 'Start timer'}</button>
      </div>
  );
}