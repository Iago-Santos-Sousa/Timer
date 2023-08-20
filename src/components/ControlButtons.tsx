import { ControlButtonsTypes } from "../types/myTypes";

const ControlButtons = ({
  isActive,
  isPaused,
  handleStart,
  handlePause,
  handleReset,
}: ControlButtonsTypes): JSX.Element => {
  const StartButton = (
    <button className="btn-start" onClick={handleStart}>
      Start
    </button>
  );

  const ActiveButtons = (
    <>
      <button
        onClick={handlePause}
        className={`${isPaused ? "btn-start" : "btn-resume"}`}
      >
        {isPaused ? "Retomar" : "Pausar"}
      </button>
      <button className="btn-reset" onClick={handleReset}>
        Reset
      </button>
    </>
  );
  return (
    <div className="container-buttons">
      {isActive ? ActiveButtons : StartButton}
    </div>
  );
};

export default ControlButtons;
