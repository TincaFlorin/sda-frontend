import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent implements OnInit {

  @Input('product') product: any;
  @Input('cart') cart: any;
  item: any;
  isItemAdded: any;
  
  
   constructor(private cartService: ShoppingCartService) {
       if(this.item) this.isItemAdded = true;

  }

  async ngOnInit() {
    this.cartService.getTotalItemCount().subscribe(data => this.cartService.subject.next(data))
    await this.cartService.getItemByProductId(this.product.id).subscribe(item => {
      this.item = item;
    });
  }

  async addToCart() {
    await this.cartService.addToCart(this.product).subscribe(() =>{
      this.ngOnInit()
    }
    );
  }

  incrementProductQuantity() {
    this.cartService.incrementProductQuantity(this.product).subscribe(()=>{
    this.ngOnInit();
  }
    );    
  }

  decrementProductQuantity() {
    this.cartService.decrementProductQuantity(this.product).subscribe(() =>{
      this.cartService.getItems().pipe(take(1)).subscribe(data => this.cartService.cartSubject.next(data));
      this.ngOnInit();
    }
    );
  }

}