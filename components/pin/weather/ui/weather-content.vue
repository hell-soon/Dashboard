<script setup lang="ts">
import { useWeather } from '../composable'
import Card from './card.vue'

const emits = defineEmits<{
  (e: 'mouse-down', move: MouseEvent): void
}>()

const { cardProps } = await useWeather()

const isEdit = ref<boolean>(false)
</script>

<template>
  <Card
    v-model:edit="isEdit"
    editable
    :payload="cardProps.payload"
    :settings="cardProps.settings"
    @mousedown="emits('mouse-down', $event)"
  />
  <SharedPinEditor v-if="isEdit" v-model:edit="isEdit">
    <Card
      v-model:edit="isEdit"
      :payload="cardProps.payload"
      :settings="cardProps.settings"
    />
  </SharedPinEditor>
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
