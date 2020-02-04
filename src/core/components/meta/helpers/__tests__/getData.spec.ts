import { getData } from '../getData';
import { getFullExternalMeta } from '../getFullExternalMeta';

describe('getData works ', () => {
  it('works with title', () => {
    const content = {
      title: 'Арбуз',
    };

    const externalData = {
      rule: '/order/(.*)',
      meta: {
        title: 'Закажите на Даниловском #TITLE#',
      },
    };

    const params = { content, meta: externalData.meta };

    expect(getData(params)).toMatchObject({
      title: 'Закажите на Даниловском Арбуз',
    });
  });

  it('works with description', () => {
    const content = {
      title: 'Арбуз',
      description: 'Самый вкусный арбуз',
    };

    const externalData = {
      rule: '/order/(.*)',
      meta: {
        title: 'Закажите на Даниловском #TITLE#',
        description: 'Товары Даниловского | #DESCRIPTION#',
      },
    };

    const params = { content, meta: externalData.meta };

    expect(getData(params)).toMatchObject({
      title: 'Закажите на Даниловском Арбуз',
      description: 'Товары Даниловского | Самый вкусный арбуз',
    });
  });

  it('works with title && description', () => {
    const content = {
      title: 'Арбуз',
      description: 'Самый вкусный арбуз',
    };

    const externalData = {
      rule: '/order/(.*)',
      meta: {
        title: 'Закажите на Даниловском #TITLE#',
        description: 'Товары Даниловского | #DESCRIPTION#',
      },
    };

    const params = { content, meta: externalData.meta };

    expect(getData(params)).toMatchObject({
      title: 'Закажите на Даниловском Арбуз',
      description: 'Товары Даниловского | Самый вкусный арбуз',
    });
  });

  it('works with code', () => {
    const content = {
      code: 448,
    };

    const externalData = {
      rule: '/order/(.*)',
      meta: {
        title: 'Ваш заказ №#CODE#',
      },
    };

    const params = { content, meta: externalData.meta };

    expect(getData(params)).toMatchObject({
      title: 'Ваш заказ №448',
    });
  });

  it('works with intersection', () => {
    const content = {
      title: 'Арбуз',
      description: 'Самый вкусный арбуз',
    };

    const externalData = {
      rule: '/order/(.*)',
      meta: {
        title: 'Закажите на Даниловском #TITLE#',
        description: '#TITLE# | #DESCRIPTION#',
      },
    };

    const params = { content, meta: externalData.meta };

    expect(getData(params)).toMatchObject({
      title: 'Закажите на Даниловском Арбуз',
      description: 'Арбуз | Самый вкусный арбуз',
    });
  });

  it('works with double intersection', () => {
    const content = {
      title: 'Арбуз',
      description: 'Самый вкусный арбуз',
    };

    const externalData = {
      rule: '/order/(.*)',
      meta: {
        title: 'Закажите на Даниловском #TITLE#',
        description: '#TITLE# | #DESCRIPTION# | #TITLE#',
      },
    };

    const params = { content, meta: externalData.meta };

    expect(getData(params)).toMatchObject({
      title: 'Закажите на Даниловском Арбуз',
      description: 'Арбуз | Самый вкусный арбуз | Арбуз',
    });
  });

  it('works with keywords', () => {
    const content = {
      title: 'Арбуз',
      description: 'Самый вкусный арбуз',
    };

    const externalData = {
      rule: '/order/(.*)',
      meta: {
        title: 'Закажите на Даниловском #TITLE#',
        description: '#TITLE# | #DESCRIPTION# | #TITLE#',
        keywords: 'Даниловский, доставка, арбуз',
      },
    };

    const params = { content, meta: externalData.meta };

    expect(getData(params)).toMatchObject({
      title: 'Закажите на Даниловском Арбуз',
      description: 'Арбуз | Самый вкусный арбуз | Арбуз',
      keywords: 'Даниловский, доставка, арбуз',
    });
  });

  it('works without #', () => {
    const content = {
      title: 'Арбуз',
    };

    const externalData = {
      rule: '/order/(.*)',
      meta: {
        title: 'Закажите на Даниловском',
        keywords: 'Даниловский, доставка, арбуз',
        description: 'Самый вкусный арбуз',
      },
    };

    const params = { content, meta: externalData.meta };

    expect(getData(params)).toMatchObject({
      title: 'Закажите на Даниловском',
      description: 'Самый вкусный арбуз',
      keywords: 'Даниловский, доставка, арбуз',
    });
  });

  it('works with double intersection && multiple values', () => {
    const content = {
      title: 'Арбуз',
      description: 'Самый вкусный арбуз',
      code: 4456,
    };

    const externalData = {
      rule: '/order/(.*)',
      meta: {
        title: 'Закажите на Даниловском #TITLE#',
        description: '#CODE# | #TITLE# | #DESCRIPTION# | #TITLE#',
      },
    };

    const params = { content, meta: externalData.meta };

    expect(getData(params)).toMatchObject({
      title: 'Закажите на Даниловском Арбуз',
      description: '4456 | Арбуз | Самый вкусный арбуз | Арбуз',
    });
  });

  it('works with english words in externalContent', () => {
    const content = {
      title: 'Арбуз',
      description: 'Самый вкусный арбуз',
      code: 4456,
    };

    const externalData = {
      rule: '/order/(.*)',
      meta: {
        title: 'Закажите mememe на Даниловском #TITLE#',
        description: '#CODE# | #TITLE# | #DESCRIPTION# | #TITLE#',
      },
    };

    const params = { content, meta: externalData.meta };

    expect(getData(params)).toMatchObject({
      title: 'Закажите mememe на Даниловском Арбуз',
      description: '4456 | Арбуз | Самый вкусный арбуз | Арбуз',
    });
  });

  it('works with spaces', () => {
    const content = {
      title: 'Арбуз',
      description: 'Самый вкусный арбуз',
    };

    const externalData = {
      rule: '/meals/(.*)/(.*)/(.*)',
      meta: {
        title: '#TITLE# | онлайн-заказ готовой еды домой',
        keywords: 'готовая еда, удобная доставка, #TITLE# ',
        description: '#DESCRIPTION# ',
      },
    };

    const params = { content, meta: externalData.meta };

    expect(getData(params)).toMatchObject({
      title: 'Арбуз | онлайн-заказ готовой еды домой',
      keywords: 'готовая еда, удобная доставка, Арбуз',
      description: 'Самый вкусный арбуз',
    });
  });

  it('works with empty content', () => {
    const content = {};

    const externalData = {
      rule: '/$',
      meta: {
        title: 'Добро пожаловать | Даниловский рынок',
        keywords: 'Даниловский рынок',
        description: 'Свежие продукты и готовая еда',
      },
    };

    const params = { content, meta: externalData.meta };

    expect(getData(params)).toMatchObject({
      title: 'Добро пожаловать | Даниловский рынок',
      keywords: 'Даниловский рынок',
      description: 'Свежие продукты и готовая еда',
    });
  });

  it('works with empty content', () => {
    const content = {};

    const externalData = {
      rule: '/order/(.*)',
      meta: {
        title: 'Закажите на Даниловском #TITLE#',
      },
    };

    const params = { content, meta: externalData.meta };

    expect(getData(params)).toMatchObject({
      title: 'Закажите на Даниловском',
    });
  });

  it('works without content', () => {
    const content = null;

    const externalData = {
      rule: '/order/(.*)',
      meta: {
        title: 'Закажите на Даниловском #TITLE#',
      },
    };

    const params = { content, meta: externalData.meta };

    expect(getData(params)).toMatchObject({
      title: 'Закажите на Даниловском',
    });
  });

  it('works with empty meta', () => {
    const content = {
      title: 'Арбуз',
    };

    const externalData = {
      rule: '/order/(.*)',
      meta: {},
    };

    const params = { content, meta: externalData.meta };

    expect(getData(params)).toMatchObject({
      title: 'Арбуз',
    });
  });

  it('works without meta', () => {
    const content = {
      title: 'Арбуз',
    };

    const externalData = {
      rule: '/order/(.*)',
      meta: null,
    };

    const params = { content, meta: externalData.meta };

    expect(getData(params)).toMatchObject({
      title: 'Арбуз',
    });
  });

  it('works without meta and content', () => {
    const content = null;

    const externalData = {
      rule: '/order/(.*)',
      meta: null,
    };

    const params = { content, meta: externalData.meta };

    expect(getData(params)).toBe(null);
  });

  it('works without meta and with empty content', () => {
    const content = {};

    const externalData = {
      rule: '/order/(.*)',
      meta: null,
    };

    const params = { content, meta: externalData.meta };

    expect(getData(params)).toBe(null);
  });

  it('works with image', () => {
    const externalData = {
      rule: '/products/(.*)/(.*)/(.*)',
      meta: {
        description: '#DESCRIPTION# ',
        socialTitle: null,
        socialDescription: null,
        logo: null,
      },
    };

    const content = {
      description: 'Цис цесарка',
      socialTitle: null,
      socialDescription: null,
      logo:
        'https://back.danilovsky.breadhead.ru/files/c53cad3c-f374-40b6-9b94-b1ec86014a0f6a02de8fc145619965c8f81c7f54f539.jpg',
    };

    const params = {
      content,
      meta: getFullExternalMeta(externalData.meta, content),
    };

    expect(getData(params)).toMatchObject({
      description: 'Цис цесарка',
      logo:
        'https://back.danilovsky.breadhead.ru/files/c53cad3c-f374-40b6-9b94-b1ec86014a0f6a02de8fc145619965c8f81c7f54f539.jpg',
    });
  });
});
