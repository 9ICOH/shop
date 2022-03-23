import { Injectable } from '@angular/core';
import {ProductModel} from "../../product/models/product-model";
import {Category} from "../../core/domain/category.enum";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCartProducts():ProductModel[]{
    return [{
      name: "porridge",
      description: "small bowl of porridge",
      price: 10,
      category: Category.Foods,
      isAvailable: true
    }];
  }
}
