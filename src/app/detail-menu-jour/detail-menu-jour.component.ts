import { Component, OnInit } from '@angular/core';
import {MenuService} from '../services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'detail-menu-jour',
  templateUrl: './detail-menu-jour.component.html',
  styleUrls: ['./detail-menu-jour.component.css']
})
export class DetailMenuJourComponent implements OnInit {

  key;
  mealDay = [];
  confirmedModal;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.params
    .subscribe(params => this.key = params.id);
   }

  ngOnInit() {
    this.menuDetail();
  }

  // menuDetail() {
  //   this.menuService.findAllAvailableForToday()
  //     .subscribe(data =>
  //       {this.mealDay = data[this.key].meals;console.log(this.mealDay)
  //         console.log('Les plats du menu sélectionné sont: ');
  //       this.mealDay.forEach(element => {
  //         console.log(element.label);
  //         console.log('Prix: ' + element.priceDF)
  //       });});
  // }

  menuDetail() {
    this.menuService.find(this.key)
      .subscribe( data => { console.log(data); this.mealDay = data.meals;},
      (error) => { console.log('Une ereur est survenue !') },
      () => {})
  }

  addToCart() {
    this.confirmedModal = true;
    this.menuService.find(this.key)
      .subscribe( data => { localStorage.setItem('menu_' + data.id, data.label + ' ' + data.id)},
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
