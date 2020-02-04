export const getPage = (page: string | string[] | undefined): number =>
  page && !Array.isArray(page) ? parseInt(page) || 0 : 0;

export const getTags = (tags: string | string[] | undefined): string[] => {
  if (!tags) return [];

  if (Array.isArray(tags)) return tags;

  return [tags];
};
