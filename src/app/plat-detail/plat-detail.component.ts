import { Component, OnInit } from '@angular/core';
import { PlatService } from '../services/plat.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plat-detail',
  templateUrl: './plat-detail.component.html',
  styleUrls: ['./plat-detail.component.css']
})
export class PlatDetailComponent implements OnInit {

  id;
  meal;
  ingredients;
  confirmedModal;

  constructor(
    private mealService: PlatService,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit() {
    this.mealDetail();
  }

  mealDetail() {
    this.mealService.findOneMeal(this.id)
      .subscribe( data => { console.log(data); this.meal = data; this.ingredients = data.ingredients;},
      (error) => { console.log('Une ereur est survenue !') },
      () => {})
  }

  addToCart() {
    this.confirmedModal = true;
    this.mealService.findOneMeal(this.id)
      .subscribe( data => { localStorage.setItem('meal_' + data.id, data.label + ' ' + data.id)},
      (error) => { console.log('Une ereur est survenue !') },
      () => {})
  }

  closeModal() {
    this.confirmedModal = false;
  }

  cart() {
    this.closeModal();
    this.router.navigate(['/cart']);
  }

}
