import { Product } from './../../models/products';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Product[] | undefined;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts();
  }

}
