import { AuthService } from 'src/app/services/auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }
      
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let auth = <string>localStorage.getItem('auth')
    console.log('Interceptor called: '+ auth);
        if(auth !== undefined){
          req = req.clone({
            setHeaders:{ 
              Authorization: auth 
            }});
          }
        return next.handle(req);
  }
}

