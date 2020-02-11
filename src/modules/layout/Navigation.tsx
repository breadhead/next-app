import React from 'react';
import styled from 'styled-components';

import { useTranslation } from '@app/core/libs/WithTranslate';
import { ROUTER } from '@app/core/router';
import { Link } from '@app/core/primitives';

const navigationLinks = [
  {
    text: 'nav.events',
    href: ROUTER.events,
  },
  {
    text: 'nav.shops',
    href: ROUTER.shops,
  },
  {
    text: 'nav.cafe',
    href: ROUTER.cafe,
  },
  {
    text: 'nav.about',
    href: ROUTER.about,
  },
  {
    text: 'nav.vintage',
    href: ROUTER.vintage,
  },
  {
    text: 'nav.visitors',
    href: ROUTER.visitors,
  },
  {
    text: 'nav.contacts',
    href: ROUTER.contacts,
  },
];

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <NavList className="reset-last-bottom-margin">
      {navigationLinks.map(link => (
        <NavListItem key={link.href}>
          <NavListLink href={link.href} isNextLink passHref>
            <a>{t(link.text)}</a>
          </NavListLink>
        </NavListItem>
      ))}
    </NavList>
  );
};

const NavList = styled.ul`
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 44px;
  font-size: 20px;
  line-height: 28px;
  display: grid;
  grid-row-gap: 12px;
`;
const NavListItem = styled.li`
  text-transform: uppercase;
`;
const NavListLink = styled(Link)`
  cursor: pointer;
  width: 100%;
  display: block;
`;
