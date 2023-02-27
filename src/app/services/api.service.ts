import { PRODUCTS_API_RESPONSE, Product } from './../Models/app.model';
import { Observable, Subject } from 'rxjs';
import { environment } from './../../environment/environment';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  userDetails:any = JSON.parse(localStorage.getItem('userDetails') as string);
  dataStream = new Subject<any>();
  requestLogin(value: any) {
    return this.http.post(`${environment.api}/auth/login`, value);
  }
  requestProducts(): Observable<PRODUCTS_API_RESPONSE> {
    return this.http.get(`${environment.api}/products`, {
      headers: new HttpHeaders().append('token', this.userDetails.token),
    }) as any;
  }
  requestProductDetailsById(id: any): Observable<Product> {
    return this.http.get(`${environment.api}/products/${id}`, {
      headers: new HttpHeaders().append('token', this.userDetails.token),
    }) as any;
  }
  requestUpdateUserDetails(id: any, newdata: any): Observable<any> {
    return this.http.put(`${environment.api}/users/${id}`, newdata, {
      headers: new HttpHeaders().append('token', this.userDetails.token),
    });
  }
}
