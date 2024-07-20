<script setup lang="ts">
const weather = ref<HTMLElement | null>(null)

const emit = defineEmits<{
  (e: 'ref-created', ref: HTMLElement): void,
  (e: 'mouse-down', move: MouseEvent): void
}>();

onMounted(() => {
  emit('ref-created', weather.value!)
})
</script>

<template>
  <div class="weather" ref="weather" @mousedown="emit('mouse-down', $event)">
    <h1>Weather</h1>
  </div>
</template>

<style lang="scss" scoped>
.weather {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  border-radius: 20px;
  background-color: rgb(182, 182, 182);
  box-shadow: 0px 10px 10px rgb(153, 153, 153);
}
</style>
