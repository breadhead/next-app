import { pad } from '../pad'

describe('pad', () => {
  test('should return  padted num', () => {
    expect(pad(3)).toEqual('03')
  })
  test('should return  padted num', () => {
    expect(pad(33)).toEqual('33')
  })
  test('should return  padted num', () => {
    expect(pad(0)).toEqual('00')
  })
  test('should return  padted num', () => {
    expect(pad(333)).toEqual('333')
  })
})
