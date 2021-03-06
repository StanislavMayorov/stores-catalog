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
import { AddProductModalComponent } from './shop-detail/add-product-modal/add-product-modal.component';
import { AddShopComponent } from './add-shop/add-shop.component';
import { ShopFormComponent } from './shared/shop-form/shop-form.component';
import { UpdateShopModalComponent } from './shop-detail/update-shop-modal/update-shop-modal.component';
import { DragulaModule } from "ng2-dragula/ng2-dragula";
import { AgmCoreModule } from 'angular2-google-maps/core';
import { GoogleMapsComponent } from './shop-list/google-maps/google-maps.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShopListComponent,
    ShopDetailComponent,
    updateProductModal,
    ProductFormComponent,
    AddProductModalComponent,
    AddShopComponent,
    ShopFormComponent,
    UpdateShopModalComponent,
    GoogleMapsComponent,
    NotFoundComponent
  ],
  entryComponents: [
    updateProductModal,
    AddProductModalComponent,
    UpdateShopModalComponent
  ],
  imports: [
    DragulaModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAGb1MTX-euG06undWOO9WrTujXSd9SJMI'
    })
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
