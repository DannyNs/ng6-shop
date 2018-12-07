export class Review {
  description: string;
  rating: number;

  constructor(
    newDescription: string,
    newRating: number,
  ) {
    this.description = newDescription;
    this.rating = newRating;
  }
}