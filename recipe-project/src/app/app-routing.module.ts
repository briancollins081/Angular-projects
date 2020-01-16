import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { ShoppinglistComponent } from './shopping/shoppinglist/shoppinglist.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { NorecipeComponent } from './recipebook/recipedetail/norecipe/norecipe.component';
import { RecipedetailComponent } from './recipebook/recipedetail/recipedetail.component';


const routes: Routes = [
  {path: '', redirectTo: '/recipebook', pathMatch: "full"},
  {path: 'recipebook', component: RecipebookComponent, children:[
    {path: '', component: NorecipeComponent},
    {path: ':id', component: RecipedetailComponent}
  ]},
  {path: 'shoppinglist', component: ShoppingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
