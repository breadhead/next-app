import React from 'react';

interface Props {
  count: number;
  inc: () => void;
  dec: () => void;
  reset: () => void;
}

export const Counter = ({ count, inc, dec, reset }: Props) => (
  <div>
    <h1>
      Count: <span>{count}</span>
    </h1>
    <button onClick={inc}>+1</button>
    <button onClick={dec}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>
);
