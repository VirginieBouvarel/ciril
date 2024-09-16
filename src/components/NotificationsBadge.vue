<script setup></script>

<template>
  <div class="badge">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style scoped>
.badge {
  position: absolute;
  left: 20px;
  top: 2px;
  width: 16px;
  height: 16px;
  background-color: orange;
  border-radius: 50%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.badge span {
  color: var(--vt-c-white);
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
}
</style>