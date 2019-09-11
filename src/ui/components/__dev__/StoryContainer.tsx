import * as React from 'react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const StoryContainer = ({ children }: Props) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
);
