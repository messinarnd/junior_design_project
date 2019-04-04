// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodItem } from "../../model/food-item/food-item.model";
import { Storage } from "@ionic/storage";

const STORAGE_ID = "recentSearches";

/*
  Generated class for the RecentSearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecentSearchProvider {

  constructor(public storage: Storage) {
    console.log('Hello RecentSearchProvider Provider');
  }

  addToRecentSearches(food: FoodItem) {
    return this.getRecentSearches().then(result => {
      if (result) {
        result.unshift(food);
        return this.storage.set(STORAGE_ID, result);
      } else {
        return this.storage.set(STORAGE_ID, [food]);
      }
    });
  }

  removeFromRecentSearches(food: FoodItem) {
    return this.getRecentSearches().then(result => {
      if (result) {
        var index = -1;
        for (var i=0; i<result.length; i++) {
          if (result[i].name == food.name) {
              index = i;
              break;
          }
        }

        if (index != -1) {
          result.splice(index, 1);
        } else {
          console.log("Invalid index in remove from search function");
        }

        return this.storage.set(STORAGE_ID, result);
      }
    });
  }

  getRecentSearches() {
    return this.storage.get(STORAGE_ID);
  }

}
