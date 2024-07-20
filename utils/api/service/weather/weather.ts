import type { WeatherParams } from './weather.type'
import type { Weather as WeatherResponse } from '~/types/models/weather'

export function getWeather(params?: WeatherParams) {
  return getReq<WeatherResponse>('VITE_API_WEATHER', '', params)
}
