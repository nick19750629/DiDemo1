import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {ProductService} from './shared/product.service';
import { Product1Component } from './product1/product1.component';
import {LoggerService} from './shared/logger.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Product1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
