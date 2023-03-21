import { defineStore } from 'pinia';

export const useDemoBStore = defineStore('demob', {
  state: () => ({
    dateb: '',
  }),
  actions: {
    async fetch() {
      this.dateb = await this.api.ping()
    },
  },
});
