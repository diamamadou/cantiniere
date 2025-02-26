import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavComponent} from './nav/nav.component';
import {PlatDuJourComponent} from './plat-du-jour/plat-du-jour.component';
import {EntreeComponent} from './entree/entree.component';
import {PlatComponent} from './plat/plat.component';
import {DessertComponent} from './dessert/dessert.component';
import {BoissonComponent} from './boisson/boisson.component';
import {HeaderComponent} from './header/header.component';
import {CommandeComponent} from './commande/commande.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { DetailMenuJourComponent } from './detail-menu-jour/detail-menu-jour.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {DetailCommandeComponent} from './detail-commande/detail-commande.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ModalComponent } from './modal/modal.component';
import { CartComponent } from './cart/cart.component';
import { PlatDetailComponent } from './plat-detail/plat-detail.component';
import { IngredientsComponent } from './ingredients/ingredients.component';



const routes: Routes = [
  {path: '', component: PlatDuJourComponent},
  {path: 'nav', component: NavComponent},
  {path: 'platDuJour', component: PlatDuJourComponent},
  {path: 'entree', component: EntreeComponent},
  {path: 'plat', component: PlatComponent},
  {path: 'dessert', component: DessertComponent},
  {path: 'boisson', component: BoissonComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'commande', component: CommandeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'detailMenuJour/:id', component: DetailMenuJourComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'detailCommande/:id', component: DetailCommandeComponent},
  {path: 'utilisateurs', component: UtilisateursComponent},
  {path: 'modal', component: ModalComponent},
  {path: 'cart', component: CartComponent},
  {path: 'plat-detail/:id', component: PlatDetailComponent},
  {path: 'ingredients', component: IngredientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
