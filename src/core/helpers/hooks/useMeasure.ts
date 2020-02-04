import { useRef, useState, useEffect, MutableRefObject } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export const useMeasure = (ref: MutableRefObject<HTMLElement | undefined>) => {
  const [bounds, set] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const { current: ro } = useRef<ResizeObserver>(
    new ResizeObserver(([entry]) => set(entry.contentRect)),
  );

  useEffect(() => {
    if (ref.current) ro.observe((ref as any).current);
    return () => ro.disconnect();
  }, [ro]);

  return { ref, bounds };
};
