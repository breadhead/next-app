import { get } from 'lodash-es';

import { Image } from '@app/types/Primitives';

export interface GetImageType {
  src?: string;
  alt?: string;
}

export const getImage = (
  image: Image | Image[],
  pos?: number,
): GetImageType => {
  if (typeof image === 'string') {
    return { src: image };
  }

  if (Array.isArray(image)) {
    return {
      src: get(image, `[${pos || 0}].path`),
      alt: get(image, `[${pos || 0}].nameOptions.title`),
    };
  }

  return {
    src: get(image, `path`),
    alt: get(image, `nameOptions.title`),
  };
};
