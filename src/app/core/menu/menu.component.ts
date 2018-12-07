import { Component } from '@angular/core';
import { RouteLink } from './router-link';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public routeLinks: RouteLink[] = [
    new RouteLink('Shop', '/shop', 'shopping_basket'),
    new RouteLink('Shopping cart', '/shop/shopping-cart', 'shopping_cart'),
  ];
}
