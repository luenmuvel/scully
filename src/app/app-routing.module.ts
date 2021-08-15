import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./feature/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'data',
    loadChildren: () =>
      import('./feature/data/data.module').then((m) => m.DataModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./feature/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'casa',
    loadChildren: () => import('./casa/casa.module').then((m) => m.CasaModule),
  },
  {
    path: '',
    redirectTo: 'data',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'data',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
