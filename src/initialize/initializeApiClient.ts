import { Option } from 'tsoption';

import ApiService from '@app/service/api';

export const initializeApiClient = (token: Option<string>): ApiService => {
  const apiService = new ApiService();

  if (!!token.nonEmpty()) {
    apiService.setHeader('Authorization', `Bearer ${token.get()}`);
  }

  return apiService;
};
