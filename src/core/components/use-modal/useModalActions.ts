import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

import { postLink } from '@app/core/helpers/postLink';

import { useModalStore } from './useModalStore';

export const useModalActions = (
  key: string,
  resetQuery?: { [name: string]: string | string[] | null },
) => {
  const { add, remove } = useModalStore();
  const router = useRouter();

  useEffect(() => {
    remove(key);
  }, [router]);

  const modalKey = useMemo(() => key, [key]);

  const open = () => add(modalKey);

  const close = (isRedirect = false) => {
    remove(key);

    if (isRedirect) {
      const { href, as } = postLink(router, { modal: null, ...resetQuery });
      return router.push(href, as, { shallow: true });
    }
  };

  return {
    open,
    close,
  };
};
