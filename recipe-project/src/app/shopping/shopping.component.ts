import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  sendItemToList = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addShoppingItem(item){ 
    this.sendItemToList.emit(item,);
  }
}
