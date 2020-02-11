import React from 'react';
import styled from 'styled-components';

import { Link } from '@app/core/primitives';
import { Icon } from '@app/core/primitives/Icon/Icon';
import { Sprite } from '@app/core/primitives/Icon/Sprite';
import { useTranslation } from '@app/core/libs/WithTranslate';
import { getFromConfig } from '@app/core/libs/getPublicRuntimeConfig';

import { Navigation } from './Navigation';
import { Social } from './Social';

interface LayoutProps {
  isError?: boolean;
  children: React.ReactNode;
}

export const Layout = React.memo(({ children }: LayoutProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Sprite />
      <Main>
        <Aside className="hide-scrollbar">
          <LogoLink isNextLink href="/" passHref>
            <a>
              <LogoIcon icon="icons--logo-header" />
            </a>
          </LogoLink>
          <Navigation />
          <Social />
          <DeliveryLink target="_blank" href={getFromConfig('deliveryUrl')}>
            <a>{t('nav.delivery')}</a>
            <Icon icon="icons--arrow-default" />
          </DeliveryLink>
          <Schedule>
            {/* TODO: treat time properly */}
            <Time>8:00 – 21:00</Time>
            <NowOpen>{t('nav.nowOpen')}</NowOpen>
          </Schedule>
        </Aside>
        <Header>Даниловский рынок</Header>
        {children}
        <Footer>Даниловский рынок футер</Footer>
      </Main>
    </>
  );
});

const LogoLink = styled(Link)`
  margin-bottom: 24px;
`;
const LogoIcon = styled(Icon)``;

const Main = styled.main`
  padding-left: 256px;
  @media (max-width: 1280px) {
    padding-left: 0;
  }
`;
const Aside = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  width: 256px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;
  border-right: 1px solid var(--color-text);

  @media (max-width: 1280px) {
    display: none;
  }
`;

const Header = styled.header`
  height: 96px;
`;
const Footer = styled.footer``;

const DeliveryLink = styled(Link)`
  min-height: 62px;
  border-top: 1px solid var(--color-text);
  border-bottom: 1px solid var(--color-text);
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 24px;
  position: relative;
  & svg {
    position: absolute;
    top: 11px;
    right: 12px;
  }
`;

const Schedule = styled.section`
  min-height: 62px;
  border-bottom: 1px solid var(--color-text);

  padding: 16px;
  display: flex;
  flex-direction: column;
`;
const Time = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 24px;

  letter-spacing: 0.02em;
  margin-bottom: 8px;
`;
const NowOpen = styled.span`
  font-size: 13px;
  line-height: 16px;
  &:before {
    content: '';
    display: inline-block;
    position: relative;
    top: 1px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--color-text);
    margin-right: 4px;
  }
`;
