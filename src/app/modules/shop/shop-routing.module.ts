import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { CategoryComponent } from './pages/category/category.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
  },
  {
    path: 'category/:category',
    component: CategoryComponent,
  },
  {
    path: 'details/:category-product',
    component: ProductDetailsComponent,
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'summary',
    component: SummaryComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  }
];

export const ShopRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);