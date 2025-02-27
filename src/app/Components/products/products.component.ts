import { Product } from './../../Models/app.model';
import { ApiService } from './../../services/api.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  addToCart: any = [];
  cols: any;
  Products: any = [];
  gridByBreakpoint: any = {
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1,
  };
  constructor(
    private as: ApiService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.cols = this.gridByBreakpoint.xs;
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.cols = this.gridByBreakpoint.sm;
          }
          if (result.breakpoints[Breakpoints.Medium]) {
            this.cols = this.gridByBreakpoint.md;
          }
          if (result.breakpoints[Breakpoints.Large]) {
            this.cols = this.gridByBreakpoint.lg;
          }
          if (result.breakpoints[Breakpoints.XLarge]) {
            this.cols = this.gridByBreakpoint.xl;
          }
        }
      });
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.as.requestProducts().subscribe(
      (data) => {
        this.Products = data.products;
        this.Products.forEach((ele:any) => {
            ele.launchedDate= this.getRandomDate();
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
  handleBuyNow(item: any) {
    console.log('item in buy now', item);
  }
  handleAddToCart(item: any) {
    // this.addToCart.push(item);
    // console.log('items in add to cart', this.addToCart);
    let cart = [];
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart') as any);
      cart = [...cart, item];
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      cart = [item];
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    this.as.dataStream.next(cart);
  }
  productDetails(Product: Product) {
    this.router.navigate(['/home/product-details/' + Product.id]);
  }
  getRandomDate() {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
  }
}
