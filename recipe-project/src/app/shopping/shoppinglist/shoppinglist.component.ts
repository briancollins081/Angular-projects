import { Component, OnInit, Input, AfterViewChecked, OnChanges, DoCheck } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit/* , DoCheck */ {
  ingredients: Ingredient[];
  oldLength:number=0;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingreidientsChange.subscribe(
      (newList:Ingredient[])=>{
        this.ingredients = newList;
      }
    );
    this.oldLength = this.ingredients.length;
  }
  
  /* ngDoCheck(){
    if(this.shoppingListService.getIngredients.length !== this.oldLength){
      this.ingredients = this.shoppingListService.getIngredients();
    }
  } */
}
