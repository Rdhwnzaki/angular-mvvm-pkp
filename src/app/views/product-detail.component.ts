import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class ProductDetailComponent implements OnInit {
  product: any = null;
  loading: boolean = true;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    console.log('ProductDetailComponent initialized');
    const productId = this.route.snapshot.paramMap.get('id');
    console.log('Product ID:', productId);

    if (productId) {
      this.getProductDetail(productId);
    }
  }

  getProductDetail(id: string): void {
    console.log('Fetching product details for ID:', id);
    this.productService.getProductById(id).subscribe({
      next: (response: any) => {
        console.log('Product details received:', response);
        this.product = response;
        this.loading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.errorMessage = 'Gagal memuat detail produk. Silakan coba lagi.';
        this.loading = false;
      },
    });
  }
}
