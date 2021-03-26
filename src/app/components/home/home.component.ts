import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any;
  category: any;
  filteredProducts: any;
  cart:any;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private cartService: ShoppingCartService
    ) {
      this.cartService.getItems().subscribe(data => this.cart = data);

   }

  ngOnInit(): void {
    this.populate();
    console.log(this.filteredProducts)
  }

  private populate() {
    this.productService.getProducts().pipe(switchMap(data=> {
        console.log(data)
        this.products = data;
        return this.route.queryParamMap;
      }))
      .subscribe(params => {
        this.category = params.get('category');
        console.log(this.category)
        this.applyFilter();
    })
  }

  private applyFilter() {
    this.filteredProducts = (this.category)? 
                            this.products.filter((p:any) => p?.category?.name === this.category) : 
                            this.products;
  }


}
