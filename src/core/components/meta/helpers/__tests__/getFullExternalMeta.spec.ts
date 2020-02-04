import { getFullExternalMeta } from '../getFullExternalMeta';

describe('getFullExternalMeta works with complex objects', () => {
  it('works for mixed object', () => {
    const content = {
      title: 'Пирожное "Красный бархат"',
      description: 'Красный бархат-пирожное красный бархат',
      logo:
        'https://back.danilovsky.breadhead.ru/files/e1123be4-dce3-4be2-bb0f-12c0027c592abfe4753425ebccb484810800d4ea95a1.jpg',
    };

    const externalData = {
      rule: '/products/deserti1/pirozhnoe1/pirozhnoe_krasnii_barkhat',
      meta: {
        keywords: 'десерты, #TITLE#',
        title: '#TITLE# | онлайн-заказ продуктов домой',
        description: '#DESCRIPTION# | Работаем с 08:00 до 21:00',
        socialTitle: null,
        socialDescription: null,
        logo: null,
      },
    };

    expect(getFullExternalMeta(externalData.meta, content)).toMatchObject({
      keywords: 'десерты, #TITLE#',
      title: '#TITLE# | онлайн-заказ продуктов домой',
      description: '#DESCRIPTION# | Работаем с 08:00 до 21:00',
      logo:
        'https://back.danilovsky.breadhead.ru/files/e1123be4-dce3-4be2-bb0f-12c0027c592abfe4753425ebccb484810800d4ea95a1.jpg',
    });
  });
});
