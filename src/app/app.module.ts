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
import { ManageProductsComponent } from './components/admin/manage-products/manage-products.component';
import { OrderComponent } from './components/admin/order/order.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminProductComponent } from './components/admin/product/product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    PageerrorComponent,
    NavbarComponent,
    AdminProductComponent,
    RegisterComponent

  ],
  imports: [
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
        path:'refresh', 
        component: NavbarComponent
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
        component: ProductsComponent
      },
      {
        path:'my-orders', 
        component: MyOrderComponent
      },


      {
        path:'admin/manage-products',
        component: ManageProductsComponent
      },
      {
        path:'admin/products',
        component: AdminProductComponent
      },
      {
        path:'admin/orders',
        component: OrderComponent
      },


      {
        path:'**', 
        component: PageerrorComponent
      },
    ])
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass:HttpInterceptorService,
      multi:true},
    ProductsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
