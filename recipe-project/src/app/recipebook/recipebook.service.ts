import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeBookService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Abc Test Recipe",
      "Grilled Eggs mixed with spices at your desired taste",
      "https://c.pxhere.com/images/83/5c/d5fd27d87c81a2821de340e96fb2-1441551.jpg!d",
      [
        new Ingredient('Dakos', 5),
        new Ingredient('Tomato', 2),
        new Ingredient('Olive', 10),
        new Ingredient('Olive Oil', 5)
      ]
    ),
    new Recipe(
      "Grilled Eggs Recipe",
      "Grilled Eggs mixed with spices at your desired taste",
      "https://c.pxhere.com/images/fb/09/514a2061a056402f55e997bbdaf1-1445049.jpg!d",
      [
        new Ingredient('Rice', 1),
        new Ingredient('Tomato', 2),
        new Ingredient('Olive', 10),
        new Ingredient('Olive Oil', 5)
      ]
    ),
    new Recipe(
      "Grandma Pie",
      "Grandma Pie With Pepperoni and Pink Sauce",
      "https://c.pxhere.com/images/2f/2c/fe3c2bcf25425bac1ad28c7356cf-1457531.jpg!d",
      [
        new Ingredient('Egg', 1),
        new Ingredient('Avocado', 2),
        new Ingredient('Toast', 10),
        new Ingredient('Olives', 5),
        new Ingredient('Arugula', 8)
      ]
    )
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}