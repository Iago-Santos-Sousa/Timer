import { DisplayCountdownTypes } from "../types/myTypes";

const DisplayCountdown = ({
  hours,
  minutes,
  seconds,
}: DisplayCountdownTypes): JSX.Element => {
  console.log({ hours, minutes, seconds });

  return (
    <div className="display-timer">
      <span>
        {`${hours < 10 ? "0" + hours.toString().padStart(1, "0") : hours}`}:
        {`${
          minutes < 10 ? "0" + minutes.toString().padStart(1, "0") : minutes
        }`}
        :
        {`${
          seconds < 10 ? "0" + seconds.toString().padStart(1, "0") : seconds
        }`}
      </span>
    </div>
  );
};

export default DisplayCountdown;
