import styled, { keyframes } from 'styled-components';

import { Link } from '@app/core/primitives';

export const Title = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 12px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 24px;
  max-width: 432px;
  text-align: center;
`;

export const Button = styled(Link)`
  padding: 16px 36px;
  border: 1px solid #ddd7d5;
  box-sizing: border-box;
  border-radius: 8px;
  text-decoration: none;
  color: currentColor;
  font-weight: 500;
  cursor: pointer;
  z-index: 1;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 72px);
  background: #fff !important;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 72px auto 47px;
`;

export const PictureWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 5076px;
  justify-content: space-between;
`;

const slide = keyframes`
  0%{
    transform: translate3d(0, 0, 0);
  }
  100%{
    transform: translate3d(-1692px, 0, 0);
  }
`;

export const Picture = styled.div`
  position: absolute;
  top: 0;
  background: url('/static/images/error-picture-1.png') repeat-x;
  background-size: contain;
  height: 383px;
  width: 100%;
  animation: ${slide} 45s linear infinite;

  &.picture-two {
    top: auto;
    bottom: 0;
    left: -200px;
    animation: ${slide} 35s linear infinite;
    background: url('/static/images/error-picture-2.png') repeat-x;
    background-size: contain;
  }
`;
