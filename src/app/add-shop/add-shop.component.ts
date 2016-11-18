import { Component, OnInit } from '@angular/core';
import { ShopService } from "../shared/shope.service";
import { Shop, Time } from "../shared/shop";
import { Router } from "@angular/router";


@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.sass']
})
export class AddShopComponent implements OnInit {
  shop: Shop;

  constructor(private shopService: ShopService, private router: Router) {
  }

  ngOnInit() {
    let startOpeningHoursBatareiki = new Time(9, 0);
    let finishOpeningHoursBatareiki = new Time(18, 0);
    this.shop = new Shop('', startOpeningHoursBatareiki,
      finishOpeningHoursBatareiki, '');
  }

  add(newShop: Shop) {
    this.shopService.setShop(newShop);
    this.router.navigateByUrl("/");

  }

}
