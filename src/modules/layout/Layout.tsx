import React from 'react';
import styled from 'styled-components';

import { Link } from '@app/core/primitives';
import { Icon } from '@app/core/primitives/Icon/Icon';
import { Sprite } from '@app/core/primitives/Icon/Sprite';

import { Navigation } from './Navigation';

interface LayoutProps {
  isError?: boolean;
  children: React.ReactNode;
}

export const Layout = React.memo(({ children }: LayoutProps) => {
  return (
    <>
      <Sprite />
      <Main>
        <Aside>
          <div className="logo"></div>
          <Navigation></Navigation>
          <Socials>
            <SoclialItem>
              <SocialLink>
                <StyledIcon icon="icons--instagram" />
                <StyledIcon icon="icons--fb" />
                <StyledIcon icon="icons--vk" />
              </SocialLink>
            </SoclialItem>
            <SoclialItem>
              <SocialLink>fb</SocialLink>
            </SoclialItem>
            <SoclialItem>
              <SocialLink>vk</SocialLink>
            </SoclialItem>
          </Socials>
          <DeliveryLink></DeliveryLink>
          <Schedule>
            <Time>8-21</Time>
            <NowOpen></NowOpen>
          </Schedule>
        </Aside>
        <Header>Даниловский рынок</Header>
        {children}
        <Footer>Даниловский рынок футер</Footer>
      </Main>
    </>
  );
});

const StyledIcon = styled(Icon)`
  fill: blue !important;
`;

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
`;

const Header = styled.header``;
const Footer = styled.footer``;

const DeliveryLink = styled(Link)``;
const Socials = styled.ul``;
const SoclialItem = styled.li``;
const SocialLink = styled(Link)``;

const Schedule = styled.section``;
const Time = styled.p``;
const NowOpen = styled.span``;
