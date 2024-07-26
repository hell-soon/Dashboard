<script setup lang="ts">
const isEdit = defineModel<boolean>('edit', { default: null })
</script>

<template>
  <Teleport to="body">
    <div class="modal">
      <div>
        <slot />
      </div>
      <div class="modal-contant">
        <button @click="isEdit = false">
          Save
        </button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.4);

  &-contant {
    position: absolute;
    right: 0;
  }
}
</style>
