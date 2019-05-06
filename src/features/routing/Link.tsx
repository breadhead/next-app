import * as React from 'react'
import { ReactChild, ReactFragment } from 'react'

import NextRoutes from '../../../routes'

interface Props {
  route?: string
  children: ReactChild | ReactFragment
}

export const Link = ({ children, ...props }: Props) => (
  <NextRoutes.Link {...props}>
    <a>{children}</a>
  </NextRoutes.Link>
)
