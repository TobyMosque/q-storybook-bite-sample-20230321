import { Pinia } from "pinia";
import { App } from "vue";
import { Router } from "vue-router";

export interface StoreParams  {
}

export interface RouterParams extends StoreParams  {
  store: Pinia
}

export interface BootParams extends RouterParams {
  app: App,
  router: Router
}

