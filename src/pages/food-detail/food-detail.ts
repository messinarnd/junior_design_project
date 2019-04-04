import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ToastController } from 'ionic-angular';

import { FoodItem } from '../../model/food-item/food-item.model';
import { FoodLogProvider } from "../../providers/food-log/food-log";
import { FoodItemsProvider } from '../../providers/food-items/food-items';

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
    lowSodium: false,
    lowSodiumEaten: false,
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
    public foodItemProvider: FoodItemsProvider) {

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
    this.myFood.sodiumEaten = sodiumEaten.toString();
    this.myFood.lowSodiumEaten = sodiumEaten < 767;

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

}
