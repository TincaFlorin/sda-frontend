import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getProducts():Observable <Products[]>{
    return this.http.get<Products[]>("http://localhost:8080/api/products/list")
    .pipe(
      map(response =>response)
    )
  }
}
