import { Component, OnInit, Input } from '@angular/core';
import { Shop } from "../../shared/shop";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from "../../shared/product";


@Component({
  selector: 'app-update-product-modal',
  template: `
    <div class="modal-header">
      <button type="button" class="close" aria-label="Close" (click)="activeModal.close('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 class="modal-title">Edit {{product.name}} product</h4>
    </div>
    <div class="modal-body">
      <app-product-form [product]="product" (save)="update($event)"></app-product-form>
    </div>
  `
})
export class updateProductModal implements OnInit {
  @Input() productIndex: number;
  @Input() shop: Shop;
  @Input() product: Product;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {

  }

  update(newProduct: Product) {
    this.shop.updateProduct(this.productIndex, newProduct);
    this.activeModal.close('Close click');
  }
}
