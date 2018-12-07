import { observable, action } from 'mobx-angular';

import { Product } from './product';

export class Category {
  name: string = '';
  color: string = '';

  @observable
  products: Product[] = [];

  constructor(newName: string, newColor: string, newProducts: Product[]) {
    this.name = newName;
    this.color = newColor;
    this.products = newProducts;
  }

  @action public addProduct(newProduct: Product): void {
    this.products.push(newProduct);
  }
}
