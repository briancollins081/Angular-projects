import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeBookService } from '../recipebook.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipeChangesSubscription: Subscription;
  constructor(
    private recipeBookService: RecipeBookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.recipes = this.recipeBookService.getRecipes();
    this.recipeChangesSubscription = this.recipeBookService.recipesChanged
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
  }
  ngOnDestroy(){
    this.recipeChangesSubscription.unsubscribe();
  }

  selectRecipe(i: number) {
    this.router.navigate(['/recipebook/' + i]);
  }
}
