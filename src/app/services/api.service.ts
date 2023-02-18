import { environment } from './../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  requestLogin(value: any) {
   return  this.http.post(`${environment.api}/auth/login`, value);
    // return result.toPromise();
  }
  requestProducts(){
    return this.http.get(`${environment.api}/products`)
  }
}
