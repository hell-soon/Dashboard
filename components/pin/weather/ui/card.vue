<script setup lang="ts">
import type { CardProps } from '../types'

interface Props extends CardProps {
  editable?: boolean
}

defineProps<Props>()

const isEdit = defineModel<boolean>('edit')
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
    <div v-if="editable" class="pin-footer">
      <Icon
        name="line-md:edit"
        size="25"
        @click="isEdit = true"
      />
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
