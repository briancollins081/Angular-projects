import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../recipebook.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  @Input() currentRecipe: Recipe;
  constructor(private recipeBookService: RecipeBookService) { }

  ngOnInit() {
  }

  
}
