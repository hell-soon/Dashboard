<script setup lang="ts">
const store = setupStore(['global'])

function save() {
  store.global.selectedComponetn = null
  store.global.openEdit = false
}
</script>

<template>
  <Teleport to="body">
    <div v-if="store.global.openEdit" class="modal">
      <div class="">
        <component :is="store.global.selectedComponetn" />
      </div>
      <div class="modal-contant">
        <button @click="save">
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
