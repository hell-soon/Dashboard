import type { CityParams } from './city.type'
import type { City as CityResponse } from '~/types/models/city'

export function getCity(params?: CityParams) {
  return getReq<CityResponse>('VITE_API_CITY', '', params)
}
