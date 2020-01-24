
import {Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingreidientsChange = new Subject<Ingredient[]>();
    editIngridientSubject:Subject<number> = new Subject();
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
        this.ingreidientsChange.next(this.getIngredients());
    }
    addIngredients(ingredients: Ingredient[]){
        // this.ingredients.push(...ingredients);
        ingredients.forEach(ingr=>{
            this.ingredients.push(ingr);
        });
        this.ingreidientsChange.next(this.getIngredients());
    }

    getIngredientById(index): Ingredient{
        return this.ingredients[index];
    }

    setIngredientById(index, ingredient: Ingredient){
        this.ingredients[index] = ingredient;
    }

}