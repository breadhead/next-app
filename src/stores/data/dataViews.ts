import arrayToTree from 'array-to-tree';
import { getSnapshot } from 'mobx-state-tree';

import { ProductType } from '@app/types/ProductType';
import { ROUTER } from '@app/core/router';
import { SelfCategoriesStore } from '@app/stores/categories/index';
import { Category, CategoryTree } from '@app/types/Category';

type MainCategory = 'products' | 'meals';

const getSubcategories = (self: SelfCategoriesStore) => (
  parentCode: string,
) => {
  const categories = getSnapshot(self._entities) as Category[];
  return categories.filter(cat => cat.parentCategoryCode === parentCode);
};

const getByCodes = (self: SelfCategoriesStore) => (
  catCodes: string[],
): Category[] => {
  const categories = getSnapshot(self._entities) as Category[];

  if (!catCodes.length) {
    return [];
  }

  return categories.filter(cat => catCodes.includes(cat.code));
};

const getByCode = (self: SelfCategoriesStore) => (code: string) => {
  return self._list.find(cat => cat.code === code);
};

const getDescriptor = (self: SelfCategoriesStore) => (codes: string[]) => {
  return self._list
    .filter(cat => codes.includes(cat.code))
    .map(cat => cat.name);
};

const getPathByProduct = (self: SelfCategoriesStore) => (
  code: string,
  productCode: string,
  productType: ProductType,
) => {
  const path: string[] = [];
  let currentCat = self.getByCode(code);

  while (
    currentCat &&
    currentCat.depthLevel !== 1 &&
    currentCat.parentCategoryCode
  ) {
    if (currentCat) path.unshift(currentCat.code);
    currentCat = self.getByCode(currentCat.parentCategoryCode);
  }

  return ROUTER.catalog(productType, `${path.join('/')}/${productCode}`);
};

const getFullPath = (self: SelfCategoriesStore) => (categoryCode: string) => {
  const path: string[] = [];
  let currentCat = self.getByCode(categoryCode);

  /*** collect all category while exist parentCode, ***
   *** category depthLevel = 1 dont`t have parent category *
   * **/
  while (currentCat) {
    currentCat && path.unshift(currentCat.code);
    currentCat = currentCat.parentCategoryCode
      ? self.getByCode(currentCat.parentCategoryCode)
      : undefined;
  }

  const [type, section, category] = path;

  const productType =
    type === 'products' ? ProductType.PRODUCT : ProductType.MEAL;

  if (path.length === 2) {
    return ROUTER.catalog(productType, section);
  }

  return ROUTER.catalogSectionCategory(productType, section, category);
};

const getTreeByProductType = (self: SelfCategoriesStore) => (
  type: MainCategory,
) => {
  return self.treeView.find(item => item.code === type);
};

export const ViewsCategories = self => ({
  get treeView() {
    return arrayToTree<CategoryTree>(self._entities, {
      customID: 'code',
      parentProperty: 'parentCategoryCode',
    });
  },
  getSubcategories: getSubcategories(self),
  getByCodes: getByCodes(self),
  getByCode: getByCode(self),
  getDescriptor: getDescriptor(self),
  getPathByProduct: getPathByProduct(self),
  getTreeByProductType: getTreeByProductType(self),
  getFullPath: getFullPath(self),
  get _list(): Category[] {
    return getSnapshot(self._entities);
  },
});
