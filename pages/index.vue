<script setup lang="ts">
const draggable = ref<HTMLElement | null>(null)
const block = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const offsetX = ref(0)
const offsetY = ref(0)

const editDashboard = ref(false)

function startDrag(e: MouseEvent) {
  if (!editDashboard.value)
    return
  if (draggable.value) {
    isDragging.value = true
    offsetX.value = e.clientX - draggable.value.offsetLeft
    offsetY.value = e.clientY - draggable.value.offsetTop
  }
}
function drag(e: MouseEvent) {
  if (!editDashboard.value)
    return

  if (isDragging.value && draggable.value) {
    const newLeft = e.clientX - offsetX.value
    const newTop = e.clientY - offsetY.value

    if (newLeft >= 0 && newTop >= 0
      && newLeft + draggable.value.offsetWidth <= block.value!.clientWidth
      && newTop + draggable.value.offsetHeight <= block.value!.clientHeight
    ) {
      draggable.value.style.left = `${newLeft}px`
      draggable.value.style.top = `${newTop}px`
    }
  }
}

function stopDrag() {
  if (!editDashboard.value)
    return
  isDragging.value = false
}

onMounted(() => {
  document.addEventListener('mousemove', drag)
  document.addEventListener('mouseup', stopDrag)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', drag)
  document.removeEventListener('mouseup', stopDrag)
})
</script>

<template>
  <section>
    <div class="header">
      <h3>Dashboard</h3>
      <SharedButton :text="editDashboard ? 'Save' : 'Edit'" @click="editDashboard = !editDashboard" />
    </div>
    <div ref="block" class="block">
      <PinWeather
        :class="{ active: editDashboard }" @ref-created="draggable = $event"
        @mouse-down="startDrag($event)"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.block {
  position: relative;
  display: flex;
  height: 700px;

  .draggable {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background-color: rgb(233, 231, 231);
    box-shadow: 0px 10px 10px rgb(153, 153, 153);
  }
}

.active {
  cursor: pointer;
  animation: spin 0.4s infinite;
}
</style>
