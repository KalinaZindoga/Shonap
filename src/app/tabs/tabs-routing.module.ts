import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'pages',
    component: TabsPage,
    children: [
      
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../pages/about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'dash',
        loadChildren: () => import('../pages/dash/dash.module').then( m => m.DashPageModule)
      },
      {
        path: 'play/:stage/:level',
        loadChildren: () => import('../pages/play/play.module').then( m => m.PlayPageModule)
      }
      // {
      //   path: '',
      //   redirectTo: '/pages/home',
      //   pathMatch: 'full'
      // }
    ]
  },
  {
    path: '',
    redirectTo: '/pages/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
