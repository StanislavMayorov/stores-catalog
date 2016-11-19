import { Component, OnInit, Input } from '@angular/core';
import { Shop } from "../../shared/shop";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ShopService } from "../../shared/shope.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-update-shop-modal',
  template: `
    <div class="modal-header">
      <button type="button" class="close" aria-label="Close" (click)="activeModal.close('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 class="modal-title">Edit {{shop.name}}</h4>
    </div>
    <div class="modal-body">
      <app-shop-form [shop]="shop" (save)="update($event)"></app-shop-form>
    </div>
  `,
  styles: []
})
export class UpdateShopModalComponent implements OnInit {
  @Input() shop: Shop;
  @Input() serialNumber: number;

  constructor(private shopService: ShopService, private router: Router,
              public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  update(changedShop: Shop) {
    this.shopService.updateShop(this.serialNumber - 1, changedShop);
    this.activeModal.close('Close click');
    this.router.navigate(['/shop', this.serialNumber]);
  }


}
