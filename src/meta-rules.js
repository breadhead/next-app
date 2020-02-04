export const metaItems = [
  {
    rule: '/products/(.*)/(.*)/(.*)',
    meta: {
      title: '#TITLE# | онлайн-заказ продуктов домой',
      keywords: 'продукты, удобная доставка, #TITLE# ',
      description: '#DESCRIPTION# ',
    },
  },
  {
    rule: '/meals/(.*)/(.*)/(.*)',
    meta: {
      title: '#TITLE# | онлайн-заказ готовой еды домой',
      keywords: 'готовая еда, удобная доставка, #TITLE# ',
      description: '#DESCRIPTION# ',
    },
  },
  {
    rule: '/products/deserti1/pirozhnoe1/pirozhnoe_krasnii_barkhat',
    meta: {
      title: '#TITLE# | онлайн-заказ продуктов домой',
      keywords: 'десерты, #TITLE# ',
      description: '#DESCRIPTION# ',
    },
  },
  {
    rule: '/meals/pravilnaya_yeda/(.*)',
    meta: {
      title: '#TITLE# | самая здоровая еда',
      keywords: 'здоровая еда,  #TITLE# ',
      description: '#DESCRIPTION# ',
    },
  },
  {
    rule: '/shops.*',
    meta: {
      title: 'Лавки и фермеры',
      keywords: 'фермеры, лавки, Даниловский рынок',
      description:
        'Лавки это гордость нашего рынка. Здесь пытливый посетитель найдёт товары на любой вкус',
    },
  },
  {
    rule: '/$',
    meta: {
      title: 'Добро пожаловать | Даниловский рынок',
      keywords: 'Даниловский рынок',
      description: 'Свежие продукты и готовая еда',
    },
  },
  {
    rule: '/search',
    meta: {
      title: 'Поиск',
      keywords: 'фермеры, лавки, Даниловский рынок',
      description: 'Найдите нужные продукты и готовые блюда',
    },
  },
  {
    rule: '/products/.*',
    meta: {
      title: 'Категории продуктов',
      keywords: 'продукты, категории, #TITLE#',
      description:
        'Ищите продукты по категориям, комбинируйте разные категории, это очень удобно',
    },
  },
  {
    rule: '/meals/.*',
    meta: {
      title: 'Категории готовой еды',
      keywords: 'продукты, категории, #TITLE#',
      description:
        'Ищите продукты по категориям, комбинируйте разные категории, это очень удобно',
    },
  },
  {
    rule: '/cafe/.*',
    meta: {
      title: 'Кафе Даниловского',
      keywords: 'кафе, Даниловский',
      description: 'Кафе Даниловского, отличное место для обеда или бранча',
    },
  },
  {
    rule: '/order/basket$',
    meta: {
      title: 'Ваша корзина',
      keywords: 'корзина, Даниловский',
      description: 'Оплатите покупки онлайн или наличными курьеру',
    },
  },
  {
    rule: '/order/history$',
    meta: {
      title: 'История заказов',
      keywords: 'заказы, Даниловский',
      description: 'Здесь хранится информация обо всех ваших заказах',
    },
  },
  {
    rule: '/order/(.*)',
    meta: {
      title: 'История заказов #CODE#',
      keywords: 'заказы, Даниловский',
      description: 'Здесь хранится информация о заказе № #CODE#',
    },
  },
  {
    rule: '/order/final$',
    meta: {
      title: 'Спасибо за заказ #CODE#',
      keywords: 'заказы, Даниловский',
      description: 'Спасибо за заказ № #CODE#',
    },
  },
];
