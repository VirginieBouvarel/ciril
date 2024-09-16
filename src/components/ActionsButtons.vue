<script setup>
import RemoveRedEyeIcon from './icons/IconRemoveRedEye.vue'
import BrushIcon from './icons/IconBrush.vue'
import FileCopyIcon from './icons/IconFileCopy.vue'
import DeleteIcon from './icons/IconDelete.vue'
import MoreHorizIcon from './icons/IconMoreHoriz.vue'

const icons = [RemoveRedEyeIcon, BrushIcon, FileCopyIcon, DeleteIcon, MoreHorizIcon];
</script>

<template>
  <button v-for="icon in icons" :key="icon" class="actions-button" aria-label="Action associée à l'icône">
    <component :is="icon"></component>
  </button>
</template>

<style scoped>
.actions-button {
    background: var(--vt-c-white);
    width: 36px;
    height: 36px;
    border: none;
}
</style>