import Axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
  Method,
} from 'axios';
import getConfig from 'next/config';
import * as QueryString from 'qs';
import { forEach, merge } from 'lodash-es';

import { useLogger } from './logger';

type RequestCancelledType = 'request_cancelled';
type InterceptorError = (response: AxiosError) => any;
export const REQUEST_CANCELLED: RequestCancelledType = 'request_cancelled';

const { publicRuntimeConfig } = getConfig();
const { backUrl, authCode } = publicRuntimeConfig;

export const DEFAULT_HEADERS = {
  accept: 'application/json',
  'Content-Type': 'application/json',
  authcode: authCode,
};

export interface OptionsInterface {
  urlParams?: { [name: string]: string };
  queryParams?: { [name: string]: any };
  contentType?: string;
  cancelName?: string;
  headers?: { [name: string]: string | boolean };
  withCredentials?: boolean;
}

class ApiService {
  readonly headers: { [name: string]: string };
  private instance: AxiosInstance;
  private cancellations: { [name: string]: CancelTokenSource } = {};
  private interceptorsError: InterceptorError[] = [];

  constructor() {
    this.instance = Axios.create({
      withCredentials: true,
      timeout: 15000,
      paramsSerializer: this.paramsSerializer,
    });

    this.setBaseUrl(backUrl || '');
    useLogger(this.instance);

    this.headers = merge({}, DEFAULT_HEADERS);
  }

  public async request(
    method: Method,
    url: string,
    body: any = null,
    {
      contentType,
      cancelName,
      headers,
      withCredentials = true,
    }: OptionsInterface = {},
  ) {
    const requestData: AxiosRequestConfig = {
      url,
      method,
      headers: { ...this.headers, ...headers },
      withCredentials,
    };

    requestData[method === 'get' ? 'params' : 'data'] = body;

    if (cancelName) {
      const cancelForRequest = this.cancellations[cancelName];
      if (cancelForRequest) cancelForRequest.cancel(REQUEST_CANCELLED);
      this.cancellations[cancelName] = Axios.CancelToken.source();
      requestData.cancelToken = this.cancellations[cancelName].token;
    }

    if (contentType) {
      requestData.headers['content-type'] = contentType;
    }

    return this.instance
      .request(requestData)
      .then(res => this.handleResponse(res, { cancelName }))
      .catch(this.handleError.bind(this));
  }

  public addInterceptorError(interceptor: InterceptorError) {
    this.interceptorsError.push(interceptor);
  }

  public setBaseUrl(newUrl: string) {
    this.instance.defaults.baseURL = newUrl;
  }

  public cancelRequest(cancelName: string) {
    if (cancelName && this.cancellations[cancelName]) {
      const cancelForRequest = this.cancellations[cancelName];
      if (cancelForRequest) cancelForRequest.cancel(REQUEST_CANCELLED);
      delete this.cancellations[cancelName];
    }
  }

  public setHeader(name, value) {
    this.headers[name] = value;
  }

  public deleteHeader(name) {
    delete this.headers[name];
  }

  private handleResponse(
    response: AxiosResponse,
    { cancelName }: OptionsInterface = {},
  ) {
    const { data } = response;

    if (cancelName && this.cancellations[cancelName]) {
      delete this.cancellations[cancelName];
    }

    return data;
  }

  private handleError(axiosError: AxiosError) {
    const { response: data } = axiosError;
    forEach(this.interceptorsError, transform => transform(axiosError));

    throw data || { statusText: 'Ошибка сервера' };
  }

  private paramsSerializer(params: any): string {
    return QueryString.stringify(params, {
      encode: true,
      arrayFormat: 'comma',
    });
  }
}

export default ApiService;
