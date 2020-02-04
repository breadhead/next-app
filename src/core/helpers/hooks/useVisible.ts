import { useEffect, useRef, useState } from 'react';

export default function useVisible(initialIsVisible = false) {
  const [isVisible, setVisible] = useState(initialIsVisible);
  const ref = useRef<HTMLElement>(null);

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setVisible(false);
    }
  };

  const handleClickOutside = event => {
    if (ref.current && !ref.current?.contains(event.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown, true);
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isVisible, setVisible };
}
