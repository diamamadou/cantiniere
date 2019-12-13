import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MealsManagerComponent } from '../meals-manager/meals-manager.component';
import { MealsUserComponent } from '../meals-user/meals-user.component';
import { MealsService } from '../meals-services/meals.service';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { IngredientService } from '../_ingredients-services/ingredient.service';
import { DetailIngredientComponent } from '../detail-ingredient/detail-ingredient.component';
import { DetailMealsManagerComponent } from '../detail-meals-manager/detail-meals-manager.component';
import { DetailMealsUserComponent } from '../detail-meals-user/detail-meals-user.component';
import { MealsManagerRoutingModule } from '../meals-manager-routing/meals-manager-routing.module';



@NgModule({
  declarations: [
    MealsManagerComponent,
    MealsUserComponent,
    IngredientComponent,

    DetailIngredientComponent,
    DetailMealsManagerComponent,
    DetailMealsUserComponent
  ],
  imports: [
    CommonModule,
    MealsManagerRoutingModule
  ]
})
export class MealManagerModule { }
