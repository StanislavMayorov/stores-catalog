import {Product} from "./product";
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time-struct';

export class Shop {
  private products: Array<Product>;
  serialNumber: number;

  constructor(public name: string, public startOpeningHours: Time,
              public finishOpeningHours: Time, public address: string) {
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

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

}

export class Time implements NgbTimeStruct {
  second: number;

  constructor(public hour: number, public minute: number) {
    this.second = 0;
  }

  toString() {
    var date = new Date();
    date.setHours(this.hour, this.minute, this.second);
    return date.toTimeString().slice(0, 5);
  }

}
