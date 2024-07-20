<script setup lang="ts">
import type { WeatherParams } from '~/utils/api/service/weather/weather.type';

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

store.fetchWeather(params)
</script>

<template>
  <div class="pin" ref="weatherBlock" @mousedown="emit('mouse-down', $event)">
    <h3>{{ store.weatherInfo.location.name }}</h3>
    <img :src="`https:${store.weatherInfo.current.condition.icon}`" alt="Weather Icon">
    <p>{{ store.weatherInfo.current.condition.text }}</p>
    <p>{{ store.weatherInfo.current.condition.code }}</p>
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
  background-color: rgb(231, 231, 231);
  box-shadow: 0px 10px 10px rgb(153, 153, 153);
}
</style>
