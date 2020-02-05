import { types, Instance } from 'mobx-state-tree';

import { TagModel } from '@app/types/Product';

import { ImageModel } from './Primitives';

export const SubcategoryModel = types.model({
  id: types.string,
  title: types.string,
  src: types.string,
});

export const ShortCategoryModel = types.model({
  name: types.string,
  code: types.string,
});

export const CategoryModel = types.model({
  code: types.string,
  name: types.string,
  depthLevel: types.number,
  description: types.maybeNull(types.frozen()),
  parentCategoryCode: types.maybeNull(types.string),
  images: types.array(ImageModel),
  tags: types.array(TagModel),
  logo: types.maybeNull(ImageModel),
});
export interface Category extends Instance<typeof CategoryModel> {}

export interface CategoryTree extends Category {
  children: CategoryTree[];
}

export type ISubcategoryModel = Instance<typeof SubcategoryModel>;

export interface SubcategoryCatalogItem
  extends Instance<typeof SubcategoryModel> {
  price: number;
  packing: string;
  purchases: number;
  name?: string;
}
