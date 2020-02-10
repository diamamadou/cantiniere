import { Component, OnInit } from '@angular/core';
import {OrderService} from '../services/order.service';
import {Router} from '@angular/router';
import * as moment from 'moment';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  orders;
  meals;
  computedPrice;
  menuDefined;
  quantityMealDefined;
  ordersorders;
  users;
  lunchLady;

  filterModal;
  cliquedButton;
  beginDate;
  endDate;
  userId;
  date;
  status;

  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    private route: Router,
    private userService: UserService) { }

  ngOnInit() {
    if(this.authService.getToken()) {
      const userInfo = this.authService.getUserInfo(this.authService.getToken()).user;
      this.lunchLady = userInfo.isLunchLady;
    }
    this.findAll();
    this.findAllBetweenInStatus('02-03-2019', '12-06-2019', 0);
  }

  // addOrder() {
  //   this.orderService.addOrder()
  //     .subscribe(order => {console.log(order);
  //     },
  //       (error) =>
  //         console.log('Vous ne pouvez pas commander à cette heure / Le nombre de commandes maximum est atteint !')
  //     );
  // }

  cancelOrder(orderId) {
    this.orderService.cancelOrder(orderId)
      .subscribe(order => {console.log(order); },
        (error) => console.log('Votre commande n\'a pas été trouvé !')
      );
  }

  computePrice(orderId, constraintId) {
    this.orderService.computePrice(orderId, constraintId)
      .subscribe(
        order => {console.log(order); this.computedPrice = order;},
        (err) => console.log('Votre commande n\'a pas été trouvé')
      );
  }

  deliveryAndPay(orderId, constraintId) {
    this.orderService.deliveryAndPay(orderId, constraintId)
      .subscribe(
        order => {console.log(order); },
        err => console.log('Vous n\'avez assez d\'argent :)')
      );
  }

  getOrder(orderId) {
    this.orderService.getOrder(orderId)
      .subscribe(
        order => {console.log(order); },
        (err) => console.log('Votre commande n\'a pas été trouvé !'),
        // () => {this.route.navigate(['/']); } // [routerLink]="['/detail-meal/'}
      );
    console.log('hello');
  }

  findAll() {
    this.orderService.findAll()
      .subscribe( 
        data => {this.orders = data; this.meals = data.quantityMeals;
                 console.log(data);
                 data.forEach(element => {
                // this.todayMeal = element.meals;
                     this.quantityMealDefined = element.quantityMeals;
                     this.menuDefined = element.menu;
                     // console.log(element.menu);
                     // console.log(element);
          }); },
        (err) => console.log('Vous n\'ètes pas cantinière !'),
        () => { }
      );
  }

  findAllBetweenInStatus(beginDate, endDate, status) {
    this.orderService.findAllBetweenInStatus(beginDate, endDate, status)
      .subscribe(data => {console.log(data); this.orders = data; });
  }

  findAllForUser(userId) {
    this.orderService.findAllForUser(userId)
        .subscribe(orders => { this.orders = orders; console.log(orders); },
        (err) => { console.log('Vous n\'avez aucune commande'); });
  }

  findAllForUserToday(userId) {
    this.orderService.findAllForUserToday(userId)
          .subscribe(orders => { this.orders = orders; console.log(orders); },
              (err) => { console.log('Vous n\'avez aucune commande'); });
  }

  findAllUsers() {
    this.userService.findAll()
          .subscribe(users => { this.users = users; console.log('users'); },
              (err) => { console.log('Vous n\'ètes pas connectés / Vous n\'etes pas cantiniere'); });
  }

  allOrders() {
    this.findAll();
  }

  openModal(modalName) {
    this.filterModal = true;
    if(modalName === 'between_dates') {
      this.cliquedButton = 'between_dates';
    } else if(modalName === 'for_user') {
      this.findAllUsers();
      this.cliquedButton = 'for_user';
    } else if(modalName === 'for_user_today') {
      this.findAllUsers();
      this.cliquedButton = 'for_user_today';
    }
  }

  filterButton(buttonName) {
    this.filterModal = false;
    if(buttonName === 'between_dates') {
      if(this.beginDate && this.endDate && this.status) {
        const beginDate = moment(this.beginDate).format('DD-MM-YYYY');
        const endDate = moment(this.endDate).format('DD-MM-YYYY');
        this.findAllBetweenInStatus(beginDate, endDate, this.status);
      } else {
        console.log('No data entered');
      }
    } else if(buttonName === 'for_user') {
      if(this.lunchLady) {
        this.findAllForUser(this.userId);
      } else {
        console.log('Vous n\'ètes pas cantiniere');
      }
    } else if(buttonName === 'for_user_today') {
      if(this.lunchLady) {
        this.findAllForUserToday(this.userId);
      } else {
        console.log('Vous n\'ètes pas cantiniere');
      }
    }
  }

  closeModal() {
    this.filterModal = false;
  }
}
