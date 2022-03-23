import { Injectable } from '@angular/core';
import {ProductModel} from "../models/product-model";
import {Category} from "../../core/domain/category.enum";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts():ProductModel[]{

    return [{
      name: "porridge",
      description: "small bowl of porridge",
      price: 10,
      category: Category.Foods,
      isAvailable: true
    },
      {
        name: "Detergent",
        description: "Bottle detergent",
        price: 50,
        category: Category.HouseholdChemicals,
        isAvailable: true
      },
      {
        name: "Shovel",
        description: "Small Shovel",
        price: 100,
        category: Category.Agricultural,
        isAvailable: true
      }];
  }
}
