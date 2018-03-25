import {Component, Injector, OnInit} from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {AnotherProductService} from '../shared/another-product.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css'],
})
export class Product1Component implements OnInit {

  product: Product;
  private productService: ProductService;

  constructor(private injector: Injector) {
    this.productService = injector.get(ProductService);
  }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
