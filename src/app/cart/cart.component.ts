import { Component, OnInit } from '@angular/core';
import { PlatService } from '../services/plat.service';
import { OrderService } from '../services/order.service';
import { AuthService } from '../services/auth.service';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  meal;
  menu;
  newOrder;
  userId;

  confirmedModal;
  confirmModal;
  cliquedButton;


  constructor(
    private mealService: PlatService,
    private orderService: OrderService,
    private authService: AuthService,
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit() {
    const userInfos = this.authService.getUserInfo(this.authService.getToken());
    if (userInfos) {
      this.userId = userInfos.user.id;
    } else {
      console.log('Vous n\'ètes pas connectés');
    }
    this.showMenuCart();
    this.showMealCart();
  }

  showMenuCart() {
    const search = 'menu';
    const values = Object.keys(localStorage)
        .filter( (key) => key.startsWith(search) )
        .map( (key) => localStorage[key] );
    values.forEach(menu => {
      this.menuService.find(menu.slice(-2))
          .subscribe(data => { this.menu = data; });
    });
  }

  showMealCart() {
    const search = 'meal';
    const values = Object.keys(localStorage)
        .filter( (key) => key.startsWith(search) )
        .map( (key) => localStorage[key] );
    values.forEach(meal => {console.log(meal.slice(-2))
      this.mealService.findOneMeal(meal.slice(-2))
          .subscribe(data => { this.meal = data; });
    });
  }

  addOrder(orderType) {
    if (orderType === 'meal') {
      this.newOrder = {
        constraintId : -1,
        quantityMeals: [
          {mealId: this.meal.id,
            quantity: 1
          }
        ],
        userId: this.userId
      };
    } else {
      this.newOrder = {
        constraintId : -1,
        menuId: this.menu.id,
        userId: this.userId
      };
    }

    console.log(this.newOrder);
    this.orderService.addOrder(this.newOrder)
        .subscribe(order => { console.log('order'); console.log('this.meal'); },
            (error) => { console.log('Vous ne pouvez pas commander à cette heure / Le nombre de commandes maximum est atteint !'); },
            () => {
              if (orderType === 'meal') {
                localStorage.removeItem('meal_' + this.meal.id);
              } else {
                localStorage.removeItem('menu_' + this.menu.id);
              }
              }
        );
  }

  openCartModal(orderType) {
    this.confirmModal = true;
    if(orderType === 'menu') {
      this.cliquedButton = 'menu';
    } else if(orderType === 'delete_menu') {
      this.cliquedButton = 'delete_menu';
    } else if(orderType === 'meal') {
      this.cliquedButton = 'meal';
    } else if(orderType === 'delete_meal') {
      this.cliquedButton = 'delete_meal';
    }
  }

  confirmButton(orderType) {
    this.confirmModal = false;
    this.confirmedModal = true;
    if(orderType === 'menu') {
      this.addOrder(orderType);
    } else if(orderType === 'delete_menu') {
      this.deleteOrder('menu');
    } else if(orderType === 'meal') {
      this.addOrder('meal');
    } else if(orderType === 'delete_meal') {
      this.deleteOrder('meal');
    }
  }

  closeModal(modalName, action) {
    this.confirmModal = false;
    // if(action === 'menu') {
    //   this.cliquedButton = 'menu';
    // }else if(action === 'delete_menu') {
    //   this.cliquedButton = 'delete_menu';
    // }

    if(modalName === 'confirmedModal') {
      this.confirmedModal = false;
      this.router.navigate(['/commande']);
    }
  }

  deleteOrder(orderType) {
    if (orderType === 'meal') {
      localStorage.removeItem('meal_' + this.meal.id);
    } else {
      localStorage.removeItem('menu_' + this.menu.id);
      location.reload();
    }
  }
}
