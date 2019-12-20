import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { MealsManagerComponent } from '../meals-manager/meals-manager.component';
import { MealsUserComponent } from '../meals-user/meals-user.component';
import { DetailIngredientComponent } from '../detail-ingredient/detail-ingredient.component';
import { DetailMealsManagerComponent } from '../detail-meals-manager/detail-meals-manager.component';
import { DetailMealsUserComponent } from '../detail-meals-user/detail-meals-user.component';
import { AuthGard } from 'src/app/helpers/auth-gard';

const MealsIngreRoutes: Routes = [
  { path: 'ingredients', component: IngredientComponent },
  { path: 'meals', component: MealsManagerComponent, canActivate: [AuthGard] },
  { path: 'mealUsers', component: MealsUserComponent },
  { path: 'detail-ingredient/:id', component: DetailIngredientComponent },
  { path: 'detail-meal/:id', component: DetailMealsManagerComponent },
  { path: 'detail-mealUser/:id', component: DetailMealsUserComponent },
]

@NgModule({
  imports: [RouterModule.forChild(MealsIngreRoutes)],
  exports: [RouterModule]
})
export class MealsManagerRoutingModule { }
