import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopListComponent } from "./shop-list/shop-list.component";
import { ShopDetailComponent } from "./shop-detail/shop-detail.component";


const appRoutes: Routes = <Routes>[
  {
    path: '',
    component: ShopListComponent
  },
  {
    path: 'shop/:serialNumber',
    component: ShopDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
