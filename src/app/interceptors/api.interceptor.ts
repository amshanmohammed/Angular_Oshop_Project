import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() {}
  get userDetails() {
    return JSON.parse(localStorage.getItem('userDetails') as string);
  }
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let finalrequest;
    if (this.userDetails && this.userDetails.token) {
      const header = new HttpHeaders({
        Authorization: 'bearer ' + this.userDetails.token,
      });
      const clone = request.clone({ headers: header });
      finalrequest = next.handle(clone).pipe(
        catchError(value => {
          if(value.status ===404){
            alert('invalid api call')
          }
          return value
        })
      );
    } else {
      finalrequest = next.handle(request);
    }
    return finalrequest as any;
  }
}
