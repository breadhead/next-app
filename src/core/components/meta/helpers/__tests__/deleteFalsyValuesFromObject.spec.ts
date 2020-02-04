import { deleteFalsyValuesFromObject } from '../deleteFalsyValuesFromObject';

describe('deleteFalsyValuesFromObject works ', () => {
  it('works for mixed object', () => {
    const obj = {
      first: 'meme',
      second: null,
    };

    expect(deleteFalsyValuesFromObject(obj)).toMatchObject({
      first: 'meme',
    });
  });

  it('works for mixed object 2', () => {
    const obj = {
      keywords: 'десерты, #TITLE#',
      title: '#TITLE# | онлайн-заказ продуктов домой',
      description: '#DESCRIPTION# | Работаем с 08:00 до 21:00',
      socialTitle: null,
      socialDescription: null,
      logo: null,
    };

    expect(deleteFalsyValuesFromObject(obj)).toMatchObject({
      keywords: 'десерты, #TITLE#',
      title: '#TITLE# | онлайн-заказ продуктов домой',
      description: '#DESCRIPTION# | Работаем с 08:00 до 21:00',
    });
  });

  it('works for empty object', () => {
    const obj = {
      first: null,
    };

    expect(deleteFalsyValuesFromObject(obj)).toMatchObject({});
  });
});
