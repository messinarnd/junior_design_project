import { Injectable } from '@angular/core';
import { FoodItem } from '../../model/food-item/food-item.model';

/*
  Generated class for the FoodItemsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodItemsProvider {

  food1: FoodItem = {
    name: 'Campbell\'s Chicken Noodle Soup',
    servingSize: '1/2 cup',
    sodiumPerServing: '890',
    sodiumWhole: '2225',
    sodiumEaten: '',
    caloriesPerServing: '60',
    caloriesWhole: '150',
    lowSodium: false,
    lowSodiumEaten: false,
    timestamp: null
  }

  food2: FoodItem = {
    name: 'Health Valley Organic No Salt Added Chicken Noodle Soup',
    servingSize: '1 cup',
    sodiumPerServing: '130',
    sodiumWhole: '220',
    sodiumEaten: '',
    caloriesPerServing: '80',
    caloriesWhole: '140',
    lowSodium: true,
    lowSodiumEaten: false,
    timestamp: null
  }

  food3: FoodItem = {
    name: 'Amy’s Organic Light in Sodium Lentil Vegetable Soup',
    servingSize: '1 cup',
    sodiumPerServing: '320',
    sodiumWhole: '740',
    sodiumEaten: '',
    caloriesPerServing: '160',
    caloriesWhole: '320',
    lowSodium: true,
    lowSodiumEaten: false,
    timestamp: null
  }

  food4: FoodItem = {
    name: 'Kraft Singles American Cheese Slices',
    servingSize: '1 slice',
    sodiumPerServing: '220',
    sodiumWhole: '220',
    sodiumEaten: '',
    caloriesPerServing: '60',
    caloriesWhole: '60',
    lowSodium: false,
    lowSodiumEaten: false,
    timestamp: null
  }

  food5: FoodItem = {
    name: 'Nature\'s Own Honey Wheat Bread',
    servingSize: '2 slices',
    sodiumPerServing: '250',
    sodiumWhole: '5000',
    sodiumEaten: '',
    caloriesPerServing: '140',
    caloriesWhole: '2800',
    lowSodium: true,
    lowSodiumEaten: false,
    timestamp: null
  }

  food6: FoodItem = {
    name: 'Publix Deli Tavern Ham',
    servingSize: '2 oz.',
    sodiumPerServing: '450',
    sodiumWhole: 'varied',
    sodiumEaten: '',
    caloriesPerServing: '80',
    caloriesWhole: 'varied',
    lowSodium: false,
    lowSodiumEaten: false,
    timestamp: null
  }

  allFoodItems = [this.food1, this.food2, this.food3, this.food4, this.food5, this.food6];
  alternativeItems = [this.food2, this.food3];

  constructor() {
    console.log('Hello FoodItemsProvider Provider');
  }

}
