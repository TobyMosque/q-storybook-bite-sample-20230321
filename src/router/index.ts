import { Pinia } from 'pinia';
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import routes from './routes';
import { RouterParams } from '@types/params';

export default function createRoute ({ store }: RouterParams) {
  const createHistory = import.meta.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(import.meta.env.VUE_ROUTER_BASE),
  });

  return Router;
};
