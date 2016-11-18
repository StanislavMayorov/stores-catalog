import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Product } from "../product";
import { NgForm } from "@angular/forms";
import { Shop } from "../shop";

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.sass']
})
export class ShopFormComponent implements OnInit {
  @Input() shop: Shop;
  @Output() save = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    debugger;
    if (form.valid) {
      let newElement = new Shop(form.value.name, form.value.startOpeningHours,
        form.value.finishOpeningHours, form.value.address);
      this.save.emit(newElement)
    }
  }

}
