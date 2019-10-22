import cx from 'classnames';
import React from 'react';

import styles from './Button.css';
import { ButtonKind } from './ButtonKind';
import { ButtonProps } from './ButtonProps';
import { getButtonType } from './helpers/getButtonType';
import { getKindClassName } from './helpers/getKindClassName.ts';

export const Button = ({
  children,
  disabled = false,
  submit = false,
  kind = ButtonKind.Primary,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      className={cx(styles.button, getKindClassName(kind, styles), className)}
      onClick={onClick}
      disabled={disabled}
      type={getButtonType(submit)}
    >
      {children}
    </button>
  );
};
