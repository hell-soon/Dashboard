<script setup lang="ts">
import { useWeather } from '../composable'
import Card from './card.vue'

const emits = defineEmits<{
  (e: 'mouse-down', move: MouseEvent): void
}>()

const cardEl = ref<InstanceType<typeof Card>>()

const stores = setupStore(['global'])

defineExpose({ cardEl })

const { data } = await useFetch('/api/geolocation')

const { cardProps } = await useWeather(data.value?.regionName)

const isEdit = ref<boolean>(false)
</script>

<template>
  <Card
    ref="cardEl"
    :class="{ 'active-pin-edit': stores.global.dashboardEdit }"
    :payload="cardProps.payload"
    :settings="cardProps.settings"
    @mousedown="emits('mouse-down', $event)"
  >
    <div class="pin-footer">
      <Icon
        name="line-md:edit"
        size="25"
        @click="isEdit = true"
      />
    </div>
  </Card>
  <SharedPinEditor v-if="isEdit" v-model:edit="isEdit">
    <Card
      :payload="cardProps.payload"
      :settings="cardProps.settings"
    />
    <template #settings>
      <v-checkbox v-model="cardProps.settings.cityName" label="View name City" />
      <v-checkbox v-model="cardProps.settings.temp" label="View Temp" />
      <v-checkbox v-model="cardProps.settings.text" label="View Text" />
    </template>
  </SharedPinEditor>
</template>
