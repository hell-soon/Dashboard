<script setup lang="ts">
interface Props {
  text: string
  icon?: string
}

defineProps<Props>()
</script>

<template>
  <div class="button">
    {{ text }}
  </div>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  border-radius: 10px;
  border: 1px solid rgb(37, 37, 37);
  cursor: pointer;
}
</style>
