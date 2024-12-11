import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [ProductService],
})
export class AppModule {}
