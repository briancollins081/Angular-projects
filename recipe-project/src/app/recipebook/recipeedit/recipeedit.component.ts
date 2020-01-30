import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeBookService: RecipeBookService,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = (params['id'] != null);
        // console.log(this.editMode);
        this.initForm();
      })
  }

  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imagePath,
      this.recipeForm.value.ingredients
    );
    if (this.editMode) {
      this.recipeBookService.updateRecipe(this.id, newRecipe);
    } else {
      this.recipeBookService.addRecipe(newRecipe);
    }
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    // this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngridients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeBookService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingridient of recipe['ingredients']) {
          recipeIngridients.push(new FormGroup({
            name: new FormControl(ingridient.name, Validators.required),
            amount: new FormControl(ingridient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngridients
    });

  }

}
