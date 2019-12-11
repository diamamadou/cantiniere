import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
   console.log('Réinitialisation de mot de passe');
  }
  forgotPassword(email) {
    this.authService.forgotPassword(email.form.value.email)
      .subscribe(data => {
        console.log('Votre mot de passe à été réinitialisé, veillez vérifier votre boite mail : ' + email.form.value.email); });
  }

}
