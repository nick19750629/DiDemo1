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
    useFactory: (logger: LoggerService, isDev) => {
      if (isDev) {
        return new ProductService(logger);
      } else {
        return new AnotherProductService(logger);
      }
    },
    deps: [LoggerService, 'IS_DEV_ENV']
  }, LoggerService, {
    provide: 'IS_DEV_ENV', useValue: false
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
