/* eslint-disable  no-return-assign */
import { ReactNode } from 'react';
import styled from 'styled-components';
import * as ss from 'styled-system';

import theme from '@app/core/styles/theme';
import { buttonColor } from '@app/core/styles/theme/helpers/variants';

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  height: 40px;
  transition: all 0.2s ease;
  line-height: 16px;
  font-size: 13px;
  border: none;

  ${buttonColor};
  ${ss.width};
  ${ss.height};
  ${ss.space};
  ${ss.fontSize};
  ${ss.display};
  ${ss.flex};
  ${ss.alignItems};
  ${ss.justifyContent};
  ${ss.borderRadius};
  ${ss.lineHeight};
  ${ss.color};
  ${ss.borderRadius};

  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  ${props =>
    props.notClickable &&
    `
  &:hover { 
    cursor: default;
    background-color: ${theme.buttonColors[props.colors!].backgroundColor};
  }`};
`;

export interface ButtonWrapperProps
  extends ss.SpaceProps,
    ss.WidthProps,
    ss.HeightProps,
    ss.DisplayProps,
    ss.AlignItemsProps,
    ss.JustifyContentProps,
    ss.BorderRadiusProps,
    ss.FlexProps,
    ss.ColorProps,
    ss.BorderRadiusProps,
    ss.FontSizeProps {
  buttonColor?: string;
  disabled?: boolean;
  textOnly?: boolean;
  colors?:
    | 'primary'
    | 'secondary'
    | 'white'
    | 'gray'
    | 'transparent'
    | 'description'
    | 'stepCounterLight'
    | 'stepCounterDark';
  type?: string;
  children?: ReactNode;
  onClick?: (value: any) => any;
  onSubmit?: (value: any) => any;
  notClickable?: boolean;
  lineHeight?: number;
  color?: string;
}

ButtonWrapper.defaultProps = {
  disabled: false,
  textOnly: false,
  colors: 'primary',
};
