import { AxiosInstance } from 'axios';
import qs from 'qs';

const log = require('webpack-log');

const infoLogger = log({ name: 'api client' });
const errorLogger = log({ name: 'api client', level: 'error' });

export const logInfoMessage = (message: string) => {
  infoLogger.info(message);
};
export const logErrorMessage = (message: string) => {
  errorLogger.error(message);
};

export const useLogger = (axios: AxiosInstance) => {
  axios.interceptors.request.use(
    (config: any) => {
      config.metadata = { startTime: new Date() };
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
  axios.interceptors.response.use(
    (response: any) => {
      response.config.metadata.endTime = new Date();
      response.duration =
        response.config.metadata.endTime - response.config.metadata.startTime;

      const message = displayMessage(response);
      logInfoMessage(message);
      return response;
    },
    error => {
      error.config.metadata.endTime = new Date();
      error.duration =
        error.config.metadata.endTime - error.config.metadata.startTime;
      const message = displayMessage(error);

      logErrorMessage(message);
      return Promise.reject(error);
    },
  );
};

export const displayMessage = (req: any) => {
  return `url: ${
    (req.config.url || '').split(req.config.baseURL)[1]
  }?${qs.stringify(req.config.params)} ==== duration: ${req.duration}ms`;
};
