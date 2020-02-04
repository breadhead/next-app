import { canUseDOM } from '@app/core/helpers/canUseDom';
import { preventDefault } from '@app/core/helpers/utils';

// TODO доделать и решить проблему скрола в мобильном сафари

export const useCustomScrollLock = () => {
  const lock = () => {
    if (!canUseDOM()) return;
    document.body.style.overflow = 'hidden';
    document.body.style['-webkit-overflow-scrolling'] = 'touch';

    document.body.addEventListener('ontouchstart', preventDefault, false);
  };

  const unlock = () => {
    if (!canUseDOM()) return;
    document.body.style.overflow = 'auto';
    document.body.style['-webkit-overflow-scrolling'] = 'auto';

    document.body.removeEventListener('ontouchstart', preventDefault, false);
  };

  return { lock, unlock };
};
