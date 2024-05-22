import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../../interfaces';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private productsService: ProductsService
  ) { }
  ngOnInit() {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 }) // Corrected URL
      .subscribe((products: Products) => {
        console.log(products.items);
      });
  }
}

