import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = new User();
  usernameTakenError:string  = ''

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  register() {
    console.log(this.user)
    this.userService.registerUser(this.user).subscribe(
      response => {
        console.log(response)
        this.router.navigate(['/login']);
    },
      error => {
        if(error.status === 500)
          this.usernameTakenError = "Username already taken."
      }
    );
  }

  ngOnInit(): void {
  }
  

}
