import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  readonly PRODUCT_ROOT_URL = "http://localhost:8080/api/product/";

  constructor(
    private http:HttpClient,
    private route: ActivatedRoute
    ){ }
  
  
  getProducts():Observable <Product[]>{
    return this.http.get<Product[]>(this.PRODUCT_ROOT_URL + 'list')
    .pipe(
      map(response =>response)
    )
  }

  getProductById(id: number) {
    return this.http.get<Product>(this.PRODUCT_ROOT_URL + id);
  }

  addProduct(body: Product) {
    this.http.post(this.PRODUCT_ROOT_URL+ 'add', body).subscribe();
  }
  
  updateProduct(id: number, body: Product) {
    this.http.put(this.PRODUCT_ROOT_URL + 'update/' + id, body).subscribe();
  }

  deleteProduct(id: number) {
    return this.http.delete(this.PRODUCT_ROOT_URL + 'delete/'+ id).pipe(map(response => response));
  }

}
