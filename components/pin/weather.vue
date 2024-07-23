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

searchCityParams.q = data.value?.regionName ? data.value?.regionName : 'Oslo'

fetchWeather(searchCityParams)

const editPin = ref(false)
const iconEdit = ref('line-md:edit')

function a() {
  editPin.value = !editPin.value

  if (editPin.value) {
    iconEdit.value = 'line-md:close-small'
  }
  else {
    iconEdit.value = 'line-md:edit'
  }
}

const weatherInfoFull = ref({
  cityName: true,
  temp: false,
  text: false,
})
</script>

<template>
  <div
    v-if="searchCityParams.q"
    ref="weatherBlock"
    class="pin"
    @mousedown="emit('mouse-down', $event)"
  >
    <div class="pin-contain">
      <Icon
        :name="getWeatherIcon(weatherInfo.current.condition.text) ?? ''"
        size="100"
      />
      <div class="pin-contain__text">
        <h2 v-show="weatherInfoFull.cityName">
          {{ weatherInfo.location.name }}
        </h2>
        <p v-show="weatherInfoFull.temp">
          {{ weatherInfo.current.temp_c.toFixed(0) }}°C
        </p>
        <p v-show="weatherInfoFull.text">
          {{ weatherInfo.current.condition.text }}
        </p>
      </div>
    </div>
    <div class="pin-footer">
      <Icon
        :key="iconEdit"
        :name="iconEdit"
        size="25"
        @click="a"
      />
      <div v-if="editPin" class="editor pin">
        <v-checkbox v-model="weatherInfoFull.cityName" label="View name City" />
        <v-checkbox v-model="weatherInfoFull.temp" label="View Temp" />
        <v-checkbox v-model="weatherInfoFull.text" label="View Text" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.v-input) {
  height: 20%;
}

.pin {
  position: absolute;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px var(--bs-color-primary);
  background-color: var(--bg-main-color);

  &-footer {
    display: flex;
    width: 100%;
    padding-top: 10px;
    align-items: center;
    justify-content: end;

    .editor {
      border-radius: 20px;
      position: absolute;
      right: -220px;
      top: 0;
      width: 200px;
      height: 200px;
      padding: 15px;
    }
  }

  &-contain {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    &__text {
      align-items: end;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
