import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = new User();

  constructor(
    private userService: UserService) { }

  register() {
    this.userService.register(this.user);
  }

  ngOnInit(): void {
  }

}
