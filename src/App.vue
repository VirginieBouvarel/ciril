<script setup>
import TheHeader from './components/TheHeader.vue'
import TopContentTools from './components/TopContentTools.vue'
import TopNav from './components/TopNav.vue'
import CardsList from './components/CardsList.vue'
import { computed, ref, onMounted  } from 'vue';
import { useGenerateData } from './composables/useGenerateData';

const { items, generateFakeData } = useGenerateData(10);

onMounted(() => generateFakeData());

const searchQuery = ref('');

const filteredCards = computed(() => {
  if (searchQuery.value.length < 3) {
    return items.value;
  }
  return items.value.filter((card) => card.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
});

function handleSearch(event) {
  searchQuery.value = event.trim();
}
</script>

<template>
  <header>
    <TheHeader/>
    <TopContentTools :modelValue="searchQuery" @update:modelValue="handleSearch"/>
    <TopNav/>
  </header>
  <main class="wrapper">
    <CardsList :items="filteredCards"/>
  </main>
</template>

<style scoped>
.wrapper {
  padding: 24px;
}
</style>
