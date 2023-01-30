import { useState } from 'react';

import ShowText from './ShowText';
import style from '../css/Counter.module.css';
import NewTable from './NewTable.js';
import useCounter from '../hooks/useCounter';
import useTimeParser from '../hooks/useTimeParser.js';
import TasksForm from './TasksForm';

function Counter() {
  const [counterStarted, isCounterStarted] = useState(false);
  const [counters, setCounters] = useState([]);
  const { count, startCount, pauseCount } = useCounter();

  //hook useTimeParser
  const { parseMillisecondsToHMS } = useTimeParser();

  const pushNewTable = (count, title, description) => {
    const date = new Date();
    setCounters([...counters, { date, count, title, description }]);
  };

  const startCounter = ({ title, description }) => {
    if (counterStarted) {
      pauseCount();
      pushNewTable(count, title, description);

      isCounterStarted(false);
    } else {
      startCount();
      isCounterStarted(true);
    }
  };

  return (
    <div className={`${style.content}, text-left fs-5 fw-semibold text-info`}>
      <TasksForm isCounterStarted={isCounterStarted} onSubmit={startCounter} />
      <p className='m-3'>Chronomètre : {parseMillisecondsToHMS(count)}</p>
      <ShowText counterStarted={counterStarted} />
      <NewTable counters={counters} />
    </div>
  );
}

export default Counter;
