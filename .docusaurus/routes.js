import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/countdown/docs/',
    component: ComponentCreator('/countdown/docs/', 'f73'),
    routes: [
      {
        path: '/countdown/docs/',
        component: ComponentCreator('/countdown/docs/', 'f25'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/countdown/',
    component: ComponentCreator('/countdown/', 'e87'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
