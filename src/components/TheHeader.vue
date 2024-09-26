<script setup>
import HomeIcon from './icons/IconHome.vue'
import SettingsIcon from './icons/IconSettings.vue'
import StarIcon from './icons/IconStar.vue'
import SupportIcon from './icons/IconSupport.vue'
import EmailIcon from './icons/IconEmail.vue'
import NotificationsIcon from './icons/IconNotifications.vue'
import CountingBadge from '@/components/CountingBadge.vue'
import BaseButton from '@/components/base/BaseButton.vue';

const icons = [
  { id: 0, component: StarIcon },
  { id: 1, component: SettingsIcon },
  { id: 2, component: SupportIcon },
  { id: 3, component: EmailIcon },
  { id: 4, component: NotificationsIcon },
]
const emailCount = 4;
const notificationsCount = 0;
</script>

<template>
<nav class="navbar" role="navigation" aria-label="Barre de navigation">
  <div class="home-tab">
    <BaseButton hidden aria-label="Accueil">
      <HomeIcon />
    </BaseButton>
  </div>

  <ul class="menu-tabs">
    <template v-for="icon in icons" :key="icon.id">
      <li class="tab relative">
        <BaseButton hidden aria-label="Icône de menu">
          <component :is="icon.component"></component>
        </BaseButton>
        <CountingBadge v-if="icon.id === 3 && emailCount > 0">
          {{ emailCount }}
        </CountingBadge>
        <CountingBadge v-if="icon.id === 4 && notificationsCount > 0">
          {{ notificationsCount }}
        </CountingBadge>
      </li>
      <li v-if="icon.id < icons.length -1" class="spacer"></li>
    </template>

    <div class="avatar">
      <img src="./../assets/__avatar_url.png" alt="Avatar"/>
    </div>
  </ul>
</nav>
</template>

<style scoped lang="scss">
@use '@/assets/unit';

.navbar {
  display: flex;
  align-items: center;
  height: unit.pxToRem(40px);

  .home-tab {
    padding: unit.pxToRem(8px) unit.pxToRem(16px);
    background: var(--vt-c-white);
    margin-right: auto;
    height: unit.pxToRem(40px);
  }

  .menu-tabs {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;

    .tab {
      padding: unit.pxToRem(8px) unit.pxToRem(12px);
    }
    .spacer {
      width: unit.pxToRem(1px);
      height: unit.pxToRem(28px);
      background: var(--vt-c-divider);
    }
  }

  .avatar {
    max-height: unit.pxToRem(40px);
  }
}
</style>
