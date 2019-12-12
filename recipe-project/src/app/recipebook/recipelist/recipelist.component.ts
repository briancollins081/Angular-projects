import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Abc Test Recipe", 
      "Grilled Eggs mixed with chillie, made for all ages at your desired taste", 
      "https://get.pxhere.com/photo/restaurant-dish-meal-food-vegetable-recipe-meat-cuisine-asian-food-garnish-dinner-tasty-vegetarian-food-gastronomy-mediterranean-food-fried-food-animal-source-foods-middle-eastern-food-adana-kebab-mixed-grill-fat-ny-ros-1376098.jpg"
    )
  ];
  constructor() { }

  ngOnInit() {
  }

}
