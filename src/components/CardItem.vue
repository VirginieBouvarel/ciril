<script setup>
import PublicAvatarIcon from './icons/IconPublicAvatar.vue'
import PublicIcon from './icons/IconPublic.vue'
import RemoveRedEyeIcon from './icons/IconRemoveRedEye.vue'
import BrushIcon from './icons/IconBrush.vue'
import FileCopyIcon from './icons/IconFileCopy.vue'
import DeleteIcon from './icons/IconDelete.vue'
import MoreHorizIcon from './icons/IconMoreHoriz.vue'
</script>

<template>
    <div class="card-item bg-pink">
      <div class="card-header">
        <div class="card-header-checkbox"></div>
        <p class="card-author">
          <PublicAvatarIcon class="card-author-icon"/>
          <span class="title">John Doe</span>
        </p>
      </div>
      <div class="card-media">
        <PublicIcon class="card-media-icon"/>
        <img src="../assets/picture.png" alt="Miniature Google Pap"/>
      </div>
      <div class="card-content">
        <p class="title card-content-title">Et voluptate elit dolore elit et nostrud</p>
        <p>Aliqua voluptate laboris eiusmod sit occaecat. Dolor irure incididunt labor ...</p>
        <div class="card-content-meta">
          <div>
            <p class="card-content-meta-title">Modifié le</p>
            <p>04/10/2020</p>
          </div>
          <div class="card-content-meta-right">
            <p class="card-content-meta-title">Application</p>
            <p>Mon application</p>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="card-actions-button">
          <RemoveRedEyeIcon />
        </button>
        <button class="card-actions-button">
          <BrushIcon />
        </button>
        <button class="card-actions-button">
          <FileCopyIcon />
        </button>
        <button class="card-actions-button">
          <DeleteIcon />
        </button>
        <button class="card-actions-button">
          <MoreHorizIcon />
        </button>
      </div>
    </div>
</template>

<style scoped>
/* .bg-pink {
  background: pink;
} */
.title {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.015em;
}
.card-item {
  border-radius: 8px;
  background: var(--vt-c-white);
  width: 280px;
  height: 407px;
}
.card-header {
  height: 52px;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  padding: 8px;
}
.card-header-checkbox {
  margin-right: 24px;
  width: 16px;
  height: 16px;
  border: 1px solid var(--vt-c-divider);
  border-radius: 3px;
}
.card-author {
  color: var(--color-heading);
  height: 52px;
  display: flex;
  align-items: center;
}
.card-author-icon {
  margin-right: 10px;
}
.card-media {
  height: 120px;
  background-color: var(--color-background-soft);
  display: flex;
  align-items: center;
  justify-content:center;
}
.card-content {
  height: 183px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-content-title {
  font-size: 13px;
  color: var(--color-heading);
}
.card-content-meta {
  display: flex;
  align-items:center;
  justify-content: space-between;
}
.card-content-meta-right {
  text-align: right;
}
.card-content-meta-title {
  color: var(--color-heading);
  font-weight: 600;
}
.card-actions {
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-actions-button {
  background: var(--vt-c-white);
  width: 36px;
  height: 36px;
  border: none;
}
</style>