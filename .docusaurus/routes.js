import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/countdown/__docusaurus/debug/',
    component: ComponentCreator('/countdown/__docusaurus/debug/', '23b'),
    exact: true
  },
  {
    path: '/countdown/__docusaurus/debug/config/',
    component: ComponentCreator('/countdown/__docusaurus/debug/config/', 'e03'),
    exact: true
  },
  {
    path: '/countdown/__docusaurus/debug/content/',
    component: ComponentCreator('/countdown/__docusaurus/debug/content/', '652'),
    exact: true
  },
  {
    path: '/countdown/__docusaurus/debug/globalData/',
    component: ComponentCreator('/countdown/__docusaurus/debug/globalData/', '65e'),
    exact: true
  },
  {
    path: '/countdown/__docusaurus/debug/metadata/',
    component: ComponentCreator('/countdown/__docusaurus/debug/metadata/', '021'),
    exact: true
  },
  {
    path: '/countdown/__docusaurus/debug/registry/',
    component: ComponentCreator('/countdown/__docusaurus/debug/registry/', 'bf8'),
    exact: true
  },
  {
    path: '/countdown/__docusaurus/debug/routes/',
    component: ComponentCreator('/countdown/__docusaurus/debug/routes/', '5a9'),
    exact: true
  },
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
