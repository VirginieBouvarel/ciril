<script setup>
import data from '../../data.json'
import CardItem from './CardItem.vue'
import { ref } from 'vue';

const cardsData = ref([...data]);
</script>

<template>
  <div class="cards-list">
    <CardItem v-for="item in cardsData" :key="item.id" :item="item"/>
  </div>
</template>

<style scoped>
.cards-list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
</style>