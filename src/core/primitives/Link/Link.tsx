import * as React from 'react';
import NextLink, { LinkProps } from 'next/link';
import { ReactChild, ReactFragment } from 'react';

import { StyledLink } from './styled';

export type LinkType = React.FunctionComponent<LinkPrimitiveProps>;

interface LinkPrimitiveProps extends LinkProps {
  children?: ReactChild | ReactFragment;
  target?: '_blank' | '_self' | '_parent' | '_top';
  isNextLink?: boolean;
  isCustomLink?: boolean;
  download?: boolean;
  onClick?: (event?: any) => void;
  className?: string;
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
      {...rest}
    >
      {children}
    </StyledLink>
  ) : (
    <NextLink {...rest} href={href} as={as || href}>
      {isCustomLink ? (
        children
      ) : (
        <StyledLink className={className}>{children}</StyledLink>
      )}
    </NextLink>
  );
};
