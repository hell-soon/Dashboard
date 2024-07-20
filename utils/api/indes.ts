import { getCity } from './service/city/city'
import { getWeather } from './service/weather/weather'

export const api = {
  weather: getWeather,
  city: getCity,
}
