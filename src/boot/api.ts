import { App } from 'vue';
import { inject, InjectionKey } from 'vue';
import { BootParams } from '@types/params';

interface Api {
  ping (): Promise<string>
}

declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly api: Api;
  }
}

const apiKey: InjectionKey<Api> = Symbol('api-key');
export function useApi() {
  const api = inject(apiKey);
  if (!api) {
    throw 'api not injected';
  }
  return api;
}

export default function bootApi ({ app, store }: BootParams) {
  const api: Api = {
    async ping () {
      await new Promise(resolve => setTimeout(resolve, 150))
      return new Date().toISOString();
    }
  }

  app.provide(apiKey, api);
  store.use(() => ({ api }));
};
