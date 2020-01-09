import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../recipebook.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping/shoppinglist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  @Input() currentRecipe: Recipe;
  ingredients: Ingredient[];
  constructor(
    private recipeBookService: RecipeBookService,
    private shoppingListService: ShoppingListService,
    private router: Router) { }

  ngOnInit() {
    this.ingredients = this.currentRecipe.ingredients;
  }

  addIngredientsToList() {
    this.shoppingListService.addIngredients(this.ingredients);
    this.router.navigate(['/shoppinglist'])
  }

}
