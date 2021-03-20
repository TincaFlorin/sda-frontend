import { Order } from "./order";
import { Product } from "./products";

export class ShoppingCartItem {
    constructor(
        public id: number,
        public quantity: number,
        public order: Order,
        public product: Product
    ) {}
}