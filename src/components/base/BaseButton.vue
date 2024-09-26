<script setup>
const props = defineProps({
	hidden: { type: Boolean, default: false },
  ariaLabel: { type: String, required: true },
});

</script>

<template>
  <button :class="{ hidden: props.hidden }" :aria-label="props.ariaLabel">
     <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  & :active {
    transform: scale(0.95); 
  }

  & :hover {
    cursor: pointer; 
  }
}

.hidden {
  background-color: inherit;
  padding: 0;
}

</style>