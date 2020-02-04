import { LinkProps } from 'next/link';
import qs from 'querystring';

// for clearing falsy query params out
// "/shops/[code]" find "code"
const matchParamsRE = /(?:\[).+?(?:\])/gi;
const matchParamsReplaceRE = /\[(.*?)\]/;

// for clearing falsy query params out
function clean(obj) {
  obj = Object.assign({}, obj);
  Object.keys(obj).forEach(key => {
    if (!obj[key]) {
      delete obj[key];
    }
  });
  return obj;
}

// formats a route pattern into
function format({ pathname, query }) {
  query = Object.assign({}, query);

  const params =
    pathname.match(matchParamsRE) &&
    pathname.match(matchParamsRE).map(item => item.replace(/\[|\]/gi, ''));

  if (params && params.length) {
    params.forEach(param => {
      if (query[param]) {
        pathname = pathname.replace(matchParamsReplaceRE, query[param]);
        delete query[param];
      }
    });
  }

  const q = qs.stringify(query);
  return pathname + (q ? `?${q}` : '');
}

export const postLink = (
  { pathname, query }: { pathname?: string; query?: any },
  nextQuery,
  nextPathname?,
): LinkProps => {
  const q = clean(Object.assign({}, query, nextQuery));
  const href = { pathname: nextPathname || pathname, query: q };
  const as = format(href);
  return { href, as };
};
