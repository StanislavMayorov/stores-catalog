import {Product} from "./product";
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time-struct';

export class Shop {
  private products: Array<Product>;

  constructor(public name: string, public startOpeningHours: NgbTimeStruct,
              public finishOpeningHours: NgbTimeStruct) {
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
