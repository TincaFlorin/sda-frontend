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
  subject = new Subject<boolean>()
  isLoggedIn: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    ) {
    if(this.authService._authString !== null ){ this.isLoggedIn = true;}    
    else{ this.isLoggedIn = false };
    this.authService.isLoggedIn().subscribe(response => this.isLoggedIn = response);
   }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }

}
