<script setup>
import TheHeader from './components/TheHeader.vue'
import TopContentTools from './components/TopContentTools.vue'
import TopNav from './components/TopNav.vue'
import CardsList from './components/CardsList.vue'

import { computed, ref, onMounted  } from 'vue';
import { useGenerateData } from './composables/useGenerateData';

// Génération d'items
const { items, generateMultipleItems, generateSingleItem  } = useGenerateData();

onMounted(() => generateMultipleItems(10));

function addCard() {
  generateSingleItem();
}

// Filtrage des items
const MINIMAL_INPUT_SIZE_BEFORE_SEARCH = 3;
const searchQuery = ref('');

const filteredCards = computed(() => {
  if (searchQuery.value.length < MINIMAL_INPUT_SIZE_BEFORE_SEARCH) return items.value;
  return items.value.filter((card) => card.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
});

function handleSearch(event) {
  searchQuery.value = event.trim();
}
</script>

<template>
  <header class="sticky-header" role="banner">
    <TheHeader/>
    <TopContentTools :modelValue="searchQuery" @update:modelValue="handleSearch" @add="addCard" role="search" aria-label="Outil de recherche et ajout de cartes"/>
    <TopNav/>
  </header>
  <main class="wrapper" role="main">
    <CardsList :items="filteredCards" aria-label="Liste de cartes filtrées"/>
  </main>
</template>

<style scoped>
.wrapper {
  padding: 24px;
}

.sticky-header {
  position: sticky;
  top: 0;
  z-index: 1000; 
  background-color: white; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
