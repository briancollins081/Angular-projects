import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { ShoppinglistComponent } from './shopping/shoppinglist/shoppinglist.component';
import { ShoppingComponent } from './shopping/shopping.component';


const routes: Routes = [
  {path: '', component: RecipebookComponent},
  {path: 'recipebook', component: RecipebookComponent},
  {path: 'shoppinglist', component: ShoppingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
