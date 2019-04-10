import { ReactNode } from 'react'
import { ButtonKind } from './ButtonKind'
import { ButtonSize } from './ButtonSize'

export interface ButtonProps {
  children: ReactNode
  size?: ButtonSize
  kind?: ButtonKind
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void | undefined | any
  disabled?: boolean
  submit?: boolean
  className?: string
}
