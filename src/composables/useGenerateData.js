import { ref } from 'vue';
import { faker } from '@faker-js/faker'; 
import _ from 'lodash';

export function useGenerateData() {
  const items = ref([]); 

  function generateItem() {
    return {
      id: faker.string.uuid(),
      modificationDate: faker.date.recent().getTime(),
      userName: faker.person.fullName(),
      name: _.capitalize(faker.lorem.words(3)),
      description: faker.lorem.lines({ min: 3, max: 5 }),
      iconClass: faker.helpers.arrayElement(['admin', 'user', 'guest']),
      image: faker.helpers.arrayElement(['mapLyon.png', null])
    };
  }

  function generateMultipleItems(count = 10) {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push(generateItem());
    }
    items.value = data;
  }

  function generateSingleItem() {
    items.value.push(generateItem());
  }

  return {
    items,
    generateMultipleItems,
    generateSingleItem
  };
}

