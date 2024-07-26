import type { CardProps } from '../types'
import getWeatherIcon from '~/utils/shared/weather-icons'

export async function useWeather() {
  const { data } = await useFetch('/api/geolocation')

  const weatherInfo = await api.weather({ q: data.value?.regionName ? data.value?.regionName : 'Oslo' })

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
