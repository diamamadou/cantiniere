import { Component, OnInit } from '@angular/core';
import { MealsService } from '../_meals-services/meals.service';
import { Meal } from '../models/meal';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-meals-manager',
  templateUrl: './meals-manager.component.html',
  styleUrls: ['./meals-manager.component.css']
})
export class MealsManagerComponent implements OnInit {

  constructor(private mealsService: MealsService, private authService: AuthService) { }

  meals;
  userInfo;
  ngOnInit() {
    // this.getAllForToday();
    this.getMeals();
  }

  /* mealSubmit = function (meal: Meal) {
     const newKey: any = Object.values(meal)[0];
     const values = Object.values(meal)[1];
     this.meals[newKey] = values;
   }; */

  getMeals() {
    this.mealsService.getAllMeals()
      .subscribe(
        data => {
          this.meals = data;
          console.log('Les différents plat sont : ');
          console.table(data);
        });

  }
  getAllForToday() {
    this.mealsService.findAllAvailableForToday()
      .subscribe(data => {
        this.meals = data; console.log('Les plats du jour sont : ');
        data.forEach(element => {
          // this.todayMeal = element.meals;
          console.log(element.label + '  Prix: ' + element.priceDF);
        })
          ;
      });

  }
}
