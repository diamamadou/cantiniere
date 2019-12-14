import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userInfo;
  id;

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit() {
    console.log(this.testconnexion());
  }

  testconnexion() {
    if (this.authService.getToken()) {
      this.userInfo = this.authService.getUserInfo(this.authService.getToken());
      return true;
    } else {
      this.id = false;
      return false;
    }

  }
  connexion() {
    this.testconnexion();
    this.router.navigate(['/login']);
    this.ngOnInit();

  }

  deconnexion() {
    this.testconnexion();
    this.authService.logOut();
    this.router.navigate(['/']);
    this.ngOnInit();

  }
}
