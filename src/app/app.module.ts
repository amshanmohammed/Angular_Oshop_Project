import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './Components/test/test.component';
import { MatRadioModule } from '@angular/material/radio';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ProductsComponent } from './Components/products/products.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    TemplateFormComponent,
    ProductsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
