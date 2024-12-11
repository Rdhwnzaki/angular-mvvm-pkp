import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  searchQuery: string = '';
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.loading = true;
    this.errorMessage = '';
    this.productService.getAllProducts().subscribe({
      next: (response: any) => {
        this.products = response.products;
        this.loading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.errorMessage = 'Gagal memuat produk awal. Silakan coba lagi.';
        this.loading = false;
      },
    });
  }

  searchProducts(): void {
    if (!this.searchQuery) {
      this.getProducts();
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.productService.searchProducts(this.searchQuery).subscribe({
      next: (response: any) => {
        this.products = response.products;
        this.loading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.errorMessage = 'Pencarian gagal. Silakan coba lagi.';
        this.loading = false;
      },
    });
  }

  goToProductDetail(productId: string): void {
    this.router
      .navigate(['/product', productId])
      .then(() => {
        console.log('Navigation successful');
      })
      .catch((err) => {
        console.error('Navigation error:', err);
      });
  }
}
