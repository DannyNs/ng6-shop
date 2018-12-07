import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ShopStore } from '../../store';
import { ShopStoreAwareInterface } from '../../utils/shop-store-aware.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent implements OnInit, ShopStoreAwareInterface {
  public shopStore: ShopStore;
  public breakpoint: number = 1;

  constructor(newShopStore: ShopStore) {
    this.shopStore = newShopStore;
  }

  public ngOnInit() {
    this.breakpoint = (window.innerWidth <= 960) ? 1 : 6;
  }

  public onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 960) ? 1 : 6;
  }
}
