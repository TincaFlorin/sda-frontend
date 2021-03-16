import { Products } from './../../models/products';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Products[] | undefined;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    
  }
  getProducts(){
    this.productService.getProducts().subscribe(products =>this.products = products);
  }

}
