<script setup lang="ts">
const isEdit = defineModel<boolean>('edit', { default: null })

const openEdit = ref(false)

function open() {
  openEdit.value = !openEdit.value
}

setTimeout(open, 100)
</script>

<template>
  <Teleport to="body">
    <div class="modal">
      <div calss="modal-pin">
        <slot />
      </div>
      <Transition name="slide-fade">
        <div v-show="openEdit" class="modal-contant">
          <div class="settings">
            <slot name="settings" />
          </div>
          <div class="modal-contant__footer">
            <UiButton text="Save" @click="isEdit = false" />
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(400px);
  opacity: 0;
}

.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.6);

  :deep(.pin) {
    top: 30%;
    left: 25%;
    scale: 1.3;
  }

  &-contant {
    position: absolute;
    height: 100%;
    width: 30vw;
    background-color: azure;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    &__footer {
      min-width: 250px;
    }
  }
}
</style>
