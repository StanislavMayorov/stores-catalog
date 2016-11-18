import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from "@angular/router";
import { ShopService } from "../shared/shope.service";
import { Shop } from "../shared/shop";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.sass']
})
export class ShopDetailComponent implements OnInit {
  shop: Shop;

  constructor(private route: ActivatedRoute, private shopService: ShopService) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => params['serialNumber'])
      .subscribe((serialNumber: string) =>
        this.shop = this.shopService.getShopBySerialNumber(Number(serialNumber)));
  }

  editHandler(serialNumber: number) {
    //this.shop.updateProduct();
  }

  deleteHandler(serialNumber: number) {
    this.shop.deleteProduct(serialNumber);
  }

}
