import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { ShopStoreAwareInterface } from '../../utils/shop-store-aware.interface';
import { ShopStore } from '../../store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent implements OnInit, OnDestroy ,ShopStoreAwareInterface {
  shopStore: ShopStore;

  constructor(
    private router: Router,
    newShopStore: ShopStore,
  ) {
    this.shopStore = newShopStore;
  }

  goBackToShop() {
    this.router.navigate(['/shop']);
  }

  ngOnInit() {
    if (!this.shopStore.checkout.deliveryOption) {
      this.router.navigate(['/shop/checkout']);
    }
  }

  ngOnDestroy() {
    this.shopStore.makeOrder();
  }
}
