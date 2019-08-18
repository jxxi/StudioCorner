import { RouteConfig } from 'vue-router/types/router';

export const HelpRoutes: RouteConfig[] = [
  {
    path: '/help',
    component: () => import(/* webpackChunkName: "help" */ './Help/Help.vue').then((m: any) => m.default),
  },
];
