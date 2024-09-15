import { ref } from 'vue';
import { faker } from '@faker-js/faker'; 
import _ from 'lodash';

export function useGenerateData(count = 10) {
  const items = ref([]); 

  const generateFakeData = () => {
    const data = [];
    for (let i = 0; i < count; i++) {
      const resource = {
        id: faker.string.uuid(),
        modificationDate: faker.date.recent().getTime(),
        userName: faker.person.fullName(),
        name: _.capitalize(faker.lorem.words(3)),
        description: faker.lorem.sentence(),
        iconClass: 'icon-' + faker.helpers.arrayElement(['home', 'user', 'settings', 'help']),
        image: faker.helpers.arrayElement(['picture.png', null])
      };
      data.push(resource);
    }
    items.value = data; 
  };

  return {
    items,
    generateFakeData
  };
}

