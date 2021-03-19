import { Category } from "./category";

export class Product{
    
    constructor(
    public productId?:number,
    public productName?:string,
    public category?:string,
    public price?:number,
    public imageUrl?:string,
    ){
    }
}