import { useEffect } from 'react';

// TODO change to useScrollCenter
export const useScrollLeft = (
  ref: React.MutableRefObject<HTMLElement | undefined>,
  className: string,
  calling = false,
) => {
  useEffect(() => {
    if (!calling) return;

    const container = ref.current;
    const active =
      container && (container.querySelector(className) as HTMLElement);

    if (
      container &&
      active &&
      container.offsetWidth / 2 < active.offsetLeft + active.offsetWidth
    ) {
      container.scrollLeft =
        active.offsetLeft -
        container.offsetWidth / 2 +
        active.offsetWidth / 2 +
        Math.abs(container.offsetLeft);
    }
  }, []);
};
