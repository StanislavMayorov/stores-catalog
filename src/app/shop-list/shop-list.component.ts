import { Component, OnInit } from '@angular/core';
import { ShopService } from "../shared/shope.service";
import { Shop } from "../shared/shop";
import { DragulaService } from "ng2-dragula/components/dragula.provider";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.sass'],
  providers: [DragulaService]
})
export class ShopListComponent implements OnInit {
  shops: Array<Shop>;

  constructor(private shopService: ShopService, private dragulaService: DragulaService) {
    dragulaService.setOptions('shops-bag', {
      removeOnSpill: false,
    });
    dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value[1], value[2], value[3]);
    });
  }

  ngOnInit() {
    this.shops = this.shopService.getShops()
  }

  onDropModel(el, target, source) {
    this.shopService.updateSerialsNumber(this.shops);
    this.shops = this.shopService.getShops();
  }

}
