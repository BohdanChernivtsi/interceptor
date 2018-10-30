import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorServiceService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = !request.url.match(/\/public/) ? {'Authorization': 'Bearer ' + Math.random()} : {};
    const newRequest = request.clone({
      setHeaders: headers
      // ,
      // url: environment.API_URL + request.url
    });
    return next.handle(newRequest).pipe(
      catchError(error => {
        console.log("Error " + error.status);
        return throwError(error);
      })
    );
  }
}


@Injectable()
export class APIInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiReq = req.clone({ url: `https://jsonplaceholder.typicode.com${req.url}` });
    return next.handle(apiReq).pipe(
      catchError(error => {
        console.log("Error " + error.status);
        return throwError(error);
      }))
  }
}