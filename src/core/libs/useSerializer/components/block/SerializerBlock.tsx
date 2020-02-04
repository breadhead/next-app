import * as React from 'react';

import { SecondaryTitle, DetailText, SecondaryTitleSmall } from '../styled';

export interface SerializerBlockProps {}

export const SerializerBlock = ({ props }: { props: any }) => {
  const style = props.node.style || 'normal';

  if (/^h4/.test(style)) {
    return <SecondaryTitleSmall>{props.children}</SecondaryTitleSmall>;
  }

  if (/^h\d/.test(style)) {
    return <SecondaryTitle>{props.children}</SecondaryTitle>;
  }

  return <DetailText>{props.children}</DetailText>;
};
