import { observable, action, computed } from 'mobx-angular';

import { Category } from '../store/category';
import { Product } from '../store/product';
import { ShopStore } from '../store';
import DeliveryOption from '../store/delivery-option';

export class ShopStoreMock extends ShopStore {
  constructor() {
    super();

    this.categories.push(
      new Category('Shoes', '#66bb6a', [
        new Product('Adidas', 22.23, 'Good shoes'),
        new Product('Nike', 50.00, 'Even better shoes'),
        new Product('Converse', 30.00, 'Average shoes'),
      ])
    );
    this.setActiveCategory(this.categories[0].name);
    this.setActiveProduct(this.activeCategory.products[0].name);
    this.checkout.deliveryOption = DeliveryOption.POST_OFFICE;
  }
}