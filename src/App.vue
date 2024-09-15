<script setup>
import data from '../data.json'
import TheHeader from './components/TheHeader.vue'
import TopContentTools from './components/TopContentTools.vue'
import TopNav from './components/TopNav.vue'
import CardsList from './components/CardsList.vue'
import { ref } from 'vue';

const cardsData = ref([...data]);
</script>

<template>
  <header>
    <TheHeader/>
    <TopContentTools/>
    <TopNav/>
  </header>
  <main class="wrapper">
    <CardsList :items="cardsData"/>
  </main>
</template>

<style scoped>
.wrapper {
  padding: 24px;
}
</style>
