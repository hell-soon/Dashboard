async function fetch<Res>(apiSelect: ImportMetaEnv['VITE_API_WEATHER' | 'VITE_API_CITY'], url: string, options?: any, headers?: any) {
  try {
    const reqUrl = import.meta.env[apiSelect] + url

    const customHeaders = { access: useCookie('access').value, ...headers }

    const { data, error, status } = await useFetch(reqUrl, { ...options, headers: customHeaders })

    const result = data.value as Res

    if (status.value !== 'success') {
      throw createError({
        statusCode: 500,
        statusMessage: reqUrl,
        message: error?.value?.message || '服务器内部错误',
      })
    }
    return result
  }
  catch (err) {
    return Promise.reject(err)
  }
}

export function getReq<Res>(
  apiSelect: ImportMetaEnv['VITE_API_WEATHER' | 'VITE_API_CITY'],
  url: string,
  params?: any,
  headers?: any,
) {
  return fetch<Res>(apiSelect, url, { method: 'get', params }, headers)
}

export function postReq<Res>(
  apiSelect: ImportMetaEnv['VITE_API_WEATHER' | 'VITE_API_CITY'],
  url: string,
  params?: any,
  headers?: any,
) {
  return fetch<Res>(apiSelect, url, { method: 'post', body: params }, headers)
}

export function putReq<Res>(
  apiSelect: ImportMetaEnv['VITE_API_WEATHER' | 'VITE_API_CITY'],
  url: string,
  params?: any,
  headers?: any,
) {
  return fetch<Res>(apiSelect, url, { method: 'put', body: params }, headers)
}

export function delReq<Res>(
  apiSelect: ImportMetaEnv['VITE_API_WEATHER' | 'VITE_API_CITY'],
  url: string,
  params?: any,
  headers?: any,
) {
  return fetch<Res>(apiSelect, url, { method: 'delete', params }, headers)
}
