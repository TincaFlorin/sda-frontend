import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/products';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  isAddMode: boolean;
  categories: Category[] = [];
  product: Product = {};

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService
    ) {
      this.isAddMode = !this.route.snapshot.params.id
    }

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe(data => this.categories = data);
    
    let id = this.route.snapshot.params.id;

    if(id) this.productService.getProductById(id)
                .subscribe(data => this.product = data);
  }

  addProduct() {
    console.log(this.product);
    
    let id = this.route.snapshot.params.id;
    if(!id) this.productService.addProduct(this.product);
  
    else this.productService.updateProduct(id, this.product);

    this.router.navigate(['/admin/products']);
  }

}
