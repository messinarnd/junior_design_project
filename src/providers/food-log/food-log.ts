import { Injectable } from '@angular/core';
import { FoodItem } from '../../model/food-item/food-item.model';
import { Storage } from "@ionic/storage";

const STORAGE_ID = 'foodLog';

/*
  Generated class for the FoodLogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodLogProvider {

  constructor(public storage: Storage) {
    console.log('Hello FoodLogProvider Provider');
  }

  logItem(food: FoodItem) {
    return this.getAllFoodItems().then(result => {
      if (result) {
        result.unshift(food);
        return this.storage.set(STORAGE_ID, result);
      } else {
        return this.storage.set(STORAGE_ID, [food]);
      }
    });
  }

  unlogItem(food: FoodItem) {
    // console.log("time: ", food.timestamp);
    return this.getAllFoodItems().then(result => {
      if (result) {
        var index = -1;
        for (var i=0; i<result.length; i++) {
          // console.log("result time: ", result[i].timestamp);
          if (result[i].timestamp == food.timestamp) {
              index = i;
              break;
          }
        }

        if (index != -1) {
          result.splice(index, 1);
        } else {
          console.log("Invalid index in unlog item function");
        }

        return this.storage.set(STORAGE_ID, result);
      }
    });
  }

  getAllFoodItems() {
    return this.storage.get(STORAGE_ID);
  }

}
