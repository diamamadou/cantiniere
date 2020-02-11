import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../ingredient';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
 Ingredients: Ingredient[];

  constructor(private IngredientsService: IngredientsService) { }
  showModal : boolean;  //Add
  showModal2 : boolean; //Update
  showModal3 : boolean; //Delete
  
  ngOnInit() {
    this.getIngredients();
  }

//Get Ingredients
  getIngredients(): void {
    this.IngredientsService.GetIngredients()
      .subscribe(Ingredients => this.Ingredients = Ingredients);
  }

//ADD Ingredient
Add(label: string): void 
{
  //console.log(form.value);
  this.showModal3 = true; // Show-Hide Modal Check
  label = label.trim();
  if(!label) {return;}
  this.IngredientsService.Add({ label } as Ingredient)
    .subscribe(Ingredients => {
      this.Ingredients.push(Ingredients);
    });
}

addIngredient(ingredient)
{
  this.showModal3 = true; 
  ingredient = ingredient.form.value;
  this.IngredientsService.addIngredient(ingredient
    .subscribe((Ingredients) => { this.Ingredients.push(Ingredients); }));
}

//DELETE Ingredients
Delete(ingredients: Ingredient): void {
  this.showModal2 = true; // Show-Hide Modal Check
  this.Ingredients = this.Ingredients.filter(h => h !== ingredients);
  this.IngredientsService.delete(ingredients).subscribe();
}

//Boostrap Modal Close Event
hide()
{
  this.showModal = false;
  this.showModal2 = false;
  this.showModal3 = false;
}
}
