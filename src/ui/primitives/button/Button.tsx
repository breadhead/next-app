import React from 'react';

import { ButtonWrapper, ButtonWrapperProps } from './styled';

function ButtonComponent(props: ButtonWrapperProps) {
  const { children, ...rest } = props;
  return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
}

export const Button = React.memo(ButtonComponent);
