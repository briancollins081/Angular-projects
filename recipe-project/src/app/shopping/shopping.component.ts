import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Onions', 5),
    new Ingredient('Tomatoes', 10)
  ];

  @ViewChild('shoppinglistedit', {static: true}) shoppinglisteditRef;
  @ViewChild('shoppinglist', {static: true}) shoppinglistRef;
  
  constructor() { }

  ngOnInit() {
  }

  addNewIngredient(i){
    this.ingredients.push(i);
  }
}
