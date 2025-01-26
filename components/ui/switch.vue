<script setup lang="ts">
const props = defineProps({
  activeColor: {
    type: String,
    default: '#4caf50',
  },
  inactiveColor: {
    type: String,
    default: '#ccc',
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value: string) => ['small', 'medium', 'large'].includes(value),
  },
  onText: {
    type: String,
    default: 'Вкл',
  },
  offText: {
    type: String,
    default: 'Выкл',
  },
  transitionDuration: {
    type: String,
    default: '0.3s',
  },
  switchColor: {
    type: String,
    default: '#fff',
  }
})

const isChecked = ref(false)

function toggleSwitch() {
  isChecked.value = !isChecked.value
}

const switchWidth = computed(() => {
  switch (props.size) {
    case 'small':
      return '40px'
    case 'medium':
      return '48px'
    case 'large':
      return '56px'
    default:
      return '48px'
  }
})

const switchHeight = computed(() => {
  switch (props.size) {
    case 'small':
      return '20px'
    case 'medium':
      return '24px'
    case 'large':
      return '28px'
    default:
      return '24px'
  }
})

const thumbSize = computed(() => {
  switch (props.size) {
    case 'small':
      return '16px'
    case 'medium':
      return '20px'
    case 'large':
      return '24px'
    default:
      return '20px'
  }
})

const thumbOffset = computed(() => {
  return `calc(${switchWidth.value} - ${thumbSize.value} - 4px)`
})
</script>

<template>
  <div class="custom-switch">
    <span class="custom-switch-label">{{ isChecked ? onText : offText }}</span>
    <button
      class="custom-switch-button"
      :class="{ 'custom-switch-button--active': isChecked }"
      :style="{
        '--active-color': activeColor,
        '--inactive-color': inactiveColor,
        '--switch-width': switchWidth,
        '--switch-height': switchHeight,
        '--thumb-size': thumbSize,
        '--thumb-offset': thumbOffset,
        '--transition-duration': transitionDuration,
        '--switch-color': switchColor,
      }"
      @click="toggleSwitch"
    >
      <span class="custom-switch-thumb" />
    </button>
  </div>
</template>

<style scoped>
.custom-switch {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: Arial, sans-serif;
}

.custom-switch-label {
  font-size: 14px;
  color: var(--color-text);
  transition: color var(--transition-duration) ease;
}

.custom-switch-button {
  position: relative;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  outline: none;
  transition:
    background-color var(--transition-duration) ease,
    box-shadow var(--transition-duration) ease;
  width: var(--switch-width);
  height: var(--switch-height);
  background-color: var(--inactive-color);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.custom-switch-button--active {
  background-color: var(--active-color);
}

.custom-switch-thumb {
  position: absolute;
  border-radius: 50%;
  background-color: var(--switch-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition:
    transform var(--transition-duration) ease,
    background-color var(--transition-duration) ease;
  width: var(--thumb-size);
  height: var(--thumb-size);
  top: calc((var(--switch-height) - var(--thumb-size)) / 2);
  left: 2px;
}

.custom-switch-button--active .custom-switch-thumb {
  transform: translateX(var(--thumb-offset));
  background-color: #fff;
}

.custom-switch-button:hover {
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.2);
}

.custom-switch-button:active {
  box-shadow: inset 0 2px 12px rgba(0, 0, 0, 0.3);
}
</style>
