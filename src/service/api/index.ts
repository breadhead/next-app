import Axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
  AxiosError,
} from 'axios';
import getConfig from 'next/config';
import { merge, forEach } from 'ramda';

const { publicRuntimeConfig } = getConfig();
const { backUrl } = publicRuntimeConfig;

type RequestCancelledType = 'request_cancelled';
type ApiMethods = 'post' | 'get' | 'put' | 'path' | 'delete';
type InterceptorError = (response: AxiosError) => any;
export const REQUEST_CANCELLED: RequestCancelledType = 'request_cancelled';

export const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export interface OptionsInterface {
  urlParams?: { [name: string]: string };
  queryParams?: { [name: string]: any };
  contentType?: string;
  cancelName?: string;
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
    });

    this.setBaseUrl(backUrl);

    this.headers = merge({}, DEFAULT_HEADERS);
  }

  public async request(
    method: ApiMethods,
    url: string,
    body: any = null,
    { contentType, cancelName }: OptionsInterface = {},
  ) {
    const requestData: AxiosRequestConfig = {
      url,
      method,
      headers: { ...this.headers },
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
    forEach(transform => transform(axiosError), this.interceptorsError);

    throw data || { statusText: 'Ошибка сервера' };
  }
}

export default ApiService;
