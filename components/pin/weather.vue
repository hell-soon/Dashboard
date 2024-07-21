<script setup lang="ts">
import type { WeatherParams } from '~/utils/api/service/weather/weather.type'
import getWeatherIcon from '~/utils/shared/weather-icons'

const emit = defineEmits<{
  (e: 'refCreated', ref: HTMLElement): void
  (e: 'mouse-down', move: MouseEvent): void
}>()

const store = setupStore(['weather'])

const weatherBlock = ref<HTMLElement | null>(null)
const searchCityParams: WeatherParams = reactive({
  q: '',
})

const { fetchWeather } = store.weather
const { weatherInfo } = storeToRefs(store.weather)

onMounted(() => {
  emit('refCreated', weatherBlock.value!)
})

const { data } = await useFetch('/api/geolocation')

searchCityParams.q = data.value?.city

fetchWeather(searchCityParams)

// async function fetchCityByGeolocation(): Promise<void> {
//   const lat = ref(0)
//   const lon = ref(0)

//   try {
//     const position = await new Promise<GeolocationPosition>((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(resolve, reject)
//     })
//     lat.value = position.coords.latitude
//     lon.value = position.coords.longitude

//     const data = await api.city({
//       lat: lat.value,
//       lon: lon.value,
//     })

//     if (data.address.city) {
//       searchCityParams.q = data.address.city
//       localStorage.setItem('city', data.address.city)
//       await fetchWeather(searchCityParams)
//     }
//     else {
//       // eslint-disable-next-line no-alert
//       alert('Error occurred while retrieving city name.')
//     }
//   }
//   catch (error) {
//     console.error('Error fetching geolocation:', error)
//   }
// }

// if (searchCityParams.q) {
//   fetchCityByGeolocation()
// }
// else {
//   searchParams.q = city.value
//   fetchWeather(searchParams)
// }
</script>

<template>
  <div
    v-if="searchCityParams.q"
    ref="weatherBlock"
    class="pin"
    @mousedown="emit('mouse-down', $event)"
  >
    <h3>{{ weatherInfo.location.name }}</h3>
    <p>{{ weatherInfo.current.temp_c.toFixed(0) }}°C</p>
    <Icon
      :name="getWeatherIcon(weatherInfo.current.condition.text) ?? ''"
      size="100"
      s
    />
    <p>{{ weatherInfo.current.condition.text }}</p>
  </div>
</template>

<style lang="scss" scoped>
.pin {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  background-color: var(--bg-primary-color);
  box-shadow: 0px 10px 10px var(--bs-color-primary);
}
</style>
