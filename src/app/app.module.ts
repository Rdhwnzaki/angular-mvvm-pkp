import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ProductService } from './services/product.service';
import { ProductViewModel } from './viewmodels/product.viewmodel';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule], // Import only the necessary modules
  providers: [ProductService, ProductViewModel],
  bootstrap: [AppComponent],
})
export class AppModule {}
