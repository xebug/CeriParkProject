import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {TripDetailPage} from "../trip-detail/trip-detail";
import {TripDetailPage2} from "../trip-detail/trip-detail2";
import {TripDetailPage3} from "../trip-detail/trip-detail3";
import {TripDetailPage4} from "../trip-detail/trip-detail4";
import {TripDetailPage5} from "../trip-detail/trip-detail5";
import {TripDetailPageAvecPourcentage} from "../trip-detail/trip-detailAvecPourcentage";
import {TripDetailPage2AvecPourcentage} from "../trip-detail/trip-detail2AvecPourcentage";
import {TripDetailPage3AvecPourcentage} from "../trip-detail/trip-detail3AvecPourcentage";
import {TripDetailPage4AvecPourcentage} from "../trip-detail/trip-detail4AvecPourcentage";
import {TripDetailPage5AvecPourcentage} from "../trip-detail/trip-detail5AvecPourcentage";


@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})

export class TripsPage4 {
  // list of tripsd
  public trips: any;
  bonparking=4;
  constructor(public nav: NavController, public tripService: TripService) {
    // set sample data
    ////this.trips = tripService.getAll();
    console.log("test");
    //this.bonparking = tripService.calcul();
    this.viewDetail(this.bonparking);
  }



  // view trip detail
  viewDetail(id) {
    console.log(id);
    console.log("creation TripDetailPage");

    if(this.bonparking==1)
    {
    this.nav.push(TripDetailPageAvecPourcentage);
    }
    if(this.bonparking==2)
    {
    this.nav.push(TripDetailPage2AvecPourcentage);
    }
    if(this.bonparking==3)
    {
    this.nav.push(TripDetailPage3AvecPourcentage);
    }
    if(this.bonparking==4)
    {
    this.nav.push(TripDetailPage4AvecPourcentage);
    }
    if(this.bonparking==5)
    {
    this.nav.push(TripDetailPage5AvecPourcentage);
    }
    //this.nav.push(TripDetailPage, {id: id});
  }
}
