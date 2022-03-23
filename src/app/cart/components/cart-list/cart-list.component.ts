import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {ProductModel} from "../../../product/models/product-model";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  products!: Array<ProductModel>;

  constructor(public cartService:CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getCartProducts();
  }

}
