import { Injectable } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductViewModel {
  constructor(private productService: ProductService) {}

  getAllProducts(): Observable<Product[]> {
    return this.productService.getAllProducts().pipe(
      catchError((error) => {
        console.error('Error fetching all products:', error);
        return throwError(() => new Error('Failed to fetch products.'));
      })
    );
  }

  getProductById(id: string): Observable<Product> {
    return this.productService.getProductById(id).pipe(
      catchError((error) => {
        console.error(`Error fetching product with ID ${id}:`, error);
        return throwError(() => new Error('Failed to fetch product.'));
      })
    );
  }

  searchProducts(query: string): Observable<Product[]> {
    return this.productService.searchProducts(query).pipe(
      catchError((error) => {
        console.error(
          `Error searching for products with query "${query}":`,
          error
        );
        return throwError(() => new Error('Failed to search products.'));
      })
    );
  }
}
