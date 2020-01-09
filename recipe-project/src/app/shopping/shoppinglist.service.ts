
import {Ingredient} from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingreidientsChange = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Onions', 5),
        new Ingredient('Tomatoes', 10)
      ];

    getIngredients(): Ingredient[]{       
        return this.ingredients.slice();
    }

    setIngredients(ingredients: Ingredient[]){
        this.ingredients = ingredients;
    }

    addIngredient(ingredient: Ingredient){
        console.log("Adding new ingredient: "+ ingredient);
        this.ingredients.push(ingredient);
        this.ingreidientsChange.emit(this.getIngredients());
    }
    addIngredients(ingredients: Ingredient[]){
        // this.ingredients.push(...ingredients);
        ingredients.forEach(ingr=>{
            this.ingredients.push(ingr);
        });
    }

    getIngredientById(index): Ingredient{
        return this.getIngredients()[index];
    }

    setIngredientById(index, ingredient: Ingredient){
        this.ingredients[index] = ingredient;
    }

}