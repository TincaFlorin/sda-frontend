import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string ='';
  password: string ='';
  
  constructor(
    private authService:AuthService,
    private router: Router,
    
    ) { 
    }

  ngOnInit(): void {

  }
  login(){
    console.log(this.username+' : '+this.password);
    this.authService.login(this.username, this.password)
    .subscribe(
      data => {
        console.log("Data:" + data);
        localStorage.setItem('username', this.username);
        for(let item of data.authorityList) this.authService.roles.push(item);
        this.router.navigate(["/"]); 
      },
      error => {
        console.log("error");
      }
    );
  }
}
