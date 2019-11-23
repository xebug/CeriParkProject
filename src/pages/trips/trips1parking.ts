import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {TripDetailPage} from "../trip-detail/trip-detail";
import {TripDetailPage2} from "../trip-detail/trip-detail2";
import {TripDetailPage3} from "../trip-detail/trip-detail3";
import {TripDetailPage4} from "../trip-detail/trip-detail4";
import {TripDetailPage5} from "../trip-detail/trip-detail5";
import {TripDetailPageAvecPourcentage} from "../trip-detail/trip-detailAvecPourcentage";
import {TripDetailPageAvecPourcentage2} from "../trip-detail/trip-detailAvecPourcentage2";
import {TripDetailPageAvecPourcentage3} from "../trip-detail/trip-detailAvecPourcentage3";
import {TripDetailPageAvecPourcentage4} from "../trip-detail/trip-detailAvecPourcentage4";
import {TripDetailPageAvecPourcentage5} from "../trip-detail/trip-detailAvecPourcentage5";


@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})

export class TripsPage {
  // list of trips
  public trips: any;
  bonparking=0;
  constructor(public nav: NavController, public tripService: TripService) {
    // set sample data
    ////this.trips = tripService.getAll();
    console.log("test");
    this.bonparking = tripService.calcul();
    this.viewDetail(this.parking);
  }



  // view trip detaild
  viewDetail(id) {
    console.log(id);
    console.log("creation TripDetailPage");

    if(this.bonparking==1)
    {
    this.nav.push(TripDetailPage);
    }
    if(this.bonparking==2)
    {
    console.log("ok");
    this.nav.push(TripDetailPage2);
    }
    if(this.bonparking==3)
    {
    this.nav.push(TripDetailPage3);
    }
    if(this.bonparking==4)
    {
    this.nav.push(TripDetailPage4);
    }
    if(this.bonparking==5)
    {
    this.nav.push(TripDetailPage5);
    }
    //this.nav.push(TripDetailPage, {id: id});
  }
}
