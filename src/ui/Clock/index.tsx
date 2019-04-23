import cx from 'classnames'
import React from 'react'
import styles from './clock.css'
import { format } from './helpers/format'
interface Props {
  lastUpdate: number
  light: boolean
}

export const Clock = ({ lastUpdate, light }: Props) => {
  return (
    <div className={cx(styles.clock, light && styles.light)}>
      {format(new Date(lastUpdate))}
    </div>
  )
}
