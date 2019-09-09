import Cookies from 'js-cookie'

export const setCookie = (token: string) =>
  Cookies.set('token', token, { expires: 7 })
