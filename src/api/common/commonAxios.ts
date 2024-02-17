import { RefreshResponseProps, refresh } from 'api/login/refresh'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
axiosInstance.interceptors.request.use(
  (config) => {
    // localStorage에서 액세스 토큰 불러오기
    const userAuthInfo = JSON.parse(localStorage.getItem('userAuthInfo') || '{}')
    const accessToken = userAuthInfo && userAuthInfo.accessToken ? `Bearer ${userAuthInfo.accessToken}` : null
    if (accessToken) config.headers.Authorization = accessToken
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
axiosInstance.interceptors.response.use(
  (response) => {
    // 정상 응답 처리
    return response
  },
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 400)) {
      // 401이나 400 에러 시 refresh 요청
      refresh()
        .then((res: RefreshResponseProps) => {
          const userAuthInfo = JSON.parse(localStorage.getItem('userAuthInfo') || '{}')
          localStorage.setItem('userAuthInfo', JSON.stringify({ ...userAuthInfo, accessToken: res.accessToken })) // 토큰 삭제
          console.log(res)
        })
        .catch((err) => {
          // refresh도 에러 => 로그아웃 처리
          console.error(err)
          localStorage.removeItem('userAuthInfo') // 토큰 삭제
          window.location.href = '/login' // 로그인 페이지로 리디렉션
        })
    }
    return Promise.reject(error)
  }
)
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
