import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { fedPluginPlugin, FedPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(fedPluginPlugin)
  .addPage({
    element: <FedPluginPage />,
    title: 'Root Page',
    path: '/fed-plugin',
  })
  .render();
