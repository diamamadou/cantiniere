import { Component, OnInit } from '@angular/core';
import {MenuService} from '../services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private menuService: MenuService, private route: ActivatedRoute, private router: Router) {
    this.route.params
    .subscribe(params => console.log(params));
   }

  ngOnInit() {
    this.getAllForToday();
  }

  getAllForToday() {
    this.menuService.findAllAvailableForToday()
      .subscribe(data => {this.todayMenu = data; console.log('Les menus du jour sont : ');
      data.forEach(element => {
        //this.todayMeal = element.meals;
        console.log(element.label + '  Prix: ' + element.priceDF);
      })
      ;});
      this.menuService.findAllAvailableForToday()
      .subscribe(data => this.todayMeal = data);
  }

  menuDetail(id) {
    this.menuService.findAllAvailableForToday()
      .subscribe(data => {//this.todayMeal = data[id]; console.log(data[id]);
      },
      error => {this.errors = error},
      () => {this.router.navigate(['/detailMenuJour/'+id])}
      );
  }
}
