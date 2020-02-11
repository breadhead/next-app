import React from 'react';
import styled from 'styled-components';

import { Link } from '@app/core/primitives';
import { Icon } from '@app/core/primitives/Icon/Icon';

export const Social = () => (
  <Socials>
    <SoclialItem>
      <SocialLink
        target="_blank"
        href="https://www.facebook.com/danrinok/"
        passHref
      >
        <a>
          <SocialIcon icon="icons--fb" />
        </a>
      </SocialLink>
    </SoclialItem>
    <SoclialItem>
      <SocialLink target="_blank" href="https://vk.com/danrinok" passHref>
        <a>
          <SocialIcon icon="icons--vk" />
        </a>
      </SocialLink>
    </SoclialItem>
    <SoclialItem>
      <SocialLink
        target="_blank"
        href="https://www.instagram.com/danilovskymarket/"
        passHref
      >
        <a>
          <SocialIcon icon="icons--instagram" />
        </a>
      </SocialLink>
    </SoclialItem>
  </Socials>
);

export const Socials = styled.ul`
  display: flex;

  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 16px;
`;
export const SoclialItem = styled.li``;
export const SocialLink = styled(Link)`
  padding: 8px;
`;

export const SocialIcon = styled(Icon)``;
