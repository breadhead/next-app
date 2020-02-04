export const deleteFalsyValuesFromObject = obj =>
  Object.entries(obj).reduce((acc, [key, val]) => {
    if (!!val) {
      return { ...acc, [key]: val };
    }
    return acc;
  }, {});
