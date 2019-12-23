import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingComponent implements OnInit {

  @ViewChild('shoppinglistedit', {static: true}) shoppinglisteditRef;
  @ViewChild('shoppinglist', {static: true}) shoppinglistRef;
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
}
