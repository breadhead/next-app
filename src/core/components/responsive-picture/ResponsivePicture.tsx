import styled from 'styled-components';
import base64 from 'base-64';
import React from 'react';

import { getFromConfig } from '@app/core/libs/getPublicRuntimeConfig';

interface ResponsivePicturePreciseProps extends ResponsivePictureProps {
  src?: string;
  className?: string;
  alt?: string;
  mobile?: ImageSizePrecise;
  desktop: ImageSizePrecise;
}

interface ImageSizePrecise {
  width: number;
  height: number;
}

type ImageSize = 'mobile' | 'desktop';

export const getImageUrl = (url: string, size: ImageSize) =>
  `${getFromConfig('storageUrl')}/pr:${size}/${base64.encode(url)}`;

export const getImageUrlPreciseSize = (url: string, size: ImageSizePrecise) =>
  `${getFromConfig('storageUrl')}/w:${size.width}/h:${
    size.height
  }/${base64.encode(url)}`;

// use this component when you need exact dimensions (like 64x64px)
export const ResponsivePictureWithDimensions = ({
  src = '',
  className,
  mobile,
  desktop,
  ...rest
}: ResponsivePicturePreciseProps) => {
  const mobileSize = mobile || desktop;
  return (
    <Picture className={className}>
      <source
        media="(min-width: 768px)"
        srcSet={getImageUrlPreciseSize(src, desktop)}
      />
      <Image
        src={getImageUrlPreciseSize(src, mobileSize)}
        {...rest}
        width={desktop.width}
        height={desktop.height}
      />
    </Picture>
  );
};

// use this component when mobile and desktop presets are enough
interface ResponsivePictureProps {
  src?: string;
  className?: string;
  alt?: string;
}

export const ResponsivePicture = ({
  src = '',
  className,
  ...rest
}: ResponsivePictureProps) => {
  return (
    <Picture className={className}>
      <source media="(min-width: 768px)" srcSet={src} />
      <Image src={src} {...rest} />
    </Picture>
  );
};

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Picture = styled.picture`
  overflow: hidden;
  display: block;
`;
