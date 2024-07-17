import { Header } from '../.nuxt/components';
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
    <div class="loog">
      <h2>Logo xD</h2>
    </div>
    <div class="theme" @click="swapTheme()">
      <Icon
        :name="useColorMode().preference === 'light' ? 'line-md:moon-to-sunny-outline-transition' : 'line-md:sunny-outline-to-moon-transition'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 100%;

  h2 {
    font-family: 'Maple Mono Bold', monospace;
  }

  .theme {
    width: 40px;
    height: 40px;

    span {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
