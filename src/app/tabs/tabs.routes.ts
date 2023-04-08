import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'analyze',
        loadComponent: () =>
          import('../analyze/analyze.page').then((m) => m.AnalyzePage),
      },
      {
        path: 'store',
        loadComponent: () =>
          import('../store/store.page').then((m) => m.StorePage),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('../about/about.page').then((m) => m.AboutPage),
      },
      {
        path: '',
        redirectTo: '/tabs/analyze',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/analyze',
    pathMatch: 'full',
  },
];
