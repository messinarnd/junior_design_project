import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodItemsProvider } from '../../providers/food-items/food-items';
import { FoodDetailPage } from '../food-detail/food-detail';

/**
 * Generated class for the BarcodeScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html',
})
export class BarcodeScannerPage {

  exampleItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public foodItemProvider: FoodItemsProvider) {
    this.exampleItem = foodItemProvider.food1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScannerPage');
  }

  showFoodDetails() {
    this.navCtrl.push(FoodDetailPage, {
      food: this.exampleItem
    });
  }

}
