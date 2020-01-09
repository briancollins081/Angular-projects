import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../recipebook.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  @Input() currentRecipe: Recipe;
  ingredients: Ingredient[];
  constructor(private recipeBookService: RecipeBookService) { }

  ngOnInit() {
    this.ingredients = this.currentRecipe.ingredients; 
  }

  
}
