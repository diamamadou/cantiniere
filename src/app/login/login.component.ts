import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private errors: any;
  users;
  userInfos;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    console.log('Se connecter !');
  }

  login(user) {
    this.authService.logIn(user.form.value)
      .subscribe(users => { this.users = users; console.log(localStorage.getItem('user_token')); },
        error => { this.router.navigate(['/platDujour']); },
      () => { this.router.navigate(['/plat']); }
    );
    const   hello = this.authService.getDecodedToken(localStorage.getItem('user_token'));
    console.log(hello);
  }
}
