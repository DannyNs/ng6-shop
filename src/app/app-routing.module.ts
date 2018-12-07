import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ShopModule } from './modules/shop/shop.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full',
  },
  {
    path: 'shop',
    loadChildren: () => ShopModule,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);