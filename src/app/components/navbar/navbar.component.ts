import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string = '';
  count: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: ShoppingCartService
    ) {
    this.cartService.getTotalItemCount().pipe(take(1)).subscribe(data => this.count = data);  
    this.cartService.totalItemCount.subscribe(data => this.count = data);

    this.authService.isLoggedIn().subscribe(value => {
      this.isLoggedIn = value;
    });

    this.authService.getUsername().subscribe(username =>{
      this.username = username;
      }
    )
    let auth = localStorage.getItem('auth');
     
    if(auth !== null) {
      this.isLoggedIn = true;
    }   
    else{ 
      this.isLoggedIn = false; 
    }
   }

  ngOnInit(): void {
    this.username = <string>localStorage.getItem('username');
  }

  logout() {
    this.authService.usernameSubject.next('');
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
