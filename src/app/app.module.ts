import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {ProductService} from './shared/product.service';
import { Product1Component } from './product1/product1.component';
import {LoggerService} from './shared/logger.service';
import {AnotherProductService} from './shared/another-product.service';
import { BindComponent } from './bind/bind.component';
import { Bind1Component } from './bind1/bind1.component';
import { Bind2Component } from './bind2/bind2.component';
import { MultiplePipe } from './pipe/multiple.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Product1Component,
    BindComponent,
    Bind1Component,
    Bind2Component,
    MultiplePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: ProductService,
    useFactory: (logger: LoggerService, appConfig) => {
      if (appConfig.isDev) {
        return new ProductService(logger);
      } else {
        return new AnotherProductService(logger);
      }
    },
    deps: [LoggerService, 'APP_CONFIG']
  }, LoggerService, {
    provide: 'APP_CONFIG', useValue: {isDev: false}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
