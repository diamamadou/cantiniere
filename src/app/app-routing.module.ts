import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { PlatDuJourComponent } from './plat-du-jour/plat-du-jour.component';
import { EntreeComponent } from './entree/entree.component';
import { PlatComponent } from './plat/plat.component';
import { DessertComponent } from './dessert/dessert.component';
import { BoissonComponent } from './boisson/boisson.component';
import { HeaderComponent } from './header/header.component';
import { CommandeComponent } from './commande/commande.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailMenuJourComponent } from './detail-menu-jour/detail-menu-jour.component';
import { IngredientComponent } from './_meal-manager/ingredient/ingredient.component';
import { MealsManagerComponent } from './_meal-manager/meals-manager/meals-manager.component';
import { MealsUserComponent } from './_meal-manager/meals-user/meals-user.component';
import { DetailIngredientComponent } from './_meal-manager/detail-ingredient/detail-ingredient.component';
import { DetailMealsManagerComponent } from './_meal-manager/detail-meals-manager/detail-meals-manager.component';
import { DetailMealsUserComponent } from './_meal-manager/detail-meals-user/detail-meals-user.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nav', component: NavComponent },
  { path: 'platDuJour', component: PlatDuJourComponent },
  { path: 'entree', component: EntreeComponent },
  { path: 'plat', component: PlatComponent },
  { path: 'dessert', component: DessertComponent },
  { path: 'boisson', component: BoissonComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'commande', component: CommandeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'detailMenuJour/:id', component: DetailMenuJourComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
