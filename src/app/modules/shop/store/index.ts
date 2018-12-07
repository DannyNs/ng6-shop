import { action, observable, computed } from 'mobx-angular';
import { Injectable } from '@angular/core';
import { Category } from './category';
import { Product } from './product';
import { Image } from './image';
import { Review } from './review';
import { Checkout } from './checkout';
import { Address } from './address';
import { Payment } from './payment';
import DeliveryOption from './delivery-option';

const getShoes = (): Product[] => {
  const adidas = new Product('Adidas', 22.23, 'Good shoes');
  adidas.addImage(new Image('https://dsw.scene7.com/is/image/DSWShoes/367975_100_ss_01?$pdp-image$'));

  const nike = new Product('Nike', 50.00, 'Even better shoes');
  nike.addImage(new Image('https://static3.butomaniak.pl/pol_pl_Nike-Air-Force-1-LF1-Duckboot-17-916682-701-21864_1.jpg'));

  const converse = new Product('Converse', 30.00, 'Average shoes');
  converse.addImage(new Image('https://static01.nyt.com/images/2014/10/15/business/15trademark-pic1/15trademark-pic1-articleLarge.jpg?quality=75&auto=webp&disable=upscale'));

  return [adidas, nike, converse];
}

const getBags = (): Product[] => {
  const adidasBag = new Product('Adidas Bag', 22.23, 'Very nice bag my friend');
  adidasBag.addImage(new Image('https://www.eobuwie.com.pl/media/catalog/product/cache/image/800x800//4/0/4057289805624_1__pm.jpg'));

  return [adidasBag];
}

const getCars = (): Product[] => {
  const porsche = new Product('Porsche', 100000.00, 'Very good condition');
  porsche.addImage(new Image('https://1-photos7.motorcar.com/new-2018-porsche-panamera-4ehybridawd-10159-16894039-2-1024.jpg'));

  const audi = new Product('Audi', 20000.00, 'Old car but still working');
  audi.addImage(new Image('https://thumbs.img-sprzedajemy.pl/1000x901c/52/aa/55/audi-80-b4-80-skoczow-sprzedam-469385359.jpg'));

  return [porsche, audi];
}

const getMotorbikes = (): Product[] => {
  const ducati = new Product('Ducati', 40000.00, 'Super fast, and versatile bike');
  ducati.addImage(new Image('http://www.bikebound.com/wp-content/uploads/2018/07/Ducati-Scrambler-Full-Throttle.jpg'));
  ducati.addImage(new Image('https://images.financialexpress.com/2018/08/scrambler-1100-med.jpg'));
  ducati.addImage(new Image('https://img.newatlas.com/ducati-scrambler-2019-joyvolution-2.jpg?auto=format%2Ccompress&fit=max&q=60&w=1000&s=b484b3f00fe5df904b25f82502b10755'));

  const romet = new Product('Romet', 400.00, 'Old working, good for short trips');
  romet.addImage(new Image('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNrUg8fObA4zbMw6_MX7_pkjSxyoRGh1mkVJ441FpybaSPhB3'));
  romet.addImage(new Image('https://scontent-lga3-1.cdninstagram.com/vp/770a0ecadb4801d8f58adb8199a09646/5C84E6C9/t51.2885-15/sh0.08/e35/s640x640/34378546_257448091667876_2700971930202144768_n.jpg'));

  romet.addReview(new Review('This is very good bike I had one when I was young', 5));
  romet.addReview(new Review('I do not recommend this one although it has some charm it break a lot!', 1));

  return [ducati, romet];
}

@Injectable()
export class ShopStore {
  @observable
  categories: Category[] = [];

  @observable
  activeCategory: Category = null;

  @observable
  activeProduct: Product = null;

  @observable
  shoppingCart: Product[] = [];

  @observable
  checkout: Checkout = new Checkout();

  @observable
  categoriesFilterValue = '';

  @observable
  productsFilterValue = '';

  constructor() {
    this.addCategory(new Category('Shoes', '#66bb6a', getShoes()));
    this.addCategory(new Category('Bags', '#6002ee', getBags()));
    this.addCategory(new Category('Cars', '#ef0078', getCars()));
    this.addCategory(new Category('Motorbikes', '#ff8d00', getMotorbikes()));
  }

  @computed public get deliveryCost(): number {
    return this.checkout.deliveryOption ? DeliveryOption.getPrice(this.checkout.deliveryOption) : 0.00;
  }

  @computed public get totalShoppingCart(): number {
    const productPrices: number = this.shoppingCart.reduce((prev, product) => prev + product.price, 0.00);

    return productPrices;
  }

  @action public makeOrder() {
    this.shoppingCart = [];
    this.checkout = new Checkout();
  }

  @action public addCategory(newCategory: Category): void {
    this.categories.push(newCategory);
  }

  @action public addToShoppingCart(product: Product): void {
    this.shoppingCart.push(product);
  }

  @action public removeFromShoppingCart(index: number): void {
    this.shoppingCart = this.shoppingCart.filter((product, i) => i !== index);
  }

  @action public setActiveCategory(newActiveCategory: string): void {
    this.activeCategory = this.categories.find(({ name }) => newActiveCategory === name);
  }

  @action public setActiveProduct(newActiveProduct: string): void {
    this.activeProduct = this.activeCategory.products.find(({ name }) => newActiveProduct === name );
  }

  @action public setCategoriesFilter(newCategoryFilterValue: string): void {
    this.categoriesFilterValue = newCategoryFilterValue;
  }

  @action public setProductsFilter(newProductsFilterValue: string): void {
    this.productsFilterValue = newProductsFilterValue;
  }

  @action public addNewCheckout(newCheckout: Checkout) {
    this.checkout = newCheckout;
  }
}