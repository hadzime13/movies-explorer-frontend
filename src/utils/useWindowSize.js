import React, { useState } from 'react';

const getBreakPoint = (windowWidth) => {
  if (windowWidth) {
    if (windowWidth < 480) {
      return 'mobile';
    } else if (windowWidth < 769) {
      return 'tablet';
    }
    else if (windowWidth < 1300) {
      return 'display';
    }
    else return 'largeDisplay'
  }
  else {
    return undefined;
  }
}

const useWindowSize = () => {
  const isClient = typeof window === 'object';
  const [windowSize, setWindowSize] = useState(
    isClient ? getBreakPoint(window.innerWidth) : undefined,
  );

  let timer;
  const resizeThrottler = () => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        changeWindowSize();
      }, 100);
    }
  }
  const changeWindowSize = () => {
    setWindowSize(getBreakPoint(window.innerWidth));
  }

  React.useEffect(() => {
    window.addEventListener('resize', resizeThrottler);
    return () => {
      window.removeEventListener('resize', resizeThrottler);
    }
  }, []);
  return windowSize;
}

export default useWindowSize;