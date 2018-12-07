import { observable, action } from 'mobx-angular';

import { Image } from './image';
import { Review } from './review';

export class Product {
  name: string = '';
  price: number = 0.0;
  description: string = '';

  @observable
  activePhotoNumber = 0;

  @observable
  images: Image[] = [];

  @observable
  reviews: Review[] = [];

  constructor(newName: string, newPrice: number, newDescription: string) {
    this.name = newName;
    this.price = newPrice;
    this.description = newDescription;
  }

  @action public addImage(newImage: Image): void {
    this.images.push(newImage);
  }

  @action public addReview(newReview: Review): void {
    this.reviews.push(newReview);
  }

  @action public setActivePhotoNumber(newActivePhotoNumber: number) {
    this.activePhotoNumber = newActivePhotoNumber;
  }
}
