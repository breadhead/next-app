import axios, { AxiosInstance } from 'axios';
import getConfig from 'next/config';
import { Option } from 'tsoption';

import { canUseDOM } from '@app/helpers/CanUseDom';

const { publicRuntimeConfig } = getConfig();
const { backUrl, backUrlServer } = publicRuntimeConfig;

export class Api {
  public get client() {
    return this.axios;
  }

  private readonly axios: AxiosInstance;

  public constructor(token: Option<string>) {
    const authHeaders = token.nonEmpty()
      ? { Authorization: `Bearer ${token.get()}` }
      : {};

    const realBackUrl = canUseDOM() ? backUrl : backUrlServer;

    this.axios = axios.create({
      baseURL: realBackUrl,
      headers: authHeaders,
    });
  }
}
