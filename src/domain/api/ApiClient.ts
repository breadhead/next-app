export default interface ApiClient {
  quotas(): Promise<any[]>
}
