import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
  styleUrls: ['./recipebook.component.css']
})
export class RecipebookComponent implements OnInit {
  currentRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }
}
