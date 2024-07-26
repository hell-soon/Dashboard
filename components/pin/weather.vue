<script setup lang="ts">
import type { WeatherParams } from '~/utils/api/service/weather/weather.type'
import getWeatherIcon from '~/utils/shared/weather-icons'

const moveEmit = defineEmits<{
  (e: 'refCreated', ref: HTMLElement): void
  (e: 'mouse-down', move: MouseEvent): void
}>()

const store = setupStore(['weather', 'global'])

const weatherBlock = ref<HTMLElement | null>(null)
const searchCityParams: WeatherParams = reactive({
  q: '',
})

const { fetchWeather } = store.weather
const { weatherInfo } = storeToRefs(store.weather)

onMounted(() => {
  moveEmit('refCreated', weatherBlock.value!)
})

const { data } = await useFetch('/api/geolocation')

searchCityParams.q = data.value?.regionName ? data.value?.regionName : 'Oslo'

fetchWeather(searchCityParams)

const editPin = ref(false)

const instance = getCurrentInstance()

function add() {
  const componentName = instance?.type
  store.global.selectedComponetn = componentName

  store.global.openEdit = true
}

const iconEdit = ref('line-md:edit')

const weatherInfoFull = ref({
  cityName: true,
  temp: true,
  text: false,
})
</script>

<template>
  <div
    v-if="searchCityParams.q"
    ref="weatherBlock"
    class="pin"
    @mousedown="moveEmit('mouse-down', $event)"
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
        <span v-show="weatherInfoFull.temp">
          {{ weatherInfo.current.temp_c.toFixed(0) }}°C
        </span>
        <span v-show="weatherInfoFull.text">
          {{ weatherInfo.current.condition.text }}
        </span>
      </div>
    </div>
    <div class="pin-footer">
      <Icon
        :key="iconEdit"
        :name="iconEdit"
        size="25"
        @click="add"
      />
      <Transition>
        <div v-if="editPin" class="editor pin">
          <v-checkbox v-model="weatherInfoFull.cityName" label="View name City" />
          <v-checkbox v-model="weatherInfoFull.temp" label="View Temp" />
          <v-checkbox v-model="weatherInfoFull.text" label="View Text" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

:deep(.v-input) {
  height: 20%;
}

.pin {
  position: absolute;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  box-shadow: 0px 0px 5px var(--bs-color-primary);
  background-color: var(--bg-main-color);
  height: 100%;
  width: 100%;
  max-height: 200px;
  max-width: 300px;

  &-footer {
    display: flex;
    width: 100%;
    padding-top: 10px;
    align-items: center;
    justify-content: end;

    .editor {
      border-radius: 20px;
      position: absolute;
      right: -230px;
      top: 0;
      width: 200px;
      height: 200px;
      padding: 15px;
    }
  }

  &-contain {
    display: flex;
    justify-content: space-between;

    &__text {
      align-items: end;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
