import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { ShopStore } from '../../store';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../store/product';
import { ShopStoreAwareInterface } from '../../utils/shop-store-aware.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit, ShopStoreAwareInterface {
  public shopStore: ShopStore;

  constructor(
    private route: ActivatedRoute,
    newShopStore: ShopStore,
  ) {
    this.shopStore = newShopStore;
  }

  ngOnInit() {
    this.route.params.subscribe(({ ['category-product']: categoryProduct }) => {
      const [category, product] = categoryProduct.split('-');

      this.shopStore.setActiveCategory(category);
      this.shopStore.setActiveProduct(product);
    });
  }

  public addToCart() {
    this.shopStore.addToShoppingCart(this.shopStore.activeProduct);
  }
}
