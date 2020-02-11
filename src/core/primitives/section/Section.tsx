import * as React from 'react';
import styled from 'styled-components';

import { Link } from '../Link';
import { Icon } from '../Icon/Icon';

export const SectionTitle = styled.h2`
  font-size: 80px;
  line-height: 80px;

  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  padding-left: 32px;
  padding-top: 40px;
  padding-bottom: 32px;
  border-top: 1px solid var(--color-text);
  border-bottom: 1px solid var(--color-text);
`;

interface FooterProps {
  text: string;
  href: string;
  className?: string;
}

export const SectionFooter = ({ text, href, className }: FooterProps) => (
  <FooterLink className={className} isNextLink passHref href={href}>
    <a>{text}</a>
    <Icon icon="icons--arrow-default" />
  </FooterLink>
);

const FooterLink = styled(Link)`
  display: flex;
  width: 100%;
  min-height: 80px;
  font-size: 20px;
  line-height: 28px;
  border-top: 1px solid var(--color-text);
  border-bottom: 1px solid var(--color-text);
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  position: relative;

  & svg {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
