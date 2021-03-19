import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  
  dataSource:any;

  displayedColumns: string[] = ['imageUrl','productName','price','action'];


  constructor(private productService: ProductsService) {
    this.productService.getProducts()
    .subscribe(products => {
      this.dataSource = new MatTableDataSource<Product>(products);
    
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
   }
  
  deleteProduct(id:number) {
      this.productService.deleteProduct(id).subscribe(response =>{ 
        console.log(response);
        this.ngOnInit();
      });
  } 


  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(products => {
      this.dataSource = new MatTableDataSource<Product>(products);
    
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


}
