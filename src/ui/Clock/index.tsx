import cx from 'classnames'
import React from 'react'
import styles from './clock.css'
interface Props {
  lastUpdate: number
  light: boolean
}

export const Clock = ({ lastUpdate, light }: Props) => {
  return (
    <div className={cx([styles.clock, light && styles.light])}>
      {format(new Date(lastUpdate))}
    </div>
  )
}

const format = (t: Date) =>
  `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

const pad = (n: number) => (n < 10 ? `0${n}` : n)
