import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const tokenString = localStorage.getItem('access_token');

    const url = request.url;

    if(tokenString && !url.endsWith('/oauth/token')){
      console.log("Tem o token");
      console.log(tokenString);
      const token = JSON.parse(tokenString);
      const jwt = token.access_token;
      console.log("jwt = " + jwt);
      request = request.clone({
        setHeaders : {
          Authorization: 'Bearer ' + jwt
        }
      })
    }
    
    return next.handle(request);
  }
}
