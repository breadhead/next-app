import React from 'react';
import styled from 'styled-components';

import { Link } from '@app/core/primitives';
import { Icon } from '@app/core/primitives/Icon/Icon';
import { IconType } from '@app/core/primitives/Icon/IconType';

const socialLinks = [
  {
    href: 'https://www.facebook.com/danrinok/',
    icon: 'icons--fb',
  },
  {
    href: 'https://vk.com/danrinok',
    icon: 'icons--vk',
  },
  {
    href: 'https://www.instagram.com/danilovskymarket/',
    icon: 'icons--instagram',
  },
];

export const Social = () => (
  <Socials>
    {socialLinks.map(link => (
      <SoclialItem key={link.href}>
        <SocialLink target="_blank" href={link.href} passHref>
          <a>
            <SocialIcon icon={link.icon as IconType} />
          </a>
        </SocialLink>
      </SoclialItem>
    ))}
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
