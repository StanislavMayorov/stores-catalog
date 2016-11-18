// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-add-product-modal',
//   template: `
//     <p>
//       add-product-modal Works!
//     </p>
//   `,
//   styles: []
// })
// export class AddProductModalComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }

import { Component, OnInit, Input } from '@angular/core';
import { Shop } from "../../shared/shop";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from "../../shared/product";


@Component({
  selector: 'app-add-product-modal',
  template: `
    <div class="modal-header">
      <button type="button" class="close" aria-label="Close" (click)="activeModal.close('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 class="modal-title">Add new product to {{shop.name}}</h4>
    </div>
    <div class="modal-body">
      <app-product-form [product]="this.product" (submit)="save($event)"></app-product-form>
    </div>
  `
})
export class AddProductModalComponent implements OnInit {
  @Input() shop: Shop;
  @Input() product: Product;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {

  }

  save(newProduct: Product) {
    this.shop.addProduct(newProduct);
    this.activeModal.close('Close click');
  }
}
