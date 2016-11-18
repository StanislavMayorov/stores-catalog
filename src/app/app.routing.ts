import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopListComponent } from "./shop-list/shop-list.component";
import { ShopDetailComponent } from "./shop-detail/shop-detail.component";
import { AddShopComponent } from "./add-shop/add-shop.component";


const appRoutes: Routes = <Routes>[
  {
    path: '',
    component: ShopListComponent
  },
  {
    path: 'shop/:id',
    component: ShopDetailComponent
  },
  {
    path: 'add-shop',
    component: AddShopComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
