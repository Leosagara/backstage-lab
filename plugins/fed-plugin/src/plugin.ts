import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const fedPluginPlugin = createPlugin({
  id: 'fed-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const FedPluginPage = fedPluginPlugin.provide(
  createRoutableExtension({
    name: 'FedPluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
