import { useState, useEffect } from "react";
import { MainType } from "../types/myTypes";

const useCountdown = (): MainType => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  let totalSeconds: number;

  useEffect(() => {
    totalSeconds = hours * 3600 + minutes * 60 + seconds;
    let interval: ReturnType<typeof setInterval> | undefined;
    // console.log(totalSeconds);

    if (isActive && totalSeconds > 0 && isPaused === false) {
      interval = setInterval(() => {
        totalSeconds--;
        const newHours = Math.floor(totalSeconds / 3600);
        const newMinutes = Math.floor((totalSeconds % 3600) / 60);
        const newSeconds = totalSeconds % 60;
        setHours(newHours);
        setMinutes(newMinutes);
        setSeconds(newSeconds);
        if (totalSeconds === 0) {
          window.alert("Contagem regressiva terminou!");
        }
      }, 1000);
    } else if (totalSeconds === 0) {
      clearInterval(interval);
      handleReset();
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, hours, minutes, seconds, isPaused]);

  const handleStart = () => {
    if (hours <= 0 && minutes <= 0 && seconds <= 0) {
      // console.log("Inputs vazios");
      return;
    }
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    // setIsActive(false);
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return {
    hours,
    minutes,
    seconds,
    isActive,
    isPaused,
    setHours,
    setMinutes,
    setSeconds,
    handleStart,
    handlePause,
    handleReset,
  };
};

export default useCountdown;
