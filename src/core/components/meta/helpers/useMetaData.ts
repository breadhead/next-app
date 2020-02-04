import { getRule } from './getRule';
import { getData } from './getData';
import { MetaProps } from '../Meta';
import { getFullExternalMeta } from './getFullExternalMeta';

export const useMetaData = ({ url, items, content }: MetaProps) => {
  // content is data from component
  if (!url) return null;

  if (!items) return content;

  const rules = items.map(it => it.rule);

  // get fit regex for this page
  const rule = getRule({ url, rules });

  // get info from admin panel for this page
  const externalData = items.find(it => it.rule === rule);

  if (!externalData) return null;

  const { meta } = externalData;

  if (!meta) return null;

  if (!!meta && !content) return meta;

  // get data from admin panel with substituted #variables#
  const data = getData({
    content: content as any,
    meta: getFullExternalMeta(meta, content),
  });

  return data;
};
