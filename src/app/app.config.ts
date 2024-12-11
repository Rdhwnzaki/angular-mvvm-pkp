import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { ProductComponent } from './views/product.component';
import { ProductDetailComponent } from './views/product-detail.component';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full',
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};
