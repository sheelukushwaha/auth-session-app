import { useEffect, useState } from 'react';

const useInactivity = (timeout = 60) => {
  const [inactive, setInactive] = useState(false);
  const [counter, setCounter] = useState(timeout);

  useEffect(() => {
    let timer;
    const resetTimer = () => {
      setInactive(false);
      setCounter(timeout);
    };

    const handleActivity = () => resetTimer();

    const tick = () => {
      setCounter(prev => {
        if (prev <= 1) setInactive(true);
        return prev - 1;
      });
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);

    timer = setInterval(tick, 1000);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      clearInterval(timer);
    };
  }, [timeout]);

  return { inactive, counter };
};

export default useInactivity;