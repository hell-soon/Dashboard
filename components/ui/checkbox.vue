<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

function handleChange(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<template>
  <label class="custom-checkbox">
    <input
      type="checkbox"
      :checked="modelValue"
      class="custom-checkbox__input"
      @change="handleChange"
    >
    <span class="custom-checkbox__checkmark">
      <svg
        class="custom-checkbox__tick"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M20 6L9 17L4 12" />
      </svg>
      <span class="custom-checkbox__fill" />
    </span>
    <span class="custom-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<style scoped lang="scss">
.custom-checkbox {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  justify-content: space-between;
  width: 100%;
  user-select: none;

  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &__checkmark {
    position: relative;
    height: 24px;
    width: 24px;
    border: 2px solid var(--bs-color-primary);
    border-radius: 6px;
    transition: border-color 0.3s;
    overflow: hidden;

    .custom-checkbox__input:checked ~ & {
      border-color: var(--color-text);
    }
  }

  &__fill {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
    transform-origin: center;
    transition: transform 0.3s ease-in-out;

    .custom-checkbox__input:checked ~ .custom-checkbox__checkmark & {
      transform: scale(1);
    }
  }

  &__tick {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    transform: translate(-50%, -50%);
    stroke-dasharray: 24;
    stroke-dashoffset: 24;
    transition: stroke-dashoffset 0.3s ease-in-out;

    .custom-checkbox__input:checked ~ .custom-checkbox__checkmark & {
      stroke-dashoffset: 0;
    }
  }
}
</style>
