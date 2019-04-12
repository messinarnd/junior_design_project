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
    sodiumQualifier: 'high',
    sodiumEatenQualifier: 'low',
    dailySodiumValue: 39,
    dailySodiumEatenValue: 0,
    servingsEaten: 0,
    timestamp: null
  }

  food2: FoodItem = {
    name: 'Health Valley Organic No Salt Added Chicken Noodle Soup',
    servingSize: '1 cup',
    sodiumPerServing: '110',
    sodiumWhole: '220',
    sodiumEaten: '',
    caloriesPerServing: '80',
    caloriesWhole: '140',
    sodiumQualifier: 'low',
    sodiumEatenQualifier: 'low',
    dailySodiumValue: 5,
    dailySodiumEatenValue: 0,
    servingsEaten: 0,
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
    sodiumQualifier: 'normal',
    sodiumEatenQualifier: 'low',
    dailySodiumValue: 14,
    dailySodiumEatenValue: 0,
    servingsEaten: 0,
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
    sodiumQualifier: 'normal',
    sodiumEatenQualifier: 'low',
    dailySodiumValue: 10,
    dailySodiumEatenValue: 0,
    servingsEaten: 0,
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
    sodiumQualifier: 'normal',
    sodiumEatenQualifier: 'low',
    dailySodiumValue: 11,
    dailySodiumEatenValue: 0,
    servingsEaten: 0,
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
    sodiumQualifier: 'normal',
    sodiumEatenQualifier: 'low',
    dailySodiumValue: 19,
    dailySodiumEatenValue: 0,
    servingsEaten: 0,
    timestamp: null
  }

  allFoodItems = [this.food1, this.food2, this.food3, this.food4, this.food5, this.food6];
  alternativeItems = [this.food2, this.food3];

  constructor() {
    console.log('Hello FoodItemsProvider Provider');
  }

}
// <=115: low
// >=460: high