import { isMobile } from 'is-mobile';

export const useScrollBodyLock = () => {
  const lock = () => {
    if (isMobile()) {
      const scrollY = `${window.scrollY}px`;
      const body = document.body;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
      body.style.width = '100vw';
      return;
    }
  };

  const unlock = () => {
    if (isMobile()) {
      const body = document.body;
      const scrollY = body.style.top;
      const parsedScrollY = parseInt(scrollY || '0') * -1;

      body.style.position = '';
      body.style.top = '';
      delete body.style.width;

      if (parsedScrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
      return;
    }
  };

  return { lock, unlock };
};
