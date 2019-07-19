import * as React from 'react'
import { ReactChild, ReactFragment } from 'react'

interface Props {
  route?: string
  children: ReactChild | ReactFragment
}

export const Link = ({ children, ...props }: Props) => (
  <a {...props}>{children}</a>
)
