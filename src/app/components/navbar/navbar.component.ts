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
    
    this.authService.isLoggedIn().subscribe(value => {
      this.isLoggedIn = value
    });

    this.authService.getUsername().subscribe(username =>{
      localStorage.setItem('username',username)
    }
    )
    this.username = <string>localStorage.getItem('username')

    let auth = localStorage.getItem('auth');
     
    if(auth !== null) {
      this.isLoggedIn = true;
    }   
    else{ 
      this.isLoggedIn = false; 
    }
   }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
