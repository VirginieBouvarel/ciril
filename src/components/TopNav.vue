<script setup></script>

<template>
  <div class="top-nav"></div>
</template>

<style scoped lang="scss">
@use '@/assets/unit';

.top-nav {
  height: unit.pxToRem(32px);
  background-color: var(--vt-c-white);
  border-bottom: unit.pxToRem(1px) solid var(--vt-c-divider-soft);
}
</style>