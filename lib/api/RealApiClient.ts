import ApiClient from './ApiClient';

export default class RealApiClient implements ApiClient {
  public quotas() {
    return Promise.resolve([]);
  }
}
