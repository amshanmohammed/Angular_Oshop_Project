import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/app.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user: any;
  cartItems: Product[] = [];
  cartItemsLength: any = null;
  constructor(
    private router: Router,
    private as: ApiService,
    private _location: Location
  ) {}
  ngOnInit(): void {
    this.as.dataStream.subscribe((data) => {
      this.cartItemsLength = data.length;
      this.cartItems = data;
    });
    this.user = JSON.parse(localStorage.getItem('userDetails') as any);
    this.cartItems = JSON.parse(localStorage.getItem('cart') as any);
    this.cartItemsLength = this.cartItems.length;
  }
  LogoutUser() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  backToPrevPage() {
    this._location.back()
  }
}
