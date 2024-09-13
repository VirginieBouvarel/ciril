<script setup>
import TheHeader from './components/TheHeader.vue'
import TopContentTools from './components/TopContentTools.vue'
import TopNav from './components/TopNav.vue'
import CardsList from './components/CardsList.vue'
</script>

<template>
  <header>
    <TheHeader/>
    <TopContentTools/>
    <TopNav/>
  </header>
  <main class="wrapper">
    <CardsList />
  </main>
</template>

<style scoped>
.wrapper {
  padding: 24px;
}
</style>
