<script setup>
import CardItem from './CardItem.vue'
</script>

<template>
    <div class="cards-list">
      <CardItem v-for="(item, index) in 10" :key="index"/>
    </div>
</template>

<style scoped>
.cards-list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
</style>