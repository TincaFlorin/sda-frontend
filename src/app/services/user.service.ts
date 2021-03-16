import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usernameTakenError = '';

  readonly ROOT_URL = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  register(body: User) {
    this.http.post(this.ROOT_URL+'/api/user/add', body).subscribe( data => {
      },
      error => {
        if(error.status == 500) {
          alert("Username already taken.")
        }
      }
    )
  }
}
