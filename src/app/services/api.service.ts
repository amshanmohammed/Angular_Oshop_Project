import { PRODUCTS_API_RESPONSE, Product } from './../Models/app.model';
import { Observable, Subject } from 'rxjs';
import { environment } from './../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  dataStream= new Subject<any>()
  requestLogin(value: any) {
    return this.http.post(`${environment.api}/auth/login`, value);
  }
  requestProducts(): Observable<PRODUCTS_API_RESPONSE> {
    return this.http.get(`${environment.api}/products`) as any;
  }
  requestProductDetailsById(id:any):Observable<Product>{
    return this.http.get(`${environment.api}/products/${id}`) as any;
  }
}
