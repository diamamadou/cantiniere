import { Component, OnInit } from '@angular/core';
import {MenuService} from '../services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-plat-du-jour',
  templateUrl: './plat-du-jour.component.html',
  styleUrls: ['./plat-du-jour.component.css']
})
export class PlatDuJourComponent implements OnInit {

  todayMenu;
  todayMeal = [];
  key;
  errors;
  userInfo;

  constructor(private menuService: MenuService, private route: ActivatedRoute, private router: Router, private authService: AuthService) {
    this.route.params
    .subscribe(params => this.key= params);

   }

  ngOnInit() {
    this.getAllForToday();
  }

  getAllForToday() {
    this.menuService.findAllAvailableForToday()
      .subscribe(data => {console.log(data);this.todayMenu = data; console.log('Les menus du jour sont : ');
                          data.forEach(element => {
        // this.todayMeal = element.meals;
        console.log(element.label + '  Prix: ' + element.priceDF);
      })
      ; });
    this.menuService.findAllAvailableForToday()
      .subscribe(data => this.todayMeal = data);
    if (this.authService.getToken() !== null) {
      this.userInfo = this.authService.getUserInfo(this.authService.getToken());
      console.log('Bienvenue ' + this.userInfo.user.name + ' ' + this.userInfo.user.firstname + '');
    }
  }

  menuDetail(id) {
    this.router.navigate(['/detailMenuJour/' + id]);
  }
}
