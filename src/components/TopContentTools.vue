<script setup>
import AddIcon from './icons/IconAdd.vue'
import SearchIcon from './icons/IconSearch.vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', 'add'])
</script>

<template>
  <div class="top-content-tools">
    <div class="tool-box">
      <span class="tool-title">Créer</span>
      <div>
        <button class="add-button clickable" @click="emit('add')" aria-label="Créer une nouvelle ressource">
          <AddIcon />
        </button>
      </div>
    </div>

    <div class="spacer"></div>

    <div class="tool-box">
      <span class="tool-title search-title">Rechercher</span>
      <div class="search-input">
        <label for="search-input" class="sr-only">Rechercher une ressource</label>
        <input id="search-input" :value="props.modelValue" @input="emit('update:modelValue', $event.target.value)" class="search-input-text" type="text" placeholder="Nom d'une ressource"/>

        <button class="search-input-button clickable" aria-label="Rechercher">
          <SearchIcon />
        </button>
      </div>
    </div> 
  </div>
</template>

<style scoped>
.top-content-tools {
  height: 78px;
  background-color: var(--vt-c-white);
  border-bottom: 1px solid var(--vt-c-divider-soft);
  display: flex;
}
.tool-box {
  background: var(--vt-c-white);
  border: none;
  height: 77px;
  padding: 10px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 325px) {
  .tool-box {
    padding: 10px 22px;
  }
}

.tool-title {
  font-size: 12px;
  line-height: 16px;
  color: var(--color-heading);
}
.search-title {
  align-self: start;
}
.spacer {
  width: 1px;
  height: 60px;
  background: var(--vt-c-divider-soft);
  margin-top: 10px;
}
.add-button {
  background: var(--vt-c-blue);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-input {
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  width: 190px;
  margin: 10px 10px 10px 0;
}
.search-input-text {
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 6px 8px;
}
.search-input-text::placeholder {
  font-style: italic;
  color: var(--color-border);
}
.search-input-button {
  position: absolute;
  right: 0;
  background: var(--vt-c-blue);
  border: none;
  border-radius: 0 4px 4px 0;
  padding: 6px;
}
</style>