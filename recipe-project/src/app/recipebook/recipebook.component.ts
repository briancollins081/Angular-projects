import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeBookService } from './recipebook.service';

@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
  styleUrls: ['./recipebook.component.css']
})
export class RecipebookComponent implements OnInit {
  currentRecipe: Recipe;
  constructor(private recipeBookService: RecipeBookService) { }

  ngOnInit() {
    this.recipeBookService.recipeSelected.subscribe(
      (recipe: Recipe)=>{
        this.currentRecipe=recipe;
      }
    );
  }
}
