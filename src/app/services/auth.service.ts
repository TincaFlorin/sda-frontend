import { BasicAuthResponseModel } from '../models/BasicAuthResponseModel';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  isLoggedInsSubject = new Subject<boolean>();
  _authString: string ='';
  roles: string[] = [];
  usernameSubject = new Subject<string>();
  isAdminSubject = new Subject<boolean>();

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
    return this.isLoggedInsSubject.asObservable();
  }

  getUsername(): Observable<string> {
    return this.usernameSubject.asObservable();
  }
  

  private saveAuthInLocalStorage(){
    console.log("Saved:" + this._authString);
    localStorage.setItem('auth', this._authString);
  }


  get authFromLocalStorage(){
    let auth = localStorage.getItem('auth') || '';
    console.log('get auth: ' +auth);  
    return auth;
  }


  logout() {
    console.log(this.roles);
    this.roles = [];
    this._authString = '';
    localStorage.removeItem('username');
    localStorage.removeItem('auth');
    localStorage.setItem('roles', JSON.stringify(this.roles));
    this.isLoggedInsSubject.next(false);
    this.isAdminSubject.next(false);
  }

  get isAdmin() {
    return this.isAdminSubject.asObservable();      
  }
}
