import cx from 'classnames';
import React from 'react';

import styles from './Button.css';
import { ButtonProps } from './ButtonProps';
import { getButtonType } from './helpers/getButtonType';

export const Button = ({
  children,
  disabled = false,
  submit = false,
  onClick,
  className,
}: ButtonProps) => (
  <button
    className={cx(styles.button, className)}
    onClick={onClick}
    disabled={disabled}
    type={getButtonType(submit)}
  >
    {children}
  </button>
);
