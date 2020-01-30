import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../recipebook.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping/shoppinglist.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  id: number;
  currentRecipe: Recipe;
  ingredients: Ingredient[];
  constructor(
    private recipeBookService: RecipeBookService,
    private shoppingListService: ShoppingListService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((p: Params) => {
      this.id = +p.id;
      this.currentRecipe = this.recipeBookService.getRecipe(this.id);
      this.ingredients = this.currentRecipe.ingredients;
    });
  }

  addIngredientsToList() {
    this.shoppingListService.addIngredients(this.ingredients);
    this.router.navigate(['/shoppinglist'])
  }

  onDeleteRecipe() {
    this.recipeBookService.deleteRecipe(this.id);

    this.router.navigate(['/recipebook']);
  }
}
