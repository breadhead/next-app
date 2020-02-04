import * as React from 'react';

export const useResetScroll = () => {
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
};
