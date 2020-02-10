import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  confirmedModal;
  response;
  hasError = true;;
  email;
  emails = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
   console.log('Réinitialisation de mot de passe');
  }

  forgotPassword(email) {
    this.authService.forgotPassword(email)
      .subscribe(data => {
        console.log('Votre mot de passe à été réinitialisé, veillez vérifier votre boite mail'); },
        (err) => {console.log('err', err)},
        () => {});
  }

  findAllUsers() {
    this.userService.findAll()
      .subscribe(data => { data.forEach(email => {
        this.emails.push(email.email);
      }); },
          (err) => { console.log('Erreur'); });
  }

  openModal() {
    this.confirmedModal = true;
    this.findAllUsers();
    this.emails.forEach(email => {
      if(this.email.indexOf(email) > -1) {
        this.forgotPassword(this.email);
        return this.hasError = false;
      }
    });
  }

  closeModal(hasError) {
    this.confirmedModal = false;
    if(!hasError){
      this.router.navigate(['/login']);
    }
  }
}
