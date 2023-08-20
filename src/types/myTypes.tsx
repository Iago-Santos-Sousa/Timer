export type MainType = {
  hours: number;
  minutes: number;
  seconds: number;
  isActive: boolean;
  isPaused: boolean;
  setHours: (param: number) => void;
  setMinutes: (param: number) => void;
  setSeconds: (param: number) => void;
  handleStart: () => void;
  handlePause: () => void;
  handleReset: () => void;
};

export type InputType = {
  setHours: (param: number) => void;
  setMinutes: (param: number) => void;
  setSeconds: (param: number) => void;
};

export type ControlButtonsTypes = {
  isActive: boolean;
  isPaused: boolean;
  handleStart: () => void;
  handlePause: () => void;
  handleReset: () => void;
};

export type DisplayCountdownTypes = {
  hours: number;
  minutes: number;
  seconds: number;
};
