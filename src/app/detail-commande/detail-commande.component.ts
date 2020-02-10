import { Component, OnInit } from '@angular/core';
import {OrderService} from '../services/order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import { MenuService } from '../services/menu.service';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.css']
})
export class DetailCommandeComponent implements OnInit {

  order;
  key;
  computedPrice;
  cantiniere;

  confirmedModal;
  confirmModal;
  cliquedButton;
  selectedMenu;
  selectedMeal;
  meals;
  menus;

  UserId;
  Name;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private menuService: MenuService,
    private mealService: PlatService) {
    this.route.params
    .subscribe(params => {this.key = params.id; console.log(params.id); });
  }

  ngOnInit() {
    this.getOrder(this.key);
    this.computePrice(this.key, -1);
    const userInfos = this.authService.getUserInfo(this.authService.getToken());
    this.cantiniere = userInfos.user.isLunchLady;
    console.log(this.cantiniere);
  }

  getOrder(orderId) {
    this.orderService.getOrder(orderId)
      .subscribe(
        order => {console.log(order); this.order = order; },
        (err) => console.log('Votre commande n\'a pas été trouvé !'),
      );
  }

  computePrice(orderId, constraintId) {
    this.orderService.computePrice(orderId, constraintId)
      .subscribe(
        order => {console.log(order); this.computedPrice = order.priceDF; },
        (err) => console.log('Votre commande n\'a pas été trouvé')
      );
  }

  deliveryAndPay(orderId, constraintId) {
    this.orderService.deliveryAndPay(orderId, constraintId)
        .subscribe(
            order => { },
            err => { console.log('Vous n\'avez assez d\'argent :)'); },
            () => { console.log('La commande a été livrée');
            }
        );
  }

  cancelOrder(orderId) {
    this.orderService.cancelOrder(orderId)
        .subscribe(order => {  },
            (error) => { console.log('Votre commande n\'a pas été trouvé !'); },
            () => { console.log('La commande a été annulée')}
        );
  }

  getAllMenusForToday() {
    this.menuService.findAllAvailableForToday()
        .subscribe(data => { this.menus = data; }
        );
  }

  getAllMealsForToday() {
    this.mealService.findAllAvailableForToday()
        .subscribe(data => { this.meals = data; }
        );
  }

  updateOrder(orderId, userId) {
    const meal = this.selectedMeal;
    const menu = this.selectedMenu;
    if (this.selectedMenu) {
      console.log(menu);
      this.menuService.find(menu)
          .subscribe(data => {
            const order = {
              constraintId: -1,
              menuId: data.id,
              userId
            };
            this.orderService.updateOrder(orderId, order).subscribe(updatedOrder => {});
          });
    }
    if (this.selectedMeal) {
        console.log(meal);
        this.mealService.findOneMeal(meal)
            .subscribe(data => {
              const order = {
                constraintId: -1,
                quantityMeals: [
                  {
                    mealId: data.id,
                    quantity: 1,
                  },
                ],
                userId
              };
              this.orderService.updateOrder(orderId, order).subscribe(updatedOrder => {});
            });
    }
  }

  /*********************************************
   * Méthode permettant d'éffectuer les actions: 
   * livrer, annuler et modifier une commande
  ********************************************/

  openModal(action) {
    this.confirmModal = true;
    if(action === 'cancel') {
      this.cliquedButton = "cancel";
    } else if(action === 'modify') {
      this.cliquedButton = 'modify';
      this.getAllMenusForToday();
      this.getAllMealsForToday();
    } else if(action === 'deliver') {
      this.cliquedButton = 'deliver';
    }
  }

  confirmButton(orderId, userId, action) {
    this.confirmModal = false;
    if(action === 'cancel') {
      this.cliquedButton = "cancel";
      this.cancelOrder(orderId);
    } else if(action === 'modify') {
      this.cliquedButton = 'modify';
      this.updateOrder(orderId, userId);
      // console.log(this.selectedMenu);
      // console.log(this.selectedMeal);
    } else if(action === 'deliver') {
      this.cliquedButton = 'deliver';
      this.deliveryAndPay(orderId, -1);
    }
    this.confirmedModal = true;
  }

  closeModal(modalName) {
    this.confirmModal = false;
    if(modalName === 'confirmedModal') {
      this.confirmedModal = false;
      this.router.navigate(['/commande']);
    }
  }
}
