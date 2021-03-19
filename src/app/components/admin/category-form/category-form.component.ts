import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  category: Category = {};
  private id = this.route.snapshot.params.id;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
    ) {
   }

  ngOnInit(): void {
    if(this.id) this.categoryService.getCategory(this.id)
        .subscribe(category => this.category = category);
  }

  
  addCategory(body: Category) {
    if(this.id) this.categoryService.updateCategory(this.id, body);
    
    else this.categoryService.addCategory(body);

    this.router.navigate(['/admin/categories'])
  }

  

}
