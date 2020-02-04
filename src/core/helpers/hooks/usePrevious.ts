import { useRef, useEffect } from 'react';

export const usePrevious = (value: boolean) => {
  const ref = useRef();

  useEffect(() => {
    (ref as any).current = value;
  }, [value]);

  return ref.current;
};
