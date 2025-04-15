import type { WeatherCardProps } from '../types'
import getWeatherIcon from '~/utils/shared/weather-icons'

export async function useWeather(regionName?: string) {
  const weatherInfo = await api.weather({ q: regionName ?? 'Canada' })

  const elementSettings = ref({
    cityName: true,
    temp: true,
    text: true,
  })

  const weatherIcon = computed(() => getWeatherIcon(weatherInfo.current.condition.text) ?? '')

  const cardProps = computed<WeatherCardProps>(() => ({
    payload: {
      weatherIcon: weatherIcon.value,
      ...weatherInfo,
    },
    settings: elementSettings.value,
  }))

  return {
    cardProps,
  }
}
