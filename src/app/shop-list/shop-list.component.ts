import { Component, OnInit } from '@angular/core';
import { ShopService } from "../shared/shope.service";
import { Shop } from "../shared/shop";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.sass']
})
export class ShopListComponent implements OnInit {
  shops: Array<Shop>;

  constructor(private shopService: ShopService) {
  }

  ngOnInit() {
    this.shops = this.shopService.getShops()
  }

}
