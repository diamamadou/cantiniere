import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  findAll;
  key;
  errors;
  userInfo;

  ngOnInit() {
    this.getFindAll();
  }

  getFindAll() {
    this.userService.getFindAll()
      .subscribe(data => {this.findAll = data; console.log('Les différents utilisateurs sont : ');
                          data.forEach(element => {
        console.log('  Nom: ' + element.name + '  Prénom: ' + element.firstname);
      })
      ; });
    this.userService.getFindAll()
      .subscribe(data => this.findAll = data);

    if (this.authService.getToken() !== null) {
      this.userInfo = this.authService.getUserInfo(this.authService.getToken());
      console.log('Bienvenue ' + this.userInfo.user.name + ' ' + this.userInfo.user.firstname + '');
    }
  }


}
