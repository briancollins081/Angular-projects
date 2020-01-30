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
  @ViewChild('f', { static: false }) editForm: NgForm;
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
        let currentIngridient = this.shoppingListService.getIngredientById(id);
        this.editForm.setValue({
          name: currentIngridient.name,
          amount: currentIngridient.amount
        });
      })
  }

  onAddNewItem(form: NgForm) {
    this.editedItem = new Ingredient(form.value.name, form.value.amount);
    if (this.editingMode) {
      this.shoppingListService.updateIngredient(this.editingIndex, this.editedItem);
      console.log(this.shoppingListService.getIngredientById(this.editingIndex));
    } else {
      this.shoppingListService.addIngredient(this.editedItem);
    }
  }

  onDeleteIngredient() {

  }
  onClearItem() {

  }
}
