import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { authorization } from 'constants/authorization'
// import { authorization } from 'constants/authorization'
import { baseUrl } from 'constants/url'

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: authorization,
  },
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
  return axiosInstance
    .post<ResponseData, AxiosResponse<ResponseData>>(
      url,
      { ...data },
      {
        ...options,
      }
    )
    .then((response) => response.data)
}
