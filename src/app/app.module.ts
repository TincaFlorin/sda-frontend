import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ProductsService } from './services/products.service';
import { AuthService } from './services/auth.service';
import { ProductsComponent } from './components/products/products.component';
import { PageerrorComponent } from './components/pageerror/pageerror.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { MyOrderComponent } from './components/my-order/my-order.component';
import { OrderComponent } from './components/admin/order/order.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminProductComponent } from './components/admin/product/admin-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategoriesComponent } from './components/admin/categories/categories.component';
import { CategoryFormComponent } from './components/admin/category-form/category-form.component';
import { AuthGuard } from './services/auth-guard.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    PageerrorComponent,
    NavbarComponent,
    AdminProductComponent,
    RegisterComponent,
    CategoryFormComponent,
    CategoriesComponent,
    ProductFormComponent

  ],
  imports: [
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'', 
        component: HomeComponent
      },
      {
        path:'login', 
        component: LoginComponent,
      },
      {
        path:'register', 
        component: RegisterComponent
      },
      {
        path:'products', 
        component: ProductsComponent
      },
      

      {
        path:'shopping-cart', 
        component: ProductsComponent,
        canActivate : [AuthGuard]
      },
      {
        path:'my-orders', 
        component: MyOrderComponent,
        canActivate : [AuthGuard]
      },


      {
        path:'admin/categories',
        component: CategoriesComponent,
        canActivate : [AuthGuard]
      },
      
      {
        path:'admin/add-category',
        component: CategoryFormComponent,
        canActivate : [AuthGuard]
      },
      {
        path:'admin/categories/:id',
        component: CategoryFormComponent,
        canActivate : [AuthGuard]
      },
      
      {
        path:'admin/products',
        component: AdminProductComponent,
        canActivate : [AuthGuard]
      },
      {
        path:'admin/product-form',
        component: ProductFormComponent,
        canActivate : [AuthGuard]
      },
      {
        path:'admin/product-form/:id',
        component: ProductFormComponent,
        canActivate : [AuthGuard]
      },
      {
        path:'admin/orders',
        component: OrderComponent,
        canActivate : [AuthGuard]
      },


      {
        path:'**', 
        component: PageerrorComponent
      },
    ]),
    NoopAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi:true
    },
    ProductsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
