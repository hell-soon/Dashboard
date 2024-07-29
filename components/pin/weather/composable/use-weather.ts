import type { CardProps } from '../types'
import getWeatherIcon from '~/utils/shared/weather-icons'

export async function useWeather(regionName?: string) {
  const weatherInfo = await api.weather({ q: regionName ?? 'Oslo' })

  const elementSettings = ref({
    cityName: true,
    temp: true,
    text: false,
  })
  const weatherIcon = computed(() => getWeatherIcon(weatherInfo.current.condition.text) ?? '')

  const cardProps = computed<CardProps>(() => ({
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
