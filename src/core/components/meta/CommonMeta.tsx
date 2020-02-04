import React from 'react';
import Head from 'next/head';

export const CommonMeta = () => {
  return (
    <Head>
      <title key="title">Доставка | Даниловский рынок</title>
      <meta
        name="description"
        key="description"
        content="Легендарное и любимое место для покупок не только у жителей Даниловского района, но и у всех москвичей."
      />
      <meta
        name="keywords"
        key="keywords"
        content="доставка, Даниловский рынок, свежие продукты, готовая еда, Москва"
      />

      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      {/* <meta name="robots" content="index, follow" /> */}
      <meta name="referrer" content="origin" />
      <meta
        name="viewport"
        id="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"
      />
      <meta property="og:type" content="website" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Даниловский рынок" />
      <meta content="summary_large_image" name="twitter:card" />
      {/* TODO: add favicons */}
    </Head>
  );
};
