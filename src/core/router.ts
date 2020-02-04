export const PAGE_LIMIT = 20;

type Params = string | string[];

export const ROUTER = {
  order: (code: Params | number = '') => ({
    href: '/order/final/[code]',
    as: `/order/final/${code}`,
  }),

  shippingPayment: '/shipping_and_payment',
  contacts: '/contacts',
  cafe: '/cafe',
  shops: '/shops',
};
