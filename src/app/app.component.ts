import { Component } from '@angular/core';
import { ProductComponent } from './views/product.component';

@Component({
  selector: 'app-root',
  standalone: true, // Mark as standalone
  imports: [ProductComponent], // Import the ProductComponent
  template: '<app-product></app-product>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
