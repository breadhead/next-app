import * as React from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
import { get } from 'lodash-es';

import { canUseDOM } from '@app/core/helpers/canUseDom';
import { PageMetaItem } from '@app/types/PageMeta';

import { useMetaData } from './helpers/useMetaData';

const { publicRuntimeConfig } = getConfig();
const { siteUrl } = publicRuntimeConfig;

export interface ContentProps {
  [key: string]: string | number | null | undefined;
}

export interface MetaProps {
  url: string | undefined | false;
  items?: PageMetaItem[];
  content?: ContentProps;
}

export const Meta = ({ url, items, content }: MetaProps) => {
  const curUrl = url || (canUseDOM() && window.location.pathname);

  const meta = useMetaData({
    url: curUrl,
    items,
    content,
  });

  if (!meta) return null;

  const logo = get(meta, 'logo.src');
  return (
    <Head>
      <link
        rel="shortcut icon"
        href="/static/images/favicon.ico"
        type="image/x-icon"
      />
      {meta.title && <title key="title">{meta.title}</title>}
      {meta.title ||
        (meta.social_title && (
          <meta
            property="og:title"
            key="og:title"
            content={meta.social_title || meta.title}
          />
        ))}

      {meta.description && (
        <meta
          property="description"
          key="description"
          content={meta.description}
        />
      )}
      {meta.description ||
        (meta.social_description && (
          <meta
            name="og:description"
            key="og:description"
            content={meta.social_description || meta.description}
          />
        ))}

      {meta.keywords && (
        <meta name="keywords" key="keywords" content={meta.keywords} />
      )}

      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={meta.social_title || meta.title} />

      {!!url && <meta property="og:url" content={`${siteUrl}${url}`} />}
      {!!logo && (
        <meta property="og:image" key="og:image" content={`${logo}`} />
      )}
    </Head>
  );
};
