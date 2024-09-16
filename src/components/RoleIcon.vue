<script setup>
import HomeIcon from './icons/IconHome.vue'
import SupportIcon from './icons/IconSupport.vue'
import PublicAvatarIcon from './icons/IconPublicAvatar.vue'

const props = defineProps({
	iconClass: { type: String, required: true },
});

const roleIconMapping = {
  'guest': PublicAvatarIcon,
  'user': HomeIcon,
  'admin': SupportIcon,
};
</script>

<template>
  <component :is="roleIconMapping[props.iconClass]" class="role-icon"/>
</template>

<style scoped>
.role-icon {
  margin-right: 10px;
}
.role-icon :deep(path) {
  fill: var(--color-heading);
}
</style>