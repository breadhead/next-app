import { deleteFalsyValuesFromObject } from './deleteFalsyValuesFromObject';
import { ContentProps } from '../Meta';

export const getFullExternalMeta = (
  meta: { [key: string]: string | number | null | undefined },
  content?: ContentProps,
) => {
  const cleanMeta = deleteFalsyValuesFromObject(meta);
  const cleanContent = deleteFalsyValuesFromObject(content);

  return Object.assign(cleanContent, cleanMeta);
};
