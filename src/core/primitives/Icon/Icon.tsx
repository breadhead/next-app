import * as React from 'react';
import cx from 'classnames';

import s from './sprite.module.css';
import { IconType } from './IconType';

interface IconProps {
  icon: IconType;
  className?: string;
}

export const Icon = ({ icon, className }: IconProps) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={cx(s[`svg-${icon}-dims`], className)}
    >
      <use xlinkHref={`#${icon}`} />
    </svg>
  );
};
