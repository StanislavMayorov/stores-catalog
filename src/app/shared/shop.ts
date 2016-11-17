import {Product} from "./product";
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time-struct';

export class Shop {
  private products: Array<Product>;

  constructor(public name: string, public startOpeningHours: Time,
              public finishOpeningHours: Time) {
    this.products = [];
  }

  getProducts() {
    return this.products.slice();
  }

  addProduct(newProduct) {
    this.products.push(newProduct)
  }

  updateProduct() {

  }

}

export class Time implements NgbTimeStruct {
  second: number;

  constructor(public hour: number, public minute: number) {
    this.second = 0;
  }

}
