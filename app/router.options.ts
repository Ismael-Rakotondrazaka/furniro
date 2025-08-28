import type { RouterConfig } from '@nuxt/schema';
import type { RouteRecordRedirect } from 'vue-router';

export default {
  routes(_routes) {
    const soft404Routes: RouteRecordRedirect = {
      name: 'not-found',
      path: '/:pathMatch(.*)*',
      redirect: '/',
    };

    return [
      ..._routes,
      soft404Routes,
    ];
  },
} satisfies RouterConfig;
