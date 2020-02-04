export const getDescriptionText = (description: any) => {
  if (typeof description === 'string') return [];

  if (description.length <= 0) return [];

  return description
    .map(des => des.children.length > 0 && des.children.map(ch => ch.text))
    .join(' ');
};
