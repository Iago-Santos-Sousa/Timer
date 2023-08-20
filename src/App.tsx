import "./App.css";
import useCountdown from "./hooks/useCountdown";
import Inputs from "./components/Inputs";
import ControlButtons from "./components/ControlButtons";
import DisplayCountdown from "./components/DisplayCountdown";

function App() {
  const {
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
  } = useCountdown();

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <DisplayCountdown hours={hours} minutes={minutes} seconds={seconds} />

      <ControlButtons
        isActive={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePause={handlePause}
        handleReset={handleReset}
      />

      <Inputs
        setHours={setHours}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
    </div>
  );
}

export default App;
