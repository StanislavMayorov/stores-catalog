///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from "@angular/router";
import { ShopService } from "../shared/shope.service";
import { Shop } from "../shared/shop";
import 'rxjs/add/operator/switchMap';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from "../shared/product";


@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.sass']
})
export class ShopDetailComponent implements OnInit {
  shop: Shop;
  serialNumber: number;

  constructor(private route: ActivatedRoute, private shopService: ShopService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => params['serialNumber'])
      .subscribe((serialNumber: string) => {
          this.serialNumber = Number(serialNumber);
          this.updateProducts();
          //this.shop = this.shopService.getShopBySerialNumber(Number(serialNumber))
        }
      );
  }

  private updateProducts() {
    this.shop = this.shopService.getShopBySerialNumber(this.serialNumber);

  }

  editHandler(index: number) {
    const modalRef = this.modalService.open(updateProductModal);
    modalRef.componentInstance.productIndex = index;
    modalRef.componentInstance.shop = this.shop;
    modalRef.componentInstance.product = this.shop.getProducts()[index];
    modalRef.result.then(() => {
      this.updateProducts()
    })
  }

  deleteHandler(index: number) {
    this.shop.deleteProduct(index);
  }

}


@Component({
  selector: 'app-update-product-modal',
  template: `
    <div class="modal-header">
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 class="modal-title">Edit {{product.name}} product</h4>
    </div>
    <div class="modal-body">
      <app-product-form [product]="this.product" (submit)="save($event)"></app-product-form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
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
    this.product = this.shop.getProducts()[this.productIndex]
  }

  save(newProduct: Product) {
    this.shop.updateProduct(this.productIndex, newProduct);
    this.activeModal.close('Close click');
  }
}
