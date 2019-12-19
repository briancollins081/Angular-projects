import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {
  @ViewChild('shoppingItemName', {static: true}) shoppingItemName;
  @ViewChild('shoppingItemAmount', {static: true}) shoppingItemAmount;

  @Output() addShoppingItem = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  submitAddShoppingForm(){
    this.addShoppingItem.emit(new Ingredient(this.shoppingItemName, this.shoppingItemAmount));
  }

}
