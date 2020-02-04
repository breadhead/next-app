import Cookies from 'js-cookie';

export const setTokenToCookie = (token: string) =>
  Cookies.set('token', token, { expires: 30 });
export const removeTokenToCookie = () => Cookies.remove('token');
