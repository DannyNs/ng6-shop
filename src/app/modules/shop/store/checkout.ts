import { observable, action } from 'mobx-angular';
import DeliveryOption from './delivery-option';
import { Payment } from './payment';
import { Address } from './address';

export class Checkout {
  @observable
  firstName: string = '';
  
  @observable
  lastName: string = '';

  @observable
  email: string = '';
  
  @observable
  address: Address = new Address();

  @observable
  payment: Payment = null;

  @observable
  deliveryOption: DeliveryOption = null;

  @action public setFirstName(newFirstName: string) {
    this.firstName = newFirstName;
  }

  @action public setLastName(newLastName: string) {
    this.lastName = newLastName;
  }
  
  @action public setEmail(newEmail: string) {
    this.email = newEmail;
  }

  @action public setPayment(newPayment: Payment) {
    this.payment = newPayment;
  }

  @action public setDeliveryOption(newDeliveryOption: DeliveryOption) {
    this.deliveryOption = newDeliveryOption;
  }
}