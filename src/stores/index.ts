import { createPinia } from 'pinia';
import { Router } from 'vue-router';
import { StoreParams } from '@types/params';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly router: Router;
  }
}

export default function createStore ({}: StoreParams) {
  const pinia = createPinia();
  return pinia;
};
