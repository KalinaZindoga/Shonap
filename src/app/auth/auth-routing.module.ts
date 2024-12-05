import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    // component: TabsPage,
    children: [
      { 
        path: 'login',
        loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
      },
    
      {
        path: 'sign-up',
        loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
      },
    
      {
        path: 'forgot-password',
        loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
      },
     
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],

})
export class AuthRoutingModule {}
