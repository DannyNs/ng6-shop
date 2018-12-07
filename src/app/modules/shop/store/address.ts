import { observable, action } from "mobx-angular";

export class Address {
  @observable
  street: string = '';

  @observable
  city: string = '';

  @observable
  postCode: string = '';

  @observable
  houseNumber: string = '';

  @observable
  apartmentNumber: string = '';

  @action public setStreet(newStreet: string) {
    this.street = newStreet;
  }

  @action public setCity(newCity: string) {
    this.city = newCity;
  }

  @action public setPostCode(newPostCode: string) {
    this.postCode = newPostCode;
  }

  @action public setHouseNumber(newHouseNumber: string) {
    this.houseNumber = newHouseNumber;
  }

  @action public setApartmentNumber(newApartmentNumber: string) {
    this.apartmentNumber = newApartmentNumber;
  }
}