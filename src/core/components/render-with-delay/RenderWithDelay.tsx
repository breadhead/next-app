import { useState, useEffect } from 'react';
export const RenderWithDelay = ({ children }) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMount(true);
    }, 500);
  }, []);
  return mount ? children : null;
};
