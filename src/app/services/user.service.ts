import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(body: User) {
    return this.http.post<User>("http://localhost:8080/api/register", body, {headers: {skip: 'true'}});
  }
}
