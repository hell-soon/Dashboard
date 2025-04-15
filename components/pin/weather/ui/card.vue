<script setup lang="ts">
import type { WeatherCardProps } from '../types'

defineProps<WeatherCardProps>()
</script>

<template>
  <div class="pin">
    <div class="pin-contain">
      <Icon
        :name="payload.weatherIcon"
        size="100"
      />
      <div class="pin-contain__text">
        <h2 v-show="settings.cityName">
          {{ payload.location.name }}
        </h2>
        <span v-show="settings.temp">
          {{ payload.current.temp_c.toFixed(0) }}°C
        </span>
        <span v-show="settings.text">
          {{ payload.current.condition.text }}
        </span>
      </div>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.pin {
  min-height: 200px;
  max-height: 300px;

  min-width: 300px;
  max-width: 400px;

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

:deep(.pin-footer) {
  display: flex;
  width: 100%;
  padding-top: 10px;
  align-items: center;
  justify-content: end;
  cursor: pointer;

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
</style>
