import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any = {};
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    if (productId) {
      this.getProductDetail(productId);
    }
  }

  getProductDetail(id: string): void {
    this.loading = true;
    this.productService.getProductById(id).subscribe({
      next: (response: any) => {
        this.product = response;
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error fetching product details:', err);
        this.errorMessage = 'Gagal memuat detail produk.';
        this.loading = false;
      },
    });
  }

  currentIndex = 0;

  get transformValue() {
    return `-${this.currentIndex * 100}%`;
  }

  nextImage() {
    if (this.currentIndex < this.product.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  previousImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.product.images.length - 1;
    }
  }
}
