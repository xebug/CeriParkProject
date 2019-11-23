import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {Storage} from '@ionic/storage';

import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";
import {TripsPage} from "../trips/trips";
import {TripsPage1} from "../trips/trips1";
import {TripsPage2} from "../trips/trips2";
import {TripsPage3} from "../trips/trips3";
import {TripsPage4} from "../trips/trips4";
import {TripsPage5} from "../trips/trips5";



import {SearchLocationPage} from "../search-location/search-location";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // search condition
  public search = {
    name: "Parking",
    date: new Date(new Date().getTime() - new Date().getTimezoneOffset()*60000).toISOString()
  }

  constructor(private storage: Storage, public nav: NavController, public popoverCtrl: PopoverController) {
  }

  ionViewWillEnter() {
    this.storage.get('pickup').then((val) => {
      if (val === null) {
        this.search.name = "Tous les parkings";
      } else {
        this.search.name = val;
      }
    }).catch((err) => {
      console.log(err)
    });
  }


  // go to result page
  doSearch() {
    if (this.search.name == "Tous les parkings") {
      this.nav.push(TripsPage);
    }
    else {
      if (this.search.name == "Parking 1") {
        console.log("tesRRt");
        this.nav.push(TripsPage1);
      }
      if (this.search.name == "Parking 2") {
        this.nav.push(TripsPage2);
      }
      if (this.search.name == "Parking 3") {
        this.nav.push(TripsPage3);
      }
      if (this.search.name == "Parking 4") {
        this.nav.push(TripsPage4);
      }
      if (this.search.name == "Parking 5") {
        this.nav.push(TripsPage5);
      }
    }
  }

  // choose place
  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }

  // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

}

//
