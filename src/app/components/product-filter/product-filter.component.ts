import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  @Input('category') category:any;
  
  categories:any;

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe(data=> 
      this.categories = data
      )
   }

  ngOnInit(): void {
  }

}
