import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from "@angular/router";
import { ShopService } from "../shared/shope.service";
import { Shop } from "../shared/shop";
import 'rxjs/add/operator/switchMap';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.sass']
})
export class ShopDetailComponent implements OnInit {
  shop: Shop;

  constructor(private route: ActivatedRoute, private shopService: ShopService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => params['serialNumber'])
      .subscribe((serialNumber: string) =>
        this.shop = this.shopService.getShopBySerialNumber(Number(serialNumber)));
  }

  editHandler(serialNumber: number) {
    //this.shop.updateProduct();
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World'

  }

  deleteHandler(serialNumber: number) {
    this.shop.deleteProduct(serialNumber);
  }

}


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 class="modal-title">Hi there!</h4>
    </div>
    <div class="modal-body">
      <p>Hello!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}
