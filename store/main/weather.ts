import type { Weather } from '../../types/models/weather'
import type { WeatherParams } from '~/utils/api/service/weather/weather.type'

//* --- State ----------------------------------------------- *//
interface WeatherState {
  weatherInfo: Weather
  error: unknown
}

//* --- Store ----------------------------------------------- *//
export const useWeatherStore = defineStore('wather', {
  state: (): WeatherState => ({
    weatherInfo: {} as Weather,
    error: null,
  }),

  actions: {
    async fetchWeather(params?: WeatherParams) {
      try {
        const res = await api.weather(params)
        this.weatherInfo = res
      }
      catch (err) {
        this.error = err
      }
    },
  },
})
