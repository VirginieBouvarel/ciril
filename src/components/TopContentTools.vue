<script setup>
import AddIcon from './icons/IconAdd.vue'
import SearchIcon from './icons/IconSearch.vue'
import BaseButton from '@/components/base/BaseButton.vue';

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', 'add'])
</script>

<template>
  <div class="top-content-tools">
    <div class="tool-box">
      <span class="tool-title">Créer</span>
      <div>
        <BaseButton class="add-button" @click="emit('add')" aria-label="Créer une nouvelle ressource">
          <AddIcon />
        </BaseButton>
      </div>
    </div>

    <div class="spacer"></div>

    <div class="tool-box">
      <span class="tool-title search-title">Rechercher</span>
      <div class="search-input">
        <label for="search-input" class="sr-only">Rechercher une ressource</label>
        <input id="search-input" :value="props.modelValue" @input="emit('update:modelValue', $event.target.value)" class="search-input-text" type="text" placeholder="Nom d'une ressource"/>

        <BaseButton class="search-input-button" @click="emit('add')" aria-label="Rechercher">
          <SearchIcon />
        </BaseButton>
      </div>
    </div> 
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/unit';

.top-content-tools {
  height: unit.pxToRem(78px);
  background-color: var(--vt-c-white);
  border-bottom: unit.pxToRem(1px) solid var(--vt-c-divider-soft);
  display: flex;

  .tool-box {
    background: var(--vt-c-white);
    border: none;
    height: unit.pxToRem(77px);
    padding: unit.pxToRem(10px) unit.pxToRem(24px);
    display: flex;
    flex-direction: column;
    align-items: center;

    .tool-title {
      font-size: unit.pxToRem(12px);
      line-height: unit.convertLineHeight(12px, 16px);
      color: var(--color-heading);
    }

    .search-title {
      align-self: start;
    }

    .add-button {
      background: var(--vt-c-blue);
      border-radius: 50%;
      width: unit.pxToRem(30px);
      height: unit.pxToRem(30px);
      margin: unit.pxToRem(10px) auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .search-input {
      position: relative;
      display: flex;
      align-items: center;
      height: unit.pxToRem(30px);
      width: unit.pxToRem(190px);
      margin: unit.pxToRem(10px) unit.pxToRem(10px) unit.pxToRem(10px) 0;

      .search-input-text {
        border: unit.pxToRem(1px) solid var(--color-border);
        border-radius: unit.pxToRem(6px);
        padding: unit.pxToRem(6px) unit.pxToRem(8px);
      }
      .search-input-text::placeholder {
        font-style: italic;
        color: var(--color-border);
      }
      .search-input-button {
        position: absolute;
        right: 0;
        background: var(--vt-c-blue);
        border-radius: 0 unit.pxToRem(4px) unit.pxToRem(4px) 0;
        padding: unit.pxToRem(6px);
      }
    }
  }
  
  @media (max-width: unit.pxToRem(325px)) {
    .tool-box {
      padding: unit.pxToRem(10px) unit.pxToRem(22px);
    }
  }

  .spacer {
    width: unit.pxToRem(1px);
    height: unit.pxToRem(60px);
    background: var(--vt-c-divider-soft);
    margin-top: unit.pxToRem(10px);
  }
}
</style>