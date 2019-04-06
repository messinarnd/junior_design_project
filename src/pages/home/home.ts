import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Searchbar } from 'ionic-angular';

import { FoodItem } from '../../model/food-item/food-item.model';
import { FoodLogProvider } from "../../providers/food-log/food-log";
import { RecentSearchProvider } from '../../providers/recent-search/recent-search';

import { FoodDetailPage } from "../food-detail/food-detail";
import { FoodItemsProvider } from '../../providers/food-items/food-items';
import { BarcodeScannerPage } from '../barcode-scanner/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('mySearchbar') searchbar: Searchbar;

  allFoodItems = this.foodItemProvider.allFoodItems;
  tempFoodItems = [];
  beingSearched = false;
  recentlySearchedItems = [];
  loggedItems = [];
  loggedWithDates = [];
  loggedDates = [];
  loggedTotals = [];
  overLimit = [];

  myContent = "recentlySearched";

  constructor(public navCtrl: NavController, public foodLogProvider: FoodLogProvider, public recentSearchProvider: RecentSearchProvider, public foodItemProvider: FoodItemsProvider) {
    
  }

  ionViewWillEnter() {
    console.log("will enter home");
    
    this.updateLoggedItems();
    this.updateRecentlySearched();
    this.tempFoodItems = [];
    this.beingSearched = false;
  }

  // ionViewDidEnter() {
  //   console.log("Did enter home");
    
  //   this.updateLoggedItems();
  //   this.updateRecentlySearched();
  //   this.tempFoodItems = [];
  //   this.beingSearched = false;
  // }

  search(searchbar) {
    var str = searchbar.target.value;
    this.beingSearched = true;

    // If the user clears the searchbar, display nothing
    if (str.trim() == '') {
      this.tempFoodItems = [];
      this.beingSearched = false;
      return;
    }

    this.tempFoodItems = this.allFoodItems.filter((v) => {
      if (v.name.toLowerCase().indexOf(str.toLowerCase()) >= 0) {
        return true;
      } else {
        return false;
      }
    });
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    this.myContent = ev.value;
    this.updateLoggedItems();
  }

  showBarcodeScanner() {
    this.navCtrl.push(BarcodeScannerPage);
  }

  showFoodDetails(f: FoodItem) {
    this.navCtrl.push(FoodDetailPage, {
      food: f
    });
    
    // Clear Searchbar
    this.searchbar.setValue(null);
  }

  addToRecentSearches(f: FoodItem) {
    // First check if it is already in there and just change the order
    // My remove function only does something if the food item is actually found
    this.recentSearchProvider.removeFromRecentSearches(f).then(() => {
      this.recentSearchProvider.addToRecentSearches(f);
    });
  }

  removeFromRecentlySearched(f: FoodItem) {
    this.recentSearchProvider.removeFromRecentSearches(f).then(() => {
      this.updateRecentlySearched();
    });
  }

  unlogItem(f: FoodItem) {
    this.foodLogProvider.unlogItem(f).then(() => {
      this.updateLoggedItems();
    });
  }

  updateLoggedItems() {
    var myData;
    this.foodLogProvider.getAllFoodItems().then((result) => {
      console.log(result);
      this.loggedItems = result;
      myData = result;
    }).then(() => {
      this.loggedWithDates = [];
      var count = 0;
      this.loggedDates = [];
      this.loggedTotals = [];

      for (var i = 0; i < myData.length; i++) {
        var time = new Date(myData[i].timestamp)
        var date = time.toLocaleDateString();
        if (this.loggedDates.indexOf(date) < 0) {
          this.loggedDates.push(date);
          if (count != 0) {
            count++;
          }
          this.loggedWithDates.push({[date]: [myData[i]]});
          this.loggedTotals.push(myData[i].sodiumEaten);
          var total = parseInt(this.loggedTotals[count]) + parseInt(myData[i].sodiumEaten);
          if (total > 2300) {
            this.overLimit[count] = true;
          } else {
            this.overLimit[count] = false;
          }
          console.log(this.loggedWithDates);
        } else {
          console.log(this.loggedWithDates[count]);
          console.log(Object.keys(this.loggedWithDates[count]));
          console.log(this.loggedWithDates[count][date]);
          
          this.loggedWithDates[count][date].push(myData[i]);
          var total = parseInt(this.loggedTotals[count]) + parseInt(myData[i].sodiumEaten);
          this.loggedTotals[count] = (total).toString();
          if (total > 2300) {
            this.overLimit[count] = true;
          } else {
            this.overLimit[count] = false;
          }
        }
      }
      console.log(this.loggedWithDates);
    })
  }

  updateRecentlySearched() {
    this.recentSearchProvider.getRecentSearches().then((result) => {
      console.log(result);
      this.recentlySearchedItems = result;
    });
  }



  // Toggling the Accordion List stuff
  toggleSection(i) {
    console.log("toggling: ", i);
    
    this.loggedWithDates[i].open = !this.loggedWithDates[i].open;
    console.log(this.loggedWithDates[i].open);
    
  }

}
