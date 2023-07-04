import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { authorization } from 'constants/authorization'
// import { authorization } from 'constants/authorization'
import { baseUrl } from 'constants/url'
import { decamelizeKey } from 'utils/decamelizeKey'

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: authorization,
  },
})

axiosInstance.interceptors.request.use((config: any) => {
  const newConfig = { ...config }

  if (newConfig.params) {
    newConfig.params = decamelizeKey(newConfig.params)
  }
  if (newConfig.data) {
    newConfig.data = decamelizeKey(newConfig.data)
  }

  return newConfig
})

export const axiosGET = <RequestData, ResponseData>(
  url: string,
  params?: RequestData,
  options?: AxiosRequestConfig
) => {
  return axiosInstance
    .get<ResponseData, AxiosResponse<ResponseData>, RequestData>(url, { params, ...options })
    .then((response) => response.data)
}

export const axiosPOST = <RequestData, ResponseData>(url: string, data?: RequestData, options?: AxiosRequestConfig) => {
  console.log(data)
  return axiosInstance
    .post<ResponseData, AxiosResponse<ResponseData>>(url, data, {
      ...options,
    })
    .then((response) => response.data)
}
