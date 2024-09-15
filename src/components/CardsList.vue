<script setup>
import CardItem from './CardItem.vue'

const props = defineProps({
	items: { type: Array, required: true },
});

console.log(props.items);
</script>

<template>
  <div class="cards-list">
    <CardItem v-for="item in props.items" :key="item.id" :item="item"/>
  </div>
</template>

<style scoped>
.cards-list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
</style>