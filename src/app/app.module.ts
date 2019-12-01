import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PlatDuJourComponent,
    EntreeComponent,
    PlatComponent,
    DessertComponent,
    BoissonComponent,
    HeaderComponent,
    CommandeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
