import { Product } from "./products";

export class ShoppingCartItem {
    constructor(
        public id?: number,
        public quantity?: number,
        public product?: Product,
        public totalPrice?: number
    ) {
        totalPrice = quantity! * product!.price!
    }
}