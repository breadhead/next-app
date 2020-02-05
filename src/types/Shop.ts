import { types, Instance } from 'mobx-state-tree';
import { LinkProps } from 'next/link';

import { ShortCategoryModel } from '@app/types/Category';
import { ProductModel } from '@app/types/Product';
import { GetImageType } from '@app/core/helpers/get-image';

import { ProductSortBy, ProductSortOrder } from './/ProductSort';
import { ImageModel } from './Primitives';

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

export const ShopModel = types.model({
  name: types.string,
  description: types.frozen(),
  code: types.string,
  type: types.enumeration(Object.values(ShopTypes)),
  address: types.maybeNull(types.string),
  businessHours: types.maybeNull(types.string),
  businessDays: types.maybeNull(types.string),
  logo: ImageModel,
  images: types.array(ImageModel),
  totalItems: types.number,
  categories: types.array(ShortCategoryModel),
});

export const ShopDetailModel = types.model({
  entity: types.maybeNull(ShopModel),
  products: ShopProductsModel,
  query: ShopQueryModel,
});

export interface CardShop {
  id: string | number;
  name: string;
  logo: GetImageType;
  image: GetImageType;
  link: LinkProps;
}
export interface Shop extends Instance<typeof ShopModel> {}
export interface ShopDetail extends Instance<typeof ShopDetailModel> {}
export interface ShopProducts extends Instance<typeof ShopProductsModel> {}
