///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute, Router } from "@angular/router";
import { ShopService } from "../shared/shope.service";
import { Shop } from "../shared/shop";
import 'rxjs/add/operator/switchMap';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from "../shared/product";
import { updateProductModal } from "./update-product-modal/update-product-modal.component";
import { AddProductModalComponent } from "./add-product-modal/add-product-modal.component";
import { UpdateShopModalComponent } from "./update-shop-modal/update-shop-modal.component";
import { isUndefined } from "util";


@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.sass']
})
export class ShopDetailComponent implements OnInit {
  shop: Shop;
  serialNumber: number;

  constructor(private route: ActivatedRoute, private shopService: ShopService,
              private modalService: NgbModal, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.serialNumber = +params['id'];
      this.updateProducts();
    });
  }

  private updateProducts() {
    this.shop = this.shopService.getShopBySerialNumber(this.serialNumber);
    if (isUndefined(this.shop)) {
      this.router.navigate(['/not-found']);
    }
  }

  editProductHandler(index: number) {
    const modalRef = this.modalService.open(updateProductModal);
    modalRef.componentInstance.productIndex = index;
    modalRef.componentInstance.shop = this.shop;
    modalRef.componentInstance.product = this.shop.getProducts()[index];
    modalRef.result.then(() => {
      this.updateProducts()
    })
  }

  deleteProductHandler(index: number) {
    const isConfirm = confirm(`Are you sure to delete ${this.shop.getProducts()[index].name}?`);
    if (isConfirm) {
      this.shop.deleteProduct(index);
    }

  }

  addProductHandler() {
    const modalRef = this.modalService.open(AddProductModalComponent);
    modalRef.componentInstance.shop = this.shop;
    modalRef.componentInstance.product = new Product('', '');
    modalRef.result.then(() => {
      this.updateProducts()
    })
  }

  editShopHandler() {
    const modalRef = this.modalService.open(UpdateShopModalComponent);
    modalRef.componentInstance.shop = this.shop;
    modalRef.componentInstance.serialNumber = this.serialNumber;
    modalRef.result.then(() => {
      this.router.navigate(['/shop', this.serialNumber]);
    })

  }

}

