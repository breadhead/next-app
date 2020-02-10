import { EventType } from '@app/types/Events';

const mockEvent: EventType = {
  _createdAt: '2020-02-06T15:10:39Z',
  _id: 'da60dc11-c7c4-439c-9e23-3dddcaf9e8fa',
  _rev: 'rd3jNg3KW0ibcL2GQUfQFl',
  _type: 'eventLanding',
  _updatedAt: '2020-02-07T15:29:23Z',
  code: {
    _type: 'slug',
    current: 'leti-garazhseil',
  },
  date: {
    dateFrom: '2020-02-26',
    dateTo: '2020-02-29',
    timeFrom: '12:00',
    timeTo: '20:00',
  },
  description: {
    _type: 'localeBodyPortableText',
    en: undefined,
    ru: [
      {
        _key: 'b89d3a740081',
        _type: 'block',
        children: [
          {
            _key: 'b89d3a7400810',
            _type: 'span',
            marks: [],
            text:
              'Чеддер, Стилтон Дольче и Стилтон Пиканте, Грюйер, Маасдам, Раклет, козьи Бюши – все это великолепие «Соболев сыр» делают вручную по европейским стандартам качества. Варятся изысканные сорта сыров только из натурального фермерского молока без каких-либо «фокусов» с составом – производство высоко оценивают даже иностранные сыровары. В общем, ждем вас на дегустацию – без пары сырных головок уйти будет практически невозможно.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
  },
  image: [
    {
      _type: 'image',
      asset: {
        _ref: 'image-289ba2318e4df635f1439062628b38f9e2930bde-656x438-jpg',
        _type: 'reference',
      },
    },
  ],
  sortIndex: 500,
  status: true,
  subtitle: {
    _type: 'localeString',
    en: undefined,
    ru:
      'Приглашаем вас на самое доброе событие этого июня — благотворительный маркет в поддержку фонда @detibabochki_fund. ',
  },
  title: {
    _type: 'localeString',
    en: undefined,
    ru: 'Лети гаражсейл',
  },
};
