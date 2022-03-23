import { Component, OnInit } from '@angular/core';
import {Category} from "../core/domain/category.enum";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name = 'first';
  description = 'component';
  price = 100;
  category: Category = Category.Foods;
  isAvailable = true;

  constructor() { }

  ngOnInit(): void {
  }

}
