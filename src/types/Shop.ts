import { Instance, types } from 'mobx-state-tree';

import { ProductModel } from '@app/types/Product';

import { ProductSortBy, ProductSortOrder } from './/ProductSort';
import { LocalePostModel } from './sanity/LocalePostModel';
import { LocaleStringModel } from './sanity/LocaleStringModel';
import { PhotoModel } from './sanity/PhotoModel';
import { SanityDefaultModel } from './sanity/SanityDefaultModel';

export enum ShopTypes {
  SHOP = 'shop',
  CAFE = 'cafe',
}

export const ShopProductsModel = types.model({
  totalCount: types.number,
  pages: types.map(types.array(ProductModel)),
  isLoading: types.boolean,
});

export const ShopQueryModel = types.model({
  sortBy: types.maybeNull(types.enumeration(Object.values(ProductSortBy))),
  sortOrder: types.maybeNull(
    types.enumeration(Object.values(ProductSortOrder)),
  ),
  category: types.maybeNull(types.string),
  code: types.maybeNull(types.string),
  type: types.maybeNull(types.string),
});

export const ShopModel = SanityDefaultModel.props({
  status: types.boolean,
  delivery: types.maybe(types.boolean),
  name: LocaleStringModel,
  subtitle: types.maybe(LocaleStringModel),
  food_images: types.maybe(types.array(PhotoModel)),
  code: types.model({ current: types.string }),
  description: types.maybe(LocalePostModel),
  logo: types.maybe(PhotoModel),
  address: types.maybe(types.string),
});

export interface Shop extends Instance<typeof ShopModel> {}
export interface ShopProducts extends Instance<typeof ShopProductsModel> {}
