import { Header } from '../.nuxt/components';
<script setup lang="ts">
enum ThemesVariant {
  Light = 'light',
  Dark = 'dark',
}

const icon: Record<ThemesVariant, string> = {
  [ThemesVariant.Light]: 'line-md:sunny-outline',
  [ThemesVariant.Dark]: 'line-md:sunny-outline-to-moon-transition',
}

const theme = useColorMode()

const iconTheme = computed(() => icon[theme.value as keyof typeof icon])

function swapTheme() {
  switch (theme.value) {
    case 'light':
      theme.preference = 'dark'
      break
    case 'dark':
      theme.preference = 'light'
      break
  }
}
</script>

<template>
  <div class="header">
    <div class="loog">
      <h2>Logo xD</h2>
    </div>
    <div class="theme" @click="swapTheme()">
      <ClientOnly>
        <Icon :key="theme.value" :icon="iconTheme" :name="iconTheme" />
      </ClientOnly>
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
