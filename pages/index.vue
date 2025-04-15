<script setup lang="ts">
import GithubContent from '~/components/pin/github/ui/github-content.vue'
import WeatherContent from '~/components/pin/weather/ui/weather-content.vue'

const draggable = ref<InstanceType<typeof WeatherContent> | null>(null)
const block = ref<HTMLElement>()
const isDragging = ref(false)
const offsetX = ref(0)
const offsetY = ref(0)

const stores = setupStore(['global'])

function startDrag(e: MouseEvent) {
  if (!stores.global.dashboardEdit)
    return
  if (draggable.value) {
    isDragging.value = true
    offsetX.value = e.clientX - draggable.value?.cardEl?.$el.offsetLeft
    offsetY.value = e.clientY - draggable.value?.cardEl?.$el.offsetTop
  }
}

function drag(e: MouseEvent) {
  if (!stores.global.dashboardEdit)
    return

  if (isDragging.value && draggable.value) {
    const newLeft = e.clientX - offsetX.value
    const newTop = e.clientY - offsetY.value

    if (newLeft >= 0 && newTop >= 0
      && newLeft + draggable.value?.cardEl?.$el.offsetWidth <= block.value!.clientWidth
      && newTop + draggable.value?.cardEl?.$el.offsetHeight <= block.value!.clientHeight
      && draggable.value?.cardEl?.$el.style 
    ) {
      draggable.value.cardEl.$el.style.left = `${newLeft}px`
      draggable.value.cardEl.$el.style.top = `${newTop}px`
    }
  }
}

function stopDrag() {
  if (!stores.global.dashboardEdit)
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
      <UiButton
        :text="stores.global.dashboardEdit ? 'Save' : 'Edit'"
        @click="stores.global.dashboardEdit = !stores.global.dashboardEdit"
      />
    </div>
    <div ref="block" class="block">
      <!-- <WeatherContent
        ref="draggable"
        @mouse-down="startDrag($event)"
      /> -->
      <GithubContent
        ref="draggable"
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
}
</style>
