import ApiService from '@app/service/api';

export const initializeApiClient = (token: string): ApiService => {
  const apiService = new ApiService();

  if (!!token) {
    apiService.setHeader('Authorization', `Bearer ${token}`);
  }

  return apiService;
};
