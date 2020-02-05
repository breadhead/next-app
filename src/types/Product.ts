import { Instance, types } from 'mobx-state-tree';

import { ProductUnitModel } from './ProductUnit';
import { ProductSortBy, ProductSortOrder } from './ProductSort';
import { ImageModel } from './Primitives';
import { ProductTypeModel } from './ProductType';

export const TagModel = types.model({
  code: types.string,
  name: types.string,
});

export const ProductDocumentModel = types.model({
  code: types.string,
  path: types.string,
  nameOptions: types.maybeNull(
    types.model({
      title: types.string,
      alt: types.string,
    }),
  ),
});

export const FoodServiceModel = types.model({
  code: types.string,
  name: types.string,
});

export const ProductModel = types.model({
  name: types.string,
  status: types.string,
  code: types.string,
  measureUnitCode: ProductUnitModel,
  type: ProductTypeModel,
  size: types.number,
  step: types.number,
  shopCode: types.maybeNull(types.string),
  description: types.frozen(),
  calories: types.maybeNull(types.number),
  ingredients: types.array(types.string),
  categories: types.array(types.string),
  weight: types.number,
  price: types.number,
  createdAt: types.string,
  updatedAt: types.string,
  images: types.array(ImageModel),
  tags: types.array(TagModel),
  document: types.maybeNull(ProductDocumentModel),
  foodServices: types.array(FoodServiceModel),
  sortIndex: types.number,
});

export const ProductsQueryModel = types.model({
  sortBy: types.maybeNull(types.enumeration(Object.values(ProductSortBy))),
  sortOrder: types.maybeNull(
    types.enumeration(Object.values(ProductSortOrder)),
  ),
  category: types.maybeNull(types.string),
  tag: types.array(types.string),
  type: types.maybeNull(ProductTypeModel),
});

export const ProductListModel = types.model({
  total: types.number,
  pages: types.map(types.array(ProductModel)),
  query: ProductsQueryModel,
  isLoading: types.boolean,
});

export interface Tag extends Instance<typeof TagModel> {}
export interface FoodService extends Instance<typeof FoodServiceModel> {}
export interface Product extends Instance<typeof ProductModel> {}
export interface ProductList extends Instance<typeof ProductListModel> {}
export interface ProductDocument
  extends Instance<typeof ProductDocumentModel> {}
