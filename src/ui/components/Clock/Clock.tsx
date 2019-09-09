import cx from 'classnames';
import React from 'react';

import styles from './clock.css';
import { format } from './helpers/format';
interface Props {
  lastUpdate: number;
}

export const Clock = ({ lastUpdate }: Props) => (
  <div className={cx(styles.clock)}>{format(new Date(lastUpdate))}</div>
);
