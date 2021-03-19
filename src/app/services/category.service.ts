import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit{
  _categories: Category[] = [];
  readonly CATEGORY_ROOT_URL = "http://localhost:8080/api/category/"

  constructor(private http: HttpClient) {
   }

  ngOnInit() {
    this.getCategories().subscribe(categories => this._categories = categories)
  } 

  get categories() {
    return this._categories;
  }

  getCategory(id: number) {
    return this.http.get<Category>(this.CATEGORY_ROOT_URL + id);
  } 
   
  getCategories() {
    return this.http.get<Category[]>(this.CATEGORY_ROOT_URL + 'list');
  }

  addCategory(body: any){
    this.http.post(this.CATEGORY_ROOT_URL + 'add', body).subscribe();
  }

  updateCategory(id: number, body: any) {
   this.http.put(this.CATEGORY_ROOT_URL + 'update/'+ id, body).subscribe();
  }
  
  deleteCategory(id: number) {
    return this.http.delete(this.CATEGORY_ROOT_URL + 'delete/'+ id);
  }
}
