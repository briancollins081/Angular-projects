import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeBookService } from '../recipebook.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[];
  @Output() recipeListItemClickEvent = new EventEmitter<Recipe>();
  constructor(private recipeBookService: RecipeBookService) { }

  ngOnInit() {
    this.recipes = this.recipeBookService.getRecipes();
  }

  onRecipeItemSelected(r:Recipe){
    this.recipeListItemClickEvent.emit(r);
    // console.log("Emitted Event for recipe item : "+recipe);
  }
}
