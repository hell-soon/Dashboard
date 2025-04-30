<script setup lang="ts">
import type { WeatherCardSettingOption } from '../types'
import { useWeather } from '../composable'
import Card from './card.vue'

const emits = defineEmits<{
  (e: 'mouseDown', move: MouseEvent): void
}>()

const cardEl = ref<InstanceType<typeof Card>>()
const stores = setupStore(['global'])

defineExpose({ cardEl })

const { data } = await useFetch('/api/geolocation')
const { cardProps } = await useWeather(data.value?.regionName)
const isEdit = ref<boolean>(false)

const settings: WeatherCardSettingOption[] = [
  {
    key: 'cityName',
    label: 'View name City',
  },
  {
    key: 'temp',
    label: 'View Temp',
  },
  {
    key: 'text',
    label: 'View Text',
  },
]
</script>

<template>
  <Card
    ref="cardEl"
    :class="{ 'active-pin-edit': stores.global.dashboardEdit }"
    :payload="cardProps.payload"
    :settings="cardProps.settings"
    @mousedown="emits('mouseDown', $event)"
  >
    <div class="pin-footer">
      <Icon
        name="line-md:edit"
        size="25"
        @click="isEdit = true"
      />
    </div>
  </Card>
  <SharedPinEditor
    v-if="isEdit"
    v-model:edit="isEdit"
  >
    <Card
      :payload="cardProps.payload"
      :settings="cardProps.settings"
    />
    <template #settings>
      <div class="setting_wrapper">
        <h2>Settings</h2>
        <UiCheckbox
          v-for="setting in settings"
          :key="setting.key"
          v-model="cardProps.settings[setting.key]"
          :label="setting.label"
        />
      </div>
    </template>
  </SharedPinEditor>
</template>

<style lang="scss" scoped>
.setting_wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    text-align: center;
  }
}
</style>
