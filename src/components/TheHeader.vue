<script setup>
import HomeIcon from './icons/IconHome.vue'
import SettingsIcon from './icons/IconSettings.vue'
import StarIcon from './icons/IconStar.vue'
import SupportIcon from './icons/IconSupport.vue'
import EmailIcon from './icons/IconEmail.vue'
import NotificationsIcon from './icons/IconNotifications.vue'

const icons = [StarIcon, SettingsIcon, SupportIcon, EmailIcon, NotificationsIcon];
const notificationsLength = 4;

</script>

<template>
<div class="header">
  <div class="tab">
    <HomeIcon />
  </div>

  <div class="header-menu">
    <template v-for="(icon, index) in icons" :key="icon">
      <div class="tab-secondary relative">
        <component :is="icon"></component>
        <div v-if="index === 3 && notificationsLength > 0" class="badge">
          <span>{{ notificationsLength }}</span>
        </div>
      </div>
      <div v-if="index < icons.length -1" class="spacer"></div>
    </template>

    <div class="avatar">
      <img src="./../assets/__avatar_url.png" alt="Avatar"/>
    </div>
  </div>
</div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  height: 40px;
}
.tab {
  padding: 8px 16px;
  background: var(--vt-c-white);
  margin-right: auto;
  height: 40px;
}
.header-menu {
  display: flex;
  align-items: center;
}
.tab-secondary {
  padding: 8px 12px;
}
.spacer {
  width: 1px;
  height: 28px;
  background: var(--vt-c-divider);
}
.avatar {
  max-height: 40px;
}
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
