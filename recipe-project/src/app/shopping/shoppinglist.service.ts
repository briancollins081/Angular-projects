
import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Onions', 5),
        new Ingredient('Tomatoes', 10)
      ];

    getIngredients(): Ingredient[]{       
        return this.ingredients;
    }

    setIngredients(ingredients: Ingredient[]){
        this.ingredients = ingredients;
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }

    getIngredientById(index): Ingredient{
        return this.getIngredients()[index];
    }

    setIngredientById(index, ingredient: Ingredient){
        this.ingredients[index] = ingredient;
    }

}