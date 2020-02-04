import { getDescriptionText } from '../getDescriptionText';

test('getDescriptionText should work with normal structure', () => {
  const description = [
    {
      _key: 'MMzVvqECKfKG',
      _type: 'block',
      style: 'normal',
      children: [
        {
          _key: 'W-tlqkInFaOaS',
          text: 'Нежное молоко альпийских коз.',
          _type: 'span',
          marks: [],
        },
      ],
      markDefs: [],
    },
  ];

  const res = getDescriptionText(description);

  expect(res).toBe('Нежное молоко альпийских коз.');
});

test('getDescriptionText should work with empty string', () => {
  const description = '';

  const res = getDescriptionText(description);

  expect(res.length).toBe(0);
});
