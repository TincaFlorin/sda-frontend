import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories :Category[] = [];
  
  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories)
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories)
    let auth = localStorage.getItem('auth');
    console.log(auth)
  }

  deleteCategory(id: any) {
    this.categoryService.deleteCategory(id).subscribe(data =>
      this.ngOnInit()
    )
  }

}
