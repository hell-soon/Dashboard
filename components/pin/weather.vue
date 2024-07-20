<script setup lang="ts">
import type { WeatherParams } from '~/utils/api/service/weather/weather.type';
import getWeatherIcon from '~/utils/shared/weather-icons';
// import getCityByCoordinates from '~/utils/shared/search-city';

const weatherBlock = ref<HTMLElement | null>(null)

const emit = defineEmits<{
  (e: 'ref-created', ref: HTMLElement): void,
  (e: 'mouse-down', move: MouseEvent): void
}>();

onMounted(() => {
  emit('ref-created', weatherBlock.value!)
})

const params: WeatherParams = {
  q: 'Tomsk',
}

const store = setupStore('wather')

// const lat = ref(0)
// const lon = ref(0)

// if (navigator && navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       lat.value = position.coords.latitude;
//       lon.value = position.coords.longitude;
//       getCityByCoordinates(lat.value, lon.value)
//     },
//     (error) => {
//       console.error('Error occurred while retrieving position: ', error);
//     }
//   );
// } else {
//   console.error('Geolocation is not supported by this browser.');
// }

store.fetchWeather(params)
</script>

<template>
  <div class="pin" ref="weatherBlock" @mousedown="emit('mouse-down', $event)">
    <h3>{{ store.weatherInfo.location.name }}</h3>
    <Icon :name="getWeatherIcon(store.weatherInfo.current.condition.text) ?? ''" size="100" />
    <p>{{ store.weatherInfo.current.condition.text }}</p>
    <p>{{ store.weatherInfo.current.temp_c.toFixed(0) }}°C</p>
  </div>
</template>

<style lang="scss" scoped>
.pin {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  border-radius: 20px;
  background-color: rgb(95, 88, 88);
  box-shadow: 0px 10px 10px rgb(153, 153, 153);
}
</style>
