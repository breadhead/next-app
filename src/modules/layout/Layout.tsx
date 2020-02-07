import React from 'react';

import { Link } from '@app/core/primitives';
import { useTranslation } from '@app/core/libs/WithTranslate';
import { ROUTER } from '@app/core/router';

interface LayoutProps {
  isError?: boolean;
  children: React.ReactNode;
}

export const Layout = React.memo(({ children }: LayoutProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <nav>
        <div className="logo"></div>
        <ul>
          <li>
            <Link href={ROUTER.events} isNextLink passHref>
              <a>{t('nav.events')}</a>
            </Link>
          </li>
          <li>
            <Link href={ROUTER.shops} isNextLink passHref>
              <a>{t('nav.shops')}</a>
            </Link>
          </li>
          <li>
            <Link href={ROUTER.cafe} isNextLink passHref>
              <a>{t('nav.cafe')}</a>
            </Link>
          </li>
          <li>
            <Link href={ROUTER.about} isNextLink passHref>
              <a>{t('nav.about')}</a>
            </Link>
          </li>
          <li>
            <Link href={ROUTER.vintage} isNextLink passHref>
              <a>{t('nav.vintage')}</a>
            </Link>
          </li>
          <li>
            <Link href={ROUTER.visitors} isNextLink passHref>
              <a>{t('nav.visitors')}</a>
            </Link>
          </li>
          <li>
            <Link href={ROUTER.contacts} isNextLink passHref>
              <a>{t('nav.contacts')}</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li></li>
        </ul>
      </nav>
      {children}
    </div>
  );
});
