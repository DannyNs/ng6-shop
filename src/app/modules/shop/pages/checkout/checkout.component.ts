import { Component, OnInit } from '@angular/core';
import { ShopStoreAwareInterface } from '../../utils/shop-store-aware.interface';
import { ShopStore } from '../../store';
import { Payment } from '../../store/payment';
import DeliveryOption from '../../store/delivery-option';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements ShopStoreAwareInterface, OnInit {
  shopStore: ShopStore;
  paymentOptions: any = Payment;
  deliveryOptions: any = DeliveryOption;
  checkoutForm: FormGroup;

  get firstName() {
    return this.checkoutForm.get('firstName');
  }

  get lastName() {
    return this.checkoutForm.get('lastName');
  }

  get email() {
    return this.checkoutForm.get('email');
  }

  get paymentSelect() {
    return this.checkoutForm.get('paymentSelect');
  }

  get deliveryOptionSelect() {
    return this.checkoutForm.get('deliveryOptionSelect');
  }

  get postCode() {
    return this.checkoutForm.get('postCode');
  }

  get city() {
    return this.checkoutForm.get('city');
  }

  get street() {
    return this.checkoutForm.get('street');
  }

  get houseNumber() {
    return this.checkoutForm.get('houseNumber');
  }

  get apartmentNumber() {
    return this.checkoutForm.get('apartmentNumber');
  }

  constructor(
    private router: Router,
    newShopStore: ShopStore
  ) {
    this.shopStore = newShopStore;
  }

  ngOnInit() {
    this.checkoutForm = new FormGroup({
      firstName: new FormControl(this.shopStore.checkout.firstName, [
        Validators.required,
      ]),
      lastName: new FormControl(this.shopStore.checkout.lastName, [
        Validators.required,
      ]),
      email: new FormControl(this.shopStore.checkout.email, [
        Validators.required,
        Validators.email,
      ]),
      paymentSelect: new FormControl(this.shopStore.checkout.payment, [
        Validators.required,
      ]),
      deliveryOptionSelect: new FormControl(this.shopStore.checkout.deliveryOption, [
        Validators.required,
      ]),
      postCode: new FormControl(this.shopStore.checkout.address.postCode, [
        Validators.required,
        Validators.pattern('^[0-9]{2}\-[0-9]{3}$')
      ]),
      city: new FormControl(this.shopStore.checkout.address.city, [
        Validators.required,
      ]),
      street: new FormControl(this.shopStore.checkout.address.city, [
        Validators.required,
      ]),
      houseNumber: new FormControl(this.shopStore.checkout.address.houseNumber, [
        Validators.required,
      ]),
      apartmentNumber: new FormControl(this.shopStore.checkout.address.apartmentNumber),
    });
  }

  validateAndProceed(): void {
    if (!this.checkoutForm.valid) {
      Object.keys(this.checkoutForm.controls).forEach(field => {
        const control = this.checkoutForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }

    this.router.navigate(['/shop/summary']);
  }
}
