<script setup lang="ts">
import type { WeatherParams } from '~/utils/api/service/weather/weather.type'
import getWeatherIcon from '~/utils/shared/weather-icons'

const emit = defineEmits<{
  (e: 'refCreated', ref: HTMLElement): void
  (e: 'mouse-down', move: MouseEvent): void
}>()

const weatherBlock = ref<HTMLElement | null>(null)
const searchParams: WeatherParams = reactive({
  q: 'Tomsk',
})

const store = setupStore(['weather'])

const { fetchWeather } = store.weather
const { weatherInfo } = storeToRefs(store.weather)

onMounted(() => {
  emit('refCreated', weatherBlock.value!)
})

fetchWeather(searchParams)

const lat = ref(0)
const lon = ref(0)

async function fetchCityByGeolocation(): Promise<void> {
  try {
    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    lat.value = position.coords.latitude
    lon.value = position.coords.longitude

    const data = await api.city({
      lat: lat.value,
      lon: lon.value,
    })

    if (data.address.city) {
      searchParams.q = data.address.city
      fetchWeather(searchParams)
    }
    else {
      console.error('Error occurred while retrieving city: ', data)
    }
  }
  catch (error) {
    console.error('Error fetching geolocation:', error)
  }
  // if (navigator && navigator.geolocation) {
  // }
  // else {
  //   console.error('Geolocation is not supported by this browser.')
  // }
}

// if (!city.value) {
//   fetchCityByGeolocation()
// }
// else {
//   searchParams.q = city.value
//   fetchWeather(searchParams)
// }
</script>

<template>
  <div
    ref="weatherBlock"
    class="pin"
    @mousedown="emit('mouse-down', $event)"
  >
    <h3>{{ weatherInfo.location.name }}</h3>
    <p>{{ weatherInfo.current.temp_c.toFixed(0) }}°C</p>
    <Icon
      :name="getWeatherIcon(weatherInfo.current.condition.text) ?? ''"
      size="100"
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
  background-color: var(--bg-secondary-color);
  box-shadow: 0px 10px 10px var(--bs-color-primary);
}
</style>
