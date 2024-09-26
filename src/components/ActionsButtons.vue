<script setup>
import RemoveRedEyeIcon from './icons/IconRemoveRedEye.vue'
import BrushIcon from './icons/IconBrush.vue'
import FileCopyIcon from './icons/IconFileCopy.vue'
import DeleteIcon from './icons/IconDelete.vue'
import MoreHorizIcon from './icons/IconMoreHoriz.vue'
import BaseButton from '@/components/base/BaseButton.vue';

const icons = [
  { id: 0, component: RemoveRedEyeIcon },
  { id: 1, component: BrushIcon },
  { id: 2, component: FileCopyIcon },
  { id: 3, component: DeleteIcon },
  { id: 4, component: MoreHorizIcon },
]
</script>

<template>
  <BaseButton v-for="icon in icons" :key="icon.id" class="actions-button" aria-label="Action associée à l'icône">
    <component :is="icon.component"></component>
  </BaseButton>
</template>

<style scoped lang="scss">
@use '@/assets/unit';

.actions-button {
  background: var(--vt-c-white);
  width: unit.pxToRem(36px);
  height: unit.pxToRem(36px);
}
</style>