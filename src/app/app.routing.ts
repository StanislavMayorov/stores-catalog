import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopListComponent } from "./shop-list/shop-list.component";
import { ShopDetailComponent } from "./shop-detail/shop-detail.component";
import { AddShopComponent } from "./add-shop/add-shop.component";
import { NotFoundComponent } from "./not-found/not-found.component";


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
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
