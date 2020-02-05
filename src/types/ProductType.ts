import { types } from 'mobx-state-tree';

export enum ProductType {
  PRODUCT = 'product',
  MEAL = 'meal',
}

export const ProductTypeModel = types.enumeration(
  'productType',
  Object.values(ProductType) as ProductType[],
);
