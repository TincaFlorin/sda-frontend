import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {


  readonly ROOT_URL = "http://localhost:8080/api/cart/";

  subject = new Subject();
  cartSubject = new Subject();

  constructor(private http:HttpClient) { }

  getItems() {
    return this.http.get(this.ROOT_URL + 'items').pipe(map(response => response));
  }



  getItemByProductId(id: number) {
    return this.http.get(this.ROOT_URL + 'get-by-product/' + id).pipe(map(response => response));
  }

  addToCart(product: Product) {
    return this.http.post(this.ROOT_URL + 'add', product).pipe(map(response => response))
  }

  incrementProductQuantity(product: Product) {
    return this.http.post(this.ROOT_URL+ 'increment', product).pipe(map(response => response));
  }

  decrementProductQuantity(product: Product) {
    return this.http.post(this.ROOT_URL + 'decrement', product).pipe(map(response => response));
  }

  getTotalItemCount() {
    return this.http.get(this.ROOT_URL + 'total-products');
  }

  get totalItemCount() {
    return this.subject.asObservable();
  }

  get cart() {
    return this.cartSubject.asObservable();
  }
}
