import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './views/product-detail.component';
import { ProductComponent } from './views/product.component';

const routes: Routes = [
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: '', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
