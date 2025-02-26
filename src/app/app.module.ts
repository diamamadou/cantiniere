import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import {FormsModule} from '@angular/forms';
import { JwtInterceptor } from './helpers/jwt-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './helpers/error-interceptor';
import { DetailMenuJourComponent } from './detail-menu-jour/detail-menu-jour.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DetailCommandeComponent } from './detail-commande/detail-commande.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ModalComponent } from './modal/modal.component';
import { CartComponent } from './cart/cart.component';
import { PlatDetailComponent } from './plat-detail/plat-detail.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

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
    DetailMenuJourComponent,
    ForgotPasswordComponent,
    DetailCommandeComponent,
    UtilisateursComponent,
    ModalComponent,
    CartComponent,
    PlatDetailComponent,
    IngredientsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
