import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {
  @ViewChild('nameRef', {static: true}) itemName:ElementRef;
  @ViewChild('amountRef', {static: true}) itemAmount:ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddNewItem(){
    const name = this.itemName.nativeElement.value;
    const amount = +this.itemAmount.nativeElement.value;
    const ingredient = new Ingredient(name, amount);

    this.shoppingListService.addIngredient(ingredient);
    console.log("All ingredients: ");
    console.log(this.shoppingListService.getIngredients());
    
  }

  onDeleteIngredient(){

  }
  onClearItem(){

  }
}
