import React from 'react';
import styled from 'styled-components';

import { useTranslation } from '@app/core/libs/WithTranslate';
import { ROUTER } from '@app/core/router';
import { Link } from '@app/core/primitives';

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <NavList>
      <NavListItem>
        <NavListLink href={ROUTER.events} isNextLink passHref>
          <a>{t('nav.events')}</a>
        </NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink href={ROUTER.shops} isNextLink passHref>
          <a>{t('nav.shops')}</a>
        </NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink href={ROUTER.cafe} isNextLink passHref>
          <a>{t('nav.cafe')}</a>
        </NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink href={ROUTER.about} isNextLink passHref>
          <a>{t('nav.about')}</a>
        </NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink href={ROUTER.vintage} isNextLink passHref>
          <a>{t('nav.vintage')}</a>
        </NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink href={ROUTER.visitors} isNextLink passHref>
          <a>{t('nav.visitors')}</a>
        </NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink href={ROUTER.contacts} isNextLink passHref>
          <a>{t('nav.contacts')}</a>
        </NavListLink>
      </NavListItem>
    </NavList>
  );
};

const NavList = styled.ul``;
const NavListItem = styled.li``;
const NavListLink = styled(Link)``;
