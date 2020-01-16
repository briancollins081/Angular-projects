import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ABC Recipe Gallery';
  
  isRecipeActive: boolean = true;
  isShoppingActive: boolean = false;

  onMenuChanged(menuData: {recipeActive: boolean, shoppingActive: boolean}){
    this.isShoppingActive=menuData.shoppingActive;
    this.isRecipeActive=menuData.recipeActive;
  }

}
