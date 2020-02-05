import { types } from 'mobx-state-tree';

export enum ProductUnit {
  GRAM = 'gr',
  PIECE = 'pc',
  ML = 'ml',
}

export const ProductUnitModel = types.enumeration(
  'productUnit',
  Object.values(ProductUnit) as ProductUnit[],
);
