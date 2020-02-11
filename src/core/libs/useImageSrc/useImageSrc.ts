import { parse } from 'url';
import { useMemo } from 'react';

import { imageUrlBuilder } from './builder';

export const _useImageSrc = (image: any, maxWidth?: number) => {
  const src = useMemo(() => {
    return imageUrlBuilder
      .image(image)
      .width(maxWidth || 1500)
      .url();
  }, [image, maxWidth]);

  return src;
};

export const getProxyPath = (src: string | '') => {
  const parsedURL = parse(src);
  const newSrc =
    typeof parsedURL !== 'object' || parsedURL === null
      ? src
      : '/content/' + parsedURL.query + parsedURL.pathname;
  return newSrc;
};

export const useImageSrc = (image?: any, maxWidth?: number) => {
  if (!image) return null;

  const src = _useImageSrc(image, maxWidth || 1500) || '';
  if (src) {
    return getProxyPath(src);
  }
  return src;
};
