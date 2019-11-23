import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";

import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripDetailPage2} from "../pages/trip-detail/trip-detail2";
import {TripDetailPage3} from "../pages/trip-detail/trip-detail3";
import {TripDetailPage4} from "../pages/trip-detail/trip-detail4";
import {TripDetailPage5} from "../pages/trip-detail/trip-detail5";
import {TripsPage} from "../pages/trips/trips";
import {TripsPage1} from "../pages/trips/trips1";
import {TripsPage2} from "../pages/trips/trips2";
import {TripsPage3} from "../pages/trips/trips3";
import {TripsPage4} from "../pages/trips/trips4";
import {TripsPage5} from "../pages/trips/trips5";
import {TripDetailPageAvecPourcentage} from "../pages/trip-detail/trip-detailAvecPourcentage";
import {TripDetailPage2AvecPourcentage} from "../pages/trip-detail/trip-detail2AvecPourcentage";
import {TripDetailPage3AvecPourcentage} from "../pages/trip-detail/trip-detail3AvecPourcentage";
import {TripDetailPage4AvecPourcentage} from "../pages/trip-detail/trip-detail4AvecPourcentage";
import {TripDetailPage5AvecPourcentage} from "../pages/trip-detail/trip-detail5AvecPourcentage";





import {LocalWeatherPage} from "../pages/local-weather/local-weather";

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripDetailPage2,
    TripDetailPage3,
    TripDetailPage4,
    TripDetailPage5,
    TripsPage,
    TripsPage1,
    TripsPage2,
    TripsPage3,
    TripsPage4,
    TripsPage5,
    TripDetailPageAvecPourcentage,
    TripDetailPage2AvecPourcentage,
    TripDetailPage3AvecPourcentage,
    TripDetailPage4AvecPourcentage,
    TripDetailPage5AvecPourcentage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripDetailPage2,
    TripDetailPage3,
    TripDetailPage4,
    TripDetailPage5,
    TripsPage,
    TripsPage1,
    TripsPage2,
    TripsPage3,
    TripsPage4,
    TripsPage5,
    TripDetailPageAvecPourcentage,
    TripDetailPage2AvecPourcentage,
    TripDetailPage3AvecPourcentage,
    TripDetailPage4AvecPourcentage,
    TripDetailPage5AvecPourcentage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider
  ]
})

export class AppModule {
}
