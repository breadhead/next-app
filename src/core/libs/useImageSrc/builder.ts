import sanityImageUrlBuilder from '@sanity/image-url';

import { sanityClient } from '@app/core/libs/sanity-client';

export const imageUrlBuilder = sanityImageUrlBuilder(sanityClient);
