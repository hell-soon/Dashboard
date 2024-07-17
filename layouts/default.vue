<template>
  <main class="container block">
    <Header />
    <slot />
    <!-- <Footer /> -->
  </main>
</template>

<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
