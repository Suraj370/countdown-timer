'use client'
import React, {useState, useEffect, useRef} from "react";
const CountdownTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => (prevTime >= 1 ? prevTime - 1 : 0));
      }, 1000);
    } else if (isPaused) {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTime(25 * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className= 'flex flex-col gap-5  justify-center w-full h-[calc(100vh_-_80px)] bg-gradient-to-br from-white to-pink-200  items-center'>
      <div className="h-full flex items-center justify-center gap-9 flex-col">
          <h1 className=" text-7xl  font-semibold" >{formatTime(time)}</h1>
          <div className="flex gap-9 " >
            {!isActive && !isPaused && <button className="py-2 px-4 cursor-pointer bg-white text-2xl rounded-full"  onClick={handleStart}>Start</button>}
            {isActive && !isPaused && <button className="py-2 px-4 cursor-pointer bg-white text-2xl rounded-full"   onClick={handlePause}>Pause</button>}
            {isPaused && <button className="py-2 px-4 cursor-pointer bg-white text-2xl rounded-full"  onClick={handleResume}>Resume</button>}
            <button className="py-2 px-4 cursor-pointer bg-white text-2xl rounded-full "  onClick={handleReset}>Reset</button>
          </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
