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
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { UserService } from './services/user.service';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

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
    ProductFormComponent,
    AccessDeniedComponent,
    HomeComponent,
    ProductFilterComponent,
    ProductQuantityComponent,
    ShoppingCartComponent

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
        component: HomeComponent,
        canActivate : [AuthGuard]
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
        component: ShoppingCartComponent,
        canActivate : [AuthGuard]
      },
      {
        path:'order', 
        component: OrderComponent,
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
        canActivate : [AuthGuard, AdminAuthGuard]
      },
      
      {
        path:'admin/add-category',
        component: CategoryFormComponent,
        canActivate : [AuthGuard, AdminAuthGuard]
      },
      {
        path:'admin/categories/:id',
        component: CategoryFormComponent,
        canActivate : [AuthGuard, AdminAuthGuard]
      },
      
      {
        path:'admin/products',
        component: AdminProductComponent,
        canActivate : [AuthGuard, AdminAuthGuard]
      },
      {
        path:'admin/product-form',
        component: ProductFormComponent,
        canActivate : [AuthGuard, AdminAuthGuard]
      },
      {
        path:'admin/product-form/:id',
        component: ProductFormComponent,
        canActivate : [AuthGuard, AdminAuthGuard]
      },
      {
        path:'admin/orders',
        component: OrderComponent,
        canActivate : [AuthGuard, AdminAuthGuard]
      },

      {
        path:'access-denied',
        component: AccessDeniedComponent
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
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
