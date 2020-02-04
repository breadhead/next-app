import * as React from 'react';

import { ItalicText } from '../styled';

interface SerializerEmProps {
  props: any;
}

export const SerializerEm = ({ props }: SerializerEmProps) => {
  return <ItalicText>{props.children}</ItalicText>;
};
