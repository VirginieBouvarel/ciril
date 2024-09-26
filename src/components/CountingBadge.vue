<script setup></script>

<template>
  <div class="badge">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/unit';

.badge {
  position: absolute;
  left: unit.pxToRem(20px);
  top: unit.pxToRem(2px);
  width: unit.pxToRem(16px);
  height: unit.pxToRem(16px);
  background-color: orange;
  border-radius: 50%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    color: var(--vt-c-white);
    font-weight: bold;
    font-size: unit.pxToRem(12px);
    line-height: unit.convertLineHeight(12px, 16px);
    letter-spacing: 0.04em;
  }
}

</style>