import { useState } from 'react';
let counterId = null;

function useCounter() {
  const [count, setCount] = useState(0);

  const startCount = () => {
    if (!counterId) {
      counterId = setInterval(() => {
        setCount(count => count + 1);
      }, 1000);
    } else {
      throw new Error('count is already running');
    }
  };
  const pauseCount = () => {
    if (counterId) {
      const saveCount = Number(count);
      setCount(0);
      clearInterval(counterId);
      counterId = null;
      return saveCount;
    } else {
      throw new Error('count is not running');
    }
  };

  return {
    count,
    startCount,
    pauseCount,
  };
}

export default useCounter;
