<script setup>
import CardItem from './CardItem.vue'
</script>

<template>
    <div class="cards-list bg-green">
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
</template>

<style scoped>
/* .bg-green {
  background: yellowgreen;
} */
.cards-list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
</style>