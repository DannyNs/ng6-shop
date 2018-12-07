enum DeliveryOption {
  POST_OFFICE = 'Post office',
  EXPRESS_DELIVERY = 'Express delivery',
}

namespace DeliveryOption {
  export function getPrice(deliveryOption: DeliveryOption) {
      switch (deliveryOption) {
        case DeliveryOption.POST_OFFICE:
          return 10.99;
        case DeliveryOption.EXPRESS_DELIVERY:
          return 49.99;
      }
  }
}

export default DeliveryOption;