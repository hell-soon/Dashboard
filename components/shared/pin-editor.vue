<script setup lang="ts">
const isEdit = defineModel<boolean>('edit', { default: null })

const openEdit = ref(false)

function open() {
  openEdit.value = true
}

function save() {
  openEdit.value = false
  setTimeout(() => isEdit.value = false, 500)
}

setTimeout(open, 100)
</script>

<template>
  <Teleport to="body">
    <div class="modal">
      <Transition name="slide-left">
        <div v-show="openEdit" class="modal-pin">
          <slot />
        </div>
      </Transition>
      <Transition name="slide-right">
        <div v-show="openEdit" class="modal-contant">
          <div class="settings">
            <slot name="settings" />
          </div>
          <div class="modal-contant__footer">
            <UiButton text="Save" @click="save" />
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s ease-out;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateY(-400px);
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease-out;
}

.slide-right-enter-from,
.slide-right-leave-to {
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
  background-color: rgba($color: #838383, $alpha: 0.6);

  &-pin {
    position: relative;
    top: 30%;
    left: 35%;
    scale: 1.3;
  }

  &-contant {
    position: absolute;
    height: 100%;
    width: 30vw;
    margin: 10px;
    border-radius: 20px;
    background-color: var(--bg-main-color);
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
