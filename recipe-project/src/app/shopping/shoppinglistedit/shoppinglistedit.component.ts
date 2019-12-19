import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {
  @ViewChild('nameRef', {static: true}) itemName:ElementRef;
  @ViewChild('amountRef', {static: true}) itemAmount:ElementRef;
  
  @Output() ingredientAdd = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddNewItem(){
    const name = this.itemName.nativeElement.value;
    const amount = this.itemAmount.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    console.log(ingredient);
    
    this.ingredientAdd.emit(ingredient);
  }
}
