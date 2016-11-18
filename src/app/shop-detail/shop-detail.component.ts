///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from "@angular/router";
import { ShopService } from "../shared/shope.service";
import { Shop } from "../shared/shop";
import 'rxjs/add/operator/switchMap';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from "../shared/product";
import { updateProductModal } from "./update-product-modal/update-product-modal.component";
import { AddProductModalComponent } from "./add-product-modal/add-product-modal.component";


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
    const isConfirm = confirm(`Are you sure to delete ${this.shop.getProducts()[index].name}?`);
    if (isConfirm) {
      this.shop.deleteProduct(index);
    }

  }

  addHandler(){
    const modalRef = this.modalService.open(AddProductModalComponent);
    modalRef.componentInstance.shop = this.shop;
    modalRef.componentInstance.product = new Product('','');
    modalRef.result.then(() => {
      this.updateProducts()
    })
  }

}

