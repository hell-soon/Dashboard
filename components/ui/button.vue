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

<style scoped lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  border-radius: 10px;
  border: 1px solid var(--bs-color-primary);
  cursor: pointer;

  transition: background-color 0.3s;

  &:hover {
    background-color: var(--bs-color-primary);
  }
}
</style>
