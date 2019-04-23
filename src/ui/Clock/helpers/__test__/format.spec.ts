import { format } from '../format'

describe('format', () => {
  test('should return  formatted date', () => {
    expect(
      format(
        new Date('Tue Apr 23 2019 11:21:28 GMT+0300 (Moscow Standard Time)'),
      ),
    ).toEqual('08:21:28')
  })
})
