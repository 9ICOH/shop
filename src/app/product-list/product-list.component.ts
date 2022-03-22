import { Component, OnInit } from '@angular/core';
import {ProductService} from "../domain/services/product.service";
import {ProductModel} from "../domain/models/product-model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!: Array<ProductModel>;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
