import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobxAngularModule } from 'mobx-angular';

import { ShopComponent } from './pages/shop/shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { ShopStore } from './store';
import { MatGridListModule, MatListModule, MatToolbarModule, MatCardModule, MatButtonModule, MatInputModule, MatBadgeModule, MatIconModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { CategoryComponent } from './pages/category/category.component';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { EnumKeysPipe } from './pipes/enum-keys.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    ShopRoutingModule,
    MobxAngularModule,
    MatBadgeModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ShopComponent,
    CategoryComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    SummaryComponent,
    CheckoutComponent,
    FilterByNamePipe,
    EnumKeysPipe,
  ],
  providers: [
    ShopStore,
    ProductService,
    CategoryService,
  ],
})
export class ShopModule { }
