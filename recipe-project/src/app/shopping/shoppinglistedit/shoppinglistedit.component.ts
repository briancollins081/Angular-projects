import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {
  @ViewChild('f', {static: false}) editForm:NgForm;
  editIngridientSubscription: Subscription;
  editingIndex: number;
  editingMode: boolean;
  editedItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editIngridientSubscription = this
      .shoppingListService
      .editIngridientSubject
      .subscribe((id: number) => {
        this.editingIndex = id;
        this.editingMode = true;
        this.editedItem = this.shoppingListService.getIngredientById(id);
        this.editForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      })
  }

  onAddNewItem(form: NgForm) {
    const ingredient = new Ingredient(form.value.name, form.value.amount);
    this.shoppingListService.addIngredient(ingredient);
    console.log("All ingredients: ");
    console.log(this.shoppingListService.getIngredients());

  }

  onDeleteIngredient() {

  }
  onClearItem() {

  }
}
