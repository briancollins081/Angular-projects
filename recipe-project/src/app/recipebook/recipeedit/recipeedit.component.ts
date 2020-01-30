import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeBookService } from '../recipebook.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipeedit',
  templateUrl: './recipeedit.component.html',
  styleUrls: ['./recipeedit.component.css']
})
export class RecipeeditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private recipeBookService: RecipeBookService) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe((params:Params)=>{
        this.id = +params['id'];
        this.editMode = (params['id'] != null);
        // console.log(this.editMode);
        this.initForm();
      })
  }

  onSubmit(){
    console.log(this.recipeForm);
  }

  initForm(){
    let recipe = this.recipeBookService.getRecipe(this.id);
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    if(this.editMode){
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription)
    });
  }

}
