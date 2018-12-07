import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { ShopStore } from '../../store';
import { ShopStoreAwareInterface } from '../../utils/shop-store-aware.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartComponent implements ShopStoreAwareInterface {
  public shopStore: ShopStore;

  constructor(
    newShopStore: ShopStore,
  ) {
    this.shopStore = newShopStore;
  }
}
