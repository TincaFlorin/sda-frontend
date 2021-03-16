import { Order } from "./order";
import { ShoppingCart } from "./shopping-cart";

export class User {
    constructor(
        public id?: number,
        public username?: string,
        public password?: string,
        public shoppingCart?: ShoppingCart,
        public orders?: Order[]
    ) {    }
    
}