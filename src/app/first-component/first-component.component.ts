import { Component, OnInit } from '@angular/core';
import {Category} from "../domain/category.enum";

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name = 'first';
  description = 'component';
  price = 100;
  category: Category = Category.Foods;
  isAvailable = true;

  constructor() { }

  ngOnInit(): void {
  }

}
