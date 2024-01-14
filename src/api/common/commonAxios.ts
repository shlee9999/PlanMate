import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// const userAuthInfo = JSON.parse(localStorage.getItem('userAuthInfo') || '{}')

// const accessToken = userAuthInfo && userAuthInfo.accessToken ? 'Bearer ' + userAuthInfo.accessToken : null

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: process.env.REACT_APP_ACCESS_TOKEN,
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

export const axiosDELETE = <RequestData, ResponseData>(
  url: string,
  params?: RequestData,
  options?: AxiosRequestConfig
) => {
  return axiosInstance
    .delete<ResponseData, AxiosResponse<ResponseData>, RequestData>(url, { params, ...options })
    .then((response) => response.data)
}
