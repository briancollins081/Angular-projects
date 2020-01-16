import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeBookService } from '../recipebook.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[];
  constructor(
    private recipeBookService: RecipeBookService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeBookService.getRecipes();
  }

  selectRecipe(i:number){
    // console.log("Selected the recipe");
    // this.recipeBookService.recipeSelected.emit(recipe);
    this.router.navigate(['/recipebook/'+i]);
    this.activatedRoute
  }
}
