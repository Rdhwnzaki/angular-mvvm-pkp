import { Injectable } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductViewModel {
  constructor(private productService: ProductService) {}

  getAllProducts(): Observable<Product[]> {
    return this.productService.getAllProducts();
  }

  getProductById(id: number): Observable<Product> {
    return this.productService.getProductById(id);
  }

  searchProducts(query: string): Observable<Product[]> {
    return this.productService.searchProducts(query);
  }
}
