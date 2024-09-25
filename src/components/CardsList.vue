<script setup>
import CardItem from './CardItem.vue'

const props = defineProps({
	items: { type: Array, required: true },
});
</script>

<template>
  <section  class="cards-list">
    <h2 class="sr-only">Liste des cartes</h2>
    <CardItem v-for="item in props.items" :key="item.id" :item="item"/>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/unit';

.cards-list {
  display: flex;
  flex-wrap: wrap;
  gap: unit.pxToRem(24px);
}

@media (max-width: unit.pxToRem(630px)) {
  .cards-list {
    justify-content: center; 
  }
}
</style>