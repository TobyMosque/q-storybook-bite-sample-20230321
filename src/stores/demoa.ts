import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDemoAStore = defineStore('demoa', () => {
  const datea = ref('');


  async function fetch(this: StoreDemoA) {
    datea.value = await this.api.ping()
  }
  return {
    datea,
    fetch,
  };
});
type StoreDemoA = ReturnType<typeof useDemoAStore>;
