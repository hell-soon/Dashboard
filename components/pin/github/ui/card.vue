<script setup lang="ts">
import type { GitHubCardProps } from '../types'

defineProps<GitHubCardProps>()
</script>

<template>
  <div class="pin">
    <div class="pin-contain">
      <img 
        class="pin-contain__img"
        :src="payload.avatar_url" 
        :alt="payload.login"
      >
      <div class="pin-contain__text">
        <h2>
          {{ payload.name }}
        </h2>
        <span>
          {{ payload.login }}
        </span>
        <span>
          Repository: {{ payload.public_repos }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pin {
  min-height: 100px;

  min-width: 300px;
  max-width: 400px;

  &-contain {
    display: flex;
    justify-content: space-between;

    &__img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    &__text {
      align-items: start;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
