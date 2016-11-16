import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopListComponent} from "./shop-list/shop-list.component";


const appRoutes: Routes = <Routes>[
  {
    path: '',
    component: ShopListComponent
  }
];




export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
