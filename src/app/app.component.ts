import { Component } from '@angular/core';
import { ProductComponent } from './views/product.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent],
  template: '<app-product></app-product>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: any[] = [];
  searchQuery: string = '';
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private productService: ProductService) {}

  searchProducts() {
    if (this.searchQuery.trim()) {
      this.loading = true;
      this.errorMessage = '';

      this.productService.searchProducts(this.searchQuery).subscribe({
        next: (response) => {
          this.products = response.products;
          this.loading = false;
        },
        error: (error) => {
          this.errorMessage = 'Error fetching products. Please try again.';
          this.loading = false;
        },
      });
    } else {
      this.products = [];
    }
  }
}
