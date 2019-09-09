import { canUseDOM } from '@app/lib/CanUseDom'
import axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { backUrl, backUrlServer } = publicRuntimeConfig

export const initializeApiClient = (token?: string) => {
  const authHeaders = !!token ? { Authorization: `Bearer ${token}` } : {}
  const realBackUrl = canUseDOM() ? backUrl : backUrlServer

  return axios.create({
    baseURL: realBackUrl,
    headers: authHeaders,
  })
}
