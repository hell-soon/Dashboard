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
  box-shadow: 0px 10px 10px var(--bs-color-primary);
}
</style>
