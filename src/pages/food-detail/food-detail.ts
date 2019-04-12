import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ToastController } from 'ionic-angular';

import { FoodItem } from '../../model/food-item/food-item.model';
import { FoodLogProvider } from "../../providers/food-log/food-log";
import { FoodItemsProvider } from '../../providers/food-items/food-items';
import { RecentSearchProvider } from "../../providers/recent-search/recent-search";

/**
 * Generated class for the FoodDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-detail',
  templateUrl: 'food-detail.html',
})
export class FoodDetailPage {

  myFood: FoodItem = {
    name: '',
    servingSize: '',
    sodiumPerServing: '',
    sodiumWhole: '',
    sodiumEaten: '',
    caloriesPerServing: '',
    caloriesWhole: '',
    sodiumQualifier: '',
    sodiumEatenQualifier: '',
    dailySodiumValue: 0,
    dailySodiumEatenValue: 0,
    servingsEaten: 0,
    timestamp: null
  };

  alternativeFoods = this.foodItemProvider.alternativeItems;

  myContent = 'details';
  measurement = 'servings';
  amount: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public foodLogProvider: FoodLogProvider,
    public toastController: ToastController,
    public foodItemProvider: FoodItemsProvider,
    public recentSearchProvider: RecentSearchProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodDetailPage');
    this.myFood = this.navParams.get('food');
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    this.myContent = ev.value;
  }

  logFoodItem() {
    var sodiumEaten = Math.round(parseFloat(this.amount) * parseFloat(this.myFood.sodiumPerServing));
    this.myFood.servingsEaten = parseFloat(this.amount);
    this.myFood.dailySodiumEatenValue = this.myFood.dailySodiumValue * this.myFood.servingsEaten;

    this.myFood.sodiumEaten = sodiumEaten.toString();
    if (sodiumEaten <= 115) {
      this.myFood.sodiumEatenQualifier = 'low';
    } else if (sodiumEaten >= 460) {
      this.myFood.sodiumEatenQualifier = 'high';
    } else {
      this.myFood.sodiumEatenQualifier = 'normal';
    }
    

    //Set timestamp
    var usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    var time = new Date(usaTime);
    this.myFood.timestamp = time.toString();

    this.foodLogProvider.logItem(this.myFood).then(() => {
      // this.foodLogProvider.getAllFoodItems();
    });

    // Have a toast that says item logged
    // Then pop the food detail page
    this.presentToast();
    this.navCtrl.pop();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Food Item Logged!',
      duration: 2000
    });
    toast.present();
  }

  showFoodDetails(f: FoodItem) {
    this.navCtrl.push(FoodDetailPage, {
      food: f
    });
  }

  addToRecentSearches(f: FoodItem) {
    // First check if it is already in there and just change the order
    // My remove function only does something if the food item is actually found
    this.recentSearchProvider.removeFromRecentSearches(f).then(() => {
      this.recentSearchProvider.addToRecentSearches(f);
    });
  }

}
