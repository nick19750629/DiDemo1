import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {ProductService} from './shared/product.service';
import { Product1Component } from './product1/product1.component';
import {LoggerService} from './shared/logger.service';
import {AnotherProductService} from './shared/another-product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Product1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: ProductService,
    useFactory: () => {
      const logger = new LoggerService();
      const dev = Math.random() > 0.5;
      if (dev) {
        return new ProductService(logger);
      } else {
        return new AnotherProductService(logger);
      }
    }
  }, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
