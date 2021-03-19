import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    ) {
    
    this.authService.isLoggedIn().subscribe(
      value => {
      this.isLoggedIn = value
      this.username = this.authService.username 

    });

    let auth = localStorage.getItem('auth');
     
    if(auth !== null) {
      this.isLoggedIn = true;
    }   
    else{ 
      this.isLoggedIn = false; 
    }
    console.log(this.username);
   }

  ngOnInit(): void {
    this.username = this.authService.username 
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
