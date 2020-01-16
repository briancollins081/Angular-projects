import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];
    
    constructor(name, desc, imgp, ingredients){
        this.name=name;
        this.description=desc;
        this.imagePath=imgp;
        this.ingredients=ingredients;
    }
}