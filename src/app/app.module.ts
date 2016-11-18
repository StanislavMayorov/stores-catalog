import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { routing } from "./app.routing";
import { ShopService } from "./shared/shope.service";
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { ProductFormComponent } from './shop-detail/product-form/product-form.component';
import { updateProductModal } from "./shop-detail/update-product-modal/update-product-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShopListComponent,
    ShopDetailComponent,
    updateProductModal,
    ProductFormComponent
  ],
  entryComponents: [updateProductModal],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
