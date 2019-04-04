import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FoodDetailPage } from '../pages/food-detail/food-detail';
import { FoodLogProvider } from '../providers/food-log/food-log';
import { RecentSearchProvider } from '../providers/recent-search/recent-search';
import { FoodItemsProvider } from '../providers/food-items/food-items';
import { BarcodeScannerPage } from '../pages/barcode-scanner/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FoodDetailPage,
    BarcodeScannerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FoodDetailPage,
    BarcodeScannerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FoodLogProvider,
    RecentSearchProvider,
    FoodItemsProvider
  ]
})
export class AppModule {}
