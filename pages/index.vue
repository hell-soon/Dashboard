<script setup lang="ts">
const draggables = ref<HTMLElement[]>([])
const block = ref<HTMLElement | null>(null)
const isDragging = ref<boolean[]>([false, false])
const offsetX = ref<number[]>([0, 0])
const offsetY = ref<number[]>([0, 0])

const editDashboard = ref(false)

function startDrag(index: number, e: MouseEvent) {
  if (!editDashboard.value)
    return
  if (draggables.value[index]) {
    isDragging.value[index] = true
    offsetX.value[index] = e.clientX - draggables.value[index].offsetLeft
    offsetY.value[index] = e.clientY - draggables.value[index].offsetTop
  }
}
function drag(e: MouseEvent) {
  if (!editDashboard.value)
    return
  draggables.value.forEach((draggable, index) => {
    if (isDragging.value[index] && draggable) {
      const newLeft = e.clientX - offsetX.value[index]
      const newTop = e.clientY - offsetY.value[index]

      if (newLeft >= 0 && newTop >= 0
        && newLeft + draggable.offsetWidth <= block.value!.clientWidth
        && newTop + draggable.offsetHeight <= block.value!.clientHeight) {
        draggable.style.left = `${newLeft}px`
        draggable.style.top = `${newTop}px`
      }
    }
  })
}

function stopDrag(index: number) {
  if (!editDashboard.value)
    return
  isDragging.value[index] = false
}

onMounted(() => {
  document.addEventListener('mousemove', drag)
  document.addEventListener('mouseup', () => isDragging.value.forEach((_, index) => stopDrag(index)))
})

onUnmounted(() => {
  document.removeEventListener('mousemove', drag)
  document.removeEventListener('mouseup', () => isDragging.value.forEach((_, index) => stopDrag(index)))
})
</script>

<template>
  <section>
    <div class="header">
      <h2>Draggables</h2>
      <SharedButton :text="editDashboard ? 'Save' : 'Edit'" @click="editDashboard = !editDashboard" />
    </div>
    <div ref="block" class="block">
      <div v-for="(_, index) in [0, 1, 2, 3]" :key="index" ref="draggables" class="draggable"
        @mousedown="startDrag(index, $event)" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.block {
  position: relative;
  display: flex;
  border: 2px solid rgb(37, 37, 37);
  border-radius: 20px;
  padding: 10px;
  height: 500px;

  .draggable {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 20px;
    background-color: rgb(100, 100, 100);

    button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
