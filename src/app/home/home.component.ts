import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private route: ActivatedRoute) { }
  userInfo;
  public id;
  ngOnInit() {

    this.testconnexion();

  }
  testconnexion() {
    if (this.authService.getToken()) {
      this.userInfo = this.authService.getUserInfo(this.authService.getToken());
      return true;
    } else {
      return false;
    }

  }
  public actualisation() {
    this.ngOnInit();
  }
  // testrecu() {
  //   if (this.route.snapshot.paramMap.get('id')) {
  //     this.id = this.route.snapshot.paramMap.get('id');
  //   }
  // }

}


