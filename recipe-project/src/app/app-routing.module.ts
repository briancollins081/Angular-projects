import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { ShoppinglistComponent } from './shopping/shoppinglist/shoppinglist.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { NorecipeComponent } from './recipebook/recipedetail/norecipe/norecipe.component';
import { RecipedetailComponent } from './recipebook/recipedetail/recipedetail.component';
import { RecipeeditComponent } from './recipebook/recipeedit/recipeedit.component';


const routes: Routes = [
  {path: '', redirectTo: '/recipebook', pathMatch: "full"},
  {path: 'recipebook', component: RecipebookComponent, children:[
    {path: '', component: NorecipeComponent},
    {path: 'new', component: RecipeeditComponent},
    {path: ':id', component: RecipedetailComponent},
    {path: ':id/edit', component: RecipeeditComponent},
  ]},
  {path: 'shoppinglist', component: ShoppingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
