import { Product } from './../../Models/app.model';
import { ApiService } from './../../services/api.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  ProductId: any;
  product: any;

  constructor(private as: ApiService, private route: ActivatedRoute) {
    this.product;
  }
  ngOnInit(): void {
    this.getIdFromUrl();
    this.getProductById();
  }

  getProductById() {
    this.as.requestProductDetailsById(this.ProductId).subscribe((data) => {
      this.product = data;
    });
  }

  getIdFromUrl() {
    this.ProductId = this.route.snapshot.paramMap.get('id');
    console.log(this.ProductId);
  }
}
