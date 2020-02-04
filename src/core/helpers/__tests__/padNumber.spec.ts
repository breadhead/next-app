import { padNumber } from '../padNumber';

test('should correctly pad numbers', () => {
  expect(padNumber(5, 2)).toBe('05');
  expect(padNumber(10, 2)).toBe('10');
  expect(padNumber(0, 2)).toBe('00');
});
