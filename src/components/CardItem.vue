<script setup>
import PublicIcon from './icons/IconPublic.vue'
import RoleIcon from './RoleIcon.vue'
import ActionsButtons from './ActionsButtons.vue'
import { computed } from 'vue';

const props = defineProps({
	item: { type: Object, required: true },
});

const modificationDate = computed(() => new Intl.DateTimeFormat('fr-FR').format(props.item.modificationDate));
</script>

<template>
    <article  class="card-item">
      <header  class="card-header">
        <input class="card-header-checkbox" role="checkbox" aria-checked="false" aria-label="Sélectionner cet élément">
        <p class="card-author">
          <RoleIcon :iconClass="props.item.iconClass"/>
          <span class="title title-size-1">{{ props.item.userName }}</span>
        </p>
      </header>
      <main>
        <figure  class="card-media">
          <img v-if="props.item.image" :src="`./src/assets/${props.item.image}`" alt="Miniature Google Map"/>
          <PublicIcon v-else aria-label="Icône par défaut"/>
        </figure>
        <section  class="card-content">
          <h2  class="title title-size-2">{{ props.item.name }}</h2>
          <p class="line-clamp">{{ props.item.description }}</p>
          <div class="card-content-meta">
            <div>
              <p class="title title-size-3">Modifié le</p>
              <p>{{ modificationDate }}</p>
            </div>
            <div class="to-right">
              <p class="title title-size-3">Application</p>
              <p>Mon application</p>
            </div>
          </div>
        </section>
      </main>
      <footer class="card-actions">
        <ActionsButtons  />
      </footer>
    </article>
</template>

<style scoped>
.title {
  color: var(--color-heading);
  font-weight: 600;
}
.title-size-1 {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.015em;
}
.title-size-2 {
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.015em;
}
.title-size-3 {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
}
.to-right {
  text-align: right;
}
.card-item {
  border-radius: 8px;
  background: var(--vt-c-white);
  width: 280px;
  height: 407px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
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
.card-media {
  height: 120px;
  background-color: var(--color-background-soft);
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-content {
  height: 183px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-content-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card-actions {
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.line-clamp {
  width: 248px;
  overflow: hidden;
  display: -webkit-box;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}
</style>