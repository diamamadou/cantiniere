import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userInfo;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.isConnected();
    
  }

  isConnected() {
    if(this.authService.getToken()) {
      const userInfo = this.authService.getUserInfo(this.authService.getToken()).user;
      this.userInfo = userInfo;
      return true;
    }
  }

  logIn() {
    this.isConnected();
    this.router.navigate(['/login']);
  }

  logOut() {
    this.isConnected();
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  orders() {
    this.router.navigate(['/commande']);
  }

}
