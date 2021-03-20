import { BasicAuthResponseModel } from '../models/BasicAuthResponseModel';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  subject = new Subject<boolean>();
  _authString: string ='';
  roles: string[] = [];
  usernameSubject = new Subject<string>();
  

  constructor(private http: HttpClient) { 
  }
  

  login(username:string, password: string) : Observable<BasicAuthResponseModel>{
    console.log("AuthServiceLogin "+ username +":"+ password);
    this._authString = 'Basic ' + window.btoa(username + ':' + password);

    this.saveAuthInLocalStorage();

    return this.http.get<BasicAuthResponseModel>("http://localhost:8080/api/login",{ headers: { 'X-Requested-With': 'XMLHttpRequest'}})
    .pipe(map(response => response));
  }


  isLoggedIn(): Observable<boolean> {
    return this.subject.asObservable();
  }

  getUsername(): Observable<string> {
    return this.usernameSubject.asObservable();
  }
  

  saveAuthInLocalStorage(){
    console.log("Saved:" + this._authString);
    localStorage.setItem('auth', this._authString);
  }


  get authFromLocalStorage(){
    let auth = localStorage.getItem('auth') || '';
    console.log('get auth: ' +auth);  
    return auth;
  }


  logout() {
    this._authString = '';
    localStorage.removeItem('auth');
    this.subject.next(false);
  }
}
