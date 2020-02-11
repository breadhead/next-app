import NextLink, { LinkProps } from 'next/link';
import * as React from 'react';

import { StyledLink } from './styled';

export type LinkType = React.FunctionComponent<LinkPrimitiveProps>;

interface LinkPrimitiveProps extends Omit<LinkProps, 'href'> {
  children?: React.ReactNode;
  target?: '_blank' | '_self' | '_parent' | '_top';
  isNextLink?: boolean;
  isCustomLink?: boolean;
  download?: boolean;
  onClick?: (event?: any) => void;
  className?: string;
  href?: string;
}

export const Link = ({
  children,
  href,
  target,
  isNextLink,
  onClick,
  download,
  isCustomLink,
  className,
  passHref,
  as,
  ...rest
}: LinkPrimitiveProps) => {
  return !isNextLink ? (
    <StyledLink
      href={href}
      target={target}
      download={download}
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
      {...rest}
    >
      {children}
    </StyledLink>
  ) : (
    <NextLink {...rest} passHref={passHref} href={href as any} as={as || href}>
      {isCustomLink ? (
        children
      ) : (
        <StyledLink className={className}>{children}</StyledLink>
      )}
    </NextLink>
  );
};
