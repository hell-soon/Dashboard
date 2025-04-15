<script setup lang="ts">
import { useGithubProfile } from '../composable/use-github'
import Card from './card.vue'

const emits = defineEmits<{
  (e: 'mouse-down', move: MouseEvent): void
}>()
const cardEl = ref<InstanceType<typeof Card>>()
const stores = setupStore(['global'])

defineExpose({ cardEl })

const { cardProps } = await useGithubProfile()
</script>

<template>
  <Card
    ref="cardEl"
    :payload="cardProps.payload"
    :class="{ 'active-pin-edit': stores.global.dashboardEdit }"
    @mousedown="emits('mouse-down', $event)"
  />
</template>
