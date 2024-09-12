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
  <main class="wrapper bg-orange">
    <CardsList />
  </main>
</template>

<style scoped>
/* .bg-orange {
  background: orange;
} */
.wrapper {
  padding: 24px;
}

</style>
