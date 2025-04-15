import { getCity } from './service/city/city'
import { getGitHubProfile } from './service/github/github'
import { getWeather } from './service/weather/weather'

export const api = {
  weather: getWeather,
  city: getCity,
  gitHubProfile: getGitHubProfile,
}
