import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  totalItemCount: any;
  cart: any;
  

  constructor(private cartService: ShoppingCartService) { 
    this.cartService.totalItemCount.subscribe(data => this.totalItemCount = data);
    this.cartService.getItems().pipe(take(1)).subscribe(data => this.cart = data);
    this.cartService.cart.subscribe((data:any) => {
      this.cart = data
    })
  }

  ngOnInit(): void {
    this.cartService.totalItemCount.subscribe(data => this.totalItemCount = data);
    this.cartService.getItems().pipe(take(1)).subscribe(data => this.cart = data);
    this.cartService.cart.subscribe((data:any) => {
      this.cart = data
    })
    this.cartService.totalItemCount.subscribe(data => this.totalItemCount = data);
  }

  clearCart() {
    this.cartService.clearCart().subscribe(data =>{
      this.ngOnInit();
      this.cartService.cartSubject.next(data);
    } );
  }

  order() {
    this.cartService.order().subscribe(data =>{
      this.ngOnInit()
      this.cartService.cartSubject.next(data);
      this.cartService.subject.next(0);
    })
  }

}
