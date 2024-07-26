<script setup lang="ts">
const isChecked = ref(false)
</script>

<template>
  <label class="checkbox-label">
    <span>View</span>
    <input v-model="isChecked" type="checkbox">
    <span class="checkbox-custom" :class="{ 'checkbox-checked': isChecked }" />
  </label>
</template>

<style scoped>
.checkbox-label {
  display: flex;
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.checkbox-label input {
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-custom {
  position: absolute;
  top: 20;
  left: 0;
  height: 24px;
  width: 24px;
  border: 2px solid #eee;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.checkbox-custom::after {
  content: '';
  position: absolute;
  display: none;
}

.checkbox-label input:checked + .checkbox-custom::after {
  display: block;
}

.checkbox-label .checkbox-custom::after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid var(--bg-secondary-color);
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.checkbox-checked::after {
  animation: checkmark 0.3s;
}

@keyframes checkmark {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
