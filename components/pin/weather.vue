<script setup lang="ts">
defineEmits(['mousedown'])
</script>

<template>
  <div class="weather" @mousedown="$emit('mousedown', $event)" />
</template>

<style lang="scss" scoped>
.weather {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  border-radius: 20px;
  background-color: rgb(233, 231, 231);
  box-shadow: 0px 10px 10px rgb(153, 153, 153);
}
</style>
