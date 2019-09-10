import { canUseDOM } from '@app/lib/CanUseDom';
import axios from 'axios';
import getConfig from 'next/config';
import { Option } from 'tsoption';

const { publicRuntimeConfig } = getConfig();
const { backUrl, backUrlServer } = publicRuntimeConfig;

export const initializeApiClient = (token: Option<any>) => {
  const authHeaders = !!token.nonEmpty()
    ? { Authorization: `Bearer ${token.get().value}` }
    : {};
  const realBackUrl = canUseDOM() ? backUrl : backUrlServer;

  return axios.create({
    baseURL: realBackUrl,
    headers: authHeaders,
  });
};
