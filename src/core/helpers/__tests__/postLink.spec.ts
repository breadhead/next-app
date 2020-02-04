import { postLink } from '@app/core/helpers/postLink';

const router = {
  pathname: '/shop/[code]/store/[id]',
  query: {
    code: 1,
    id: 777,
  },
};

describe('postLink', () => {
  it('Should return "/shop/1/store/777"', () => {
    const newLink = postLink(router, {});
    expect(newLink.as).toBe('/shop/1/store/777');
  });

  it('Should return "/shop/1/store/777?category=1"', () => {
    const newLink = postLink(router, { category: 1 });
    expect(newLink.as).toBe('/shop/1/store/777?category=1');
  });

  it('Should return "/shop/1/store/666?category=1"', () => {
    const newLink = postLink(router, { category: 1, id: 666 });
    expect(newLink.as).toBe('/shop/1/store/666?category=1');
  });

  it('Should return "/shop/1/store/666"', () => {
    const newLink = postLink(router, { id: 666 });
    expect(newLink.as).toBe('/shop/1/store/666');
  });

  it('Should return "/cafe/1/store/666"', () => {
    const newPathName = '/cafe/[code]/filial/[cafeCode]';
    const newLink = postLink(router, { cafeCode: 666, id: null }, newPathName);
    expect(newLink.as).toBe('/cafe/1/filial/666');
  });
});
