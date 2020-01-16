import { Component, OnInit, Input, AfterViewChecked, OnChanges, DoCheck, OnDestroy } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from '../shoppinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit, OnDestroy /* , DoCheck */ {
  ingredients: Ingredient[];
  oldLength: number = 0;
  private ingridientsChangeSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.ingridientsChangeSubscription = this.shoppingListService.ingreidientsChange.subscribe(
      (newList: Ingredient[]) => {
        this.ingredients = newList;
      }
    );
    // this.oldLength = this.ingredients.length;
  }

  ngOnDestroy(){
    this.ingridientsChangeSubscription.unsubscribe();
  }

  /* ngDoCheck(){
    if(this.shoppingListService.getIngredients.length !== this.oldLength){
      this.ingredients = this.shoppingListService.getIngredients();
    }
  } */
}
