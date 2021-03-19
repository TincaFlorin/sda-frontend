import { BasicAuthResponseModel } from '../models/BasicAuthResponseModel';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private subject = new Subject<boolean>();
  _authString: string ='';
  _isLoggedIn: boolean = false;
  roles: string[] = [];
  

  constructor(private http: HttpClient) { 
  }

  login(username:string, password: string) : Observable<BasicAuthResponseModel>{
    console.log("AuthServiceLogin "+ username +":"+ password);
    this._authString = 'Basic ' + window.btoa(username + ':' + password);

    this.saveAuthInLocalStorage();

    this._isLoggedIn = true;
    this.subject.next(this._isLoggedIn);

    console.log("Is Logged in:" + this._isLoggedIn)

    return this.http.get<BasicAuthResponseModel>("http://localhost:8080/api/login",{ headers: { 'X-Requested-With': 'XMLHttpRequest'}})
    .pipe(map(response => response));
  }


  isLoggedIn(): Observable<boolean> {
    return this.subject.asObservable();
  }
  

  get username() {
    return <string>localStorage.getItem('username');
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
    this._isLoggedIn = false;
  }
}
