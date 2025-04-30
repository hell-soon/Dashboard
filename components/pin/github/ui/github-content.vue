<script setup lang="ts">
import { useGithubProfile } from '../composable/use-github'
import Card from './card.vue'

const emits = defineEmits<{
  (e: 'mouseDown', move: MouseEvent): void
}>()
const cardEl = ref<InstanceType<typeof Card>>()
const stores = setupStore(['global'])
const username = ref('')

defineExpose({ cardEl })

const { cardProps } = await useGithubProfile('hell-soon')


</script>

<template>
  <input v-model="username">
  <Card
    ref="cardEl"
    :payload="cardProps.payload"
    :class="{ 'active-pin-edit': stores.global.dashboardEdit }"
    @mousedown="emits('mouseDown', $event)"
  />
</template>
