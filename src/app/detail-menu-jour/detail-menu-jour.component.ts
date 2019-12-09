import { Component, OnInit } from '@angular/core';
import {MenuService} from '../services/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detail-menu-jour',
  templateUrl: './detail-menu-jour.component.html',
  styleUrls: ['./detail-menu-jour.component.css']
})
export class DetailMenuJourComponent implements OnInit {

  key;
  mealDay = [];
  constructor(private menuService: MenuService, private route: ActivatedRoute) {
    this.route.params
    .subscribe(params => this.key = params.id);
   }

  ngOnInit() {
    this.menuDetail();
  }

  menuDetail() {
    this.menuService.findAllAvailableForToday()
      .subscribe(data =>
        {this.mealDay = data[this.key].meals;
          console.log('Les plats du menu sélectionné sont: ');
        this.mealDay.forEach(element => {
          console.log(element.label);
          console.log('Prix: ' + element.priceDF)
        });});
  }
}
