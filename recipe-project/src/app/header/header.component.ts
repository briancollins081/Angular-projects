import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuChangedEvent = new EventEmitter<{recipeActive: boolean, shoppingActive: boolean}>();
  activeItem: number = 1;
  constructor() { }

  ngOnInit() {
  }

  onShoppingClick(){
    this.menuChangedEvent.emit({
      recipeActive: false,
      shoppingActive: true
    });
    this.activeItem = 2;
    console.log(this.activeItem)
  }

  onRecipeClick(){
    this.menuChangedEvent.emit({
      recipeActive: true,
      shoppingActive: false
    });
    this.activeItem = 1;
  }
}
