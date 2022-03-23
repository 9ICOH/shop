import { Injectable } from '@angular/core';
import {CartModel} from "../models/cart-model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCartProducts():CartModel[]{
    return [{
      name: "porridge",
      price: 10,
    }];
  }
}
