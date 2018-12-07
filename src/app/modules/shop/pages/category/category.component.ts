import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopStore } from '../../store';
import { Product } from '../../store/product';
import { ShopStoreAwareInterface } from '../../utils/shop-store-aware.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent implements OnInit, ShopStoreAwareInterface {
  public shopStore: ShopStore;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    newShopStore: ShopStore,
  ) {
    this.shopStore = newShopStore;
  }

  ngOnInit() {
    this.route.params.subscribe(({ category }) => {
      this.shopStore.setProductsFilter('');
      this.shopStore.setActiveCategory(category);
    });
  }

  public productDetails(product: Product) {
    this.shopStore.setActiveProduct(product.name);
    this.router.navigate(['/shop/details', `${this.shopStore.activeCategory.name}-${product.name}`]);
  }

  public addToCart(product: Product) {
    this.shopStore.addToShoppingCart(product);
  }
}
