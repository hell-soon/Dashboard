<script setup lang="ts">
const activeTheme = ref(useColorMode().preference)

function swapTheme() {
  activeTheme.value = activeTheme.value === 'light' ? 'dark' : 'light'
  useColorMode().preference = activeTheme.value

  // if (activeTheme.value === 'light') {
  //   useColorMode().preference = 'dark'
  //   // icon.value = 'line-md:sunny-outline-to-moon-transition'
  //   activeTheme.value = 'dark'
  // }
  // else if (activeTheme.value === 'dark') {
  //   useColorMode().preference = 'light'
  //   // icon.value = 'line-md:moon-to-sunny-outline-transition'
  //   activeTheme.value = 'light'
  // }
}
</script>

<template>
  <div class="header">
    <div class="btn" @click="swapTheme()">
      <Icon
        :name="useColorMode().preference === 'light' ? 'line-md:moon-to-sunny-outline-transition' : 'line-md:sunny-outline-to-moon-transition'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.btn {
  width: 40px;
  height: 40px;

  span {
    width: 100%;
    height: 100%;
  }
}
</style>
