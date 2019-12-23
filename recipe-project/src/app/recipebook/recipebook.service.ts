import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeBookService{
    
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          "Abc Test Recipe", 
          "Grilled Eggs mixed with spices at your desired taste", 
          "https://get.pxhere.com/photo/restaurant-dish-meal-food-vegetable-recipe-meat-cuisine-asian-food-garnish-dinner-tasty-vegetarian-food-gastronomy-mediterranean-food-fried-food-animal-source-foods-middle-eastern-food-adana-kebab-mixed-grill-fat-ny-ros-1376098.jpg"
        ),
        new Recipe(
          "Grilled Eggs Recipe", 
          "Grilled Eggs mixed with spices at your desired taste", 
          "https://img.taste.com.au/OBKIMrub/w643-h428-cfill-q90/taste/2018/05/creamy-chicken-piccata-pasta-137359-1.jpg"
        ),
        new Recipe(
            "Grandma Pie", 
            "Grandma Pie With Pepperoni and Pink Sauce", 
            "https://iheartrecipes.com/wp-content/uploads/2016/10/IMG_9625.jpg"
          )
    ];
    getRecipes(){
        return this.recipes.slice();
    }
}