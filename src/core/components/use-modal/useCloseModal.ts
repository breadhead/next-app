import useKey from 'use-key-hook';

export const useCloseModal = (modalKey: string, close: () => void) => {
  useKey(
    () => {
      close();
    },
    { detectKeys: [27] },
  );
};
