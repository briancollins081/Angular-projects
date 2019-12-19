import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  @Input() ingredients: Ingredient[];

  constructor() { }

  ngOnInit() {
  }

}
