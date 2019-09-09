import { pad } from './pad';

export const format = (time: Date) =>
  `${pad(time.getUTCHours())}:${pad(time.getUTCMinutes())}:${pad(
    time.getUTCSeconds(),
  )}`;
