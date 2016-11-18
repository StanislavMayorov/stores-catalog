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
  @Output() save = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      let newElement = new Product(form.value.name, form.value.description);
      this.save.emit(newElement)
    }

  }

}
