import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ProductService } from '../services/product.service'; // Import your service

@Component({
  selector: 'app-product',
  standalone: true, // Mark as a standalone component
  imports: [CommonModule], // Import CommonModule to use ngFor
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: any[] = []; // Initialize products as an empty array

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe((response: any) => {
      this.products = response.products; // Assign the array from the response
    });
  }
}
