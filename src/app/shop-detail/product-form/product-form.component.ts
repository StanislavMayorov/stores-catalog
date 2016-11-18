import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../../shared/product";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent implements OnInit {
  @Input() product: Product;
  @Output() submit = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.product = Object.assign(this.product);
    //this.save = new EventEmitter();
  }

  onSubmit(form: NgForm) {
    debugger;
    if (form.valid) {
      var newElement = new Product(form.value.name, form.value.description);
      this.submit.emit(newElement)
    }

  }

  onSave() {
    debugger;
    this.product.name = 'Changed';
    this.submit.emit(this.product);
  }

}
