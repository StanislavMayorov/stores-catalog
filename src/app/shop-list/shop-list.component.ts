import { Component, OnInit } from '@angular/core';
import { ShopService } from "../shared/shope.service";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.sass']
})
export class ShopListComponent implements OnInit {

  constructor(private shopService: ShopService) {
  }

  ngOnInit() {
  }

}
