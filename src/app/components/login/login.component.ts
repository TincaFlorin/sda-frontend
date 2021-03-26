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
  incorrectUsernameOrPassword = '';
  
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
        console.log("Data:" + data.username);
        this.authService.subject.next(true)

        this.authService.usernameSubject.next(data.username)
        
        for(let item of data.authorityList) this.authService.roles.push(item);
        localStorage.setItem('roles', JSON.stringify(this.authService.roles))
        this.router.navigate(["/"]); 
      },
      error => {
        if(error.status === 401) this.incorrectUsernameOrPassword = "Invalid username or password."        
      }
    );
  }
}
