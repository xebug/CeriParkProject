import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {CheckoutTripPage} from "../checkout-trip/checkout-trip";

@Component({
  selector: 'page-trip-detail',
  templateUrl: 'trip-detailAvecPourcentage.html'
})
export class TripDetailPage3AvecPourcentage {
  // trip info
  public trip: any;
  // number of adultde
  public adults = 2;
  // number of childrenn
  public children = 0;

  public pourcentage = 0;
  constructor(public nav: NavController, public tripService: TripService) {
    // set sample datad
    this.pourcentage = this.calculPourcentage();
    this.trip = tripService.getItem(3);
  }


 calculPourcentage()
 {
   var numParking = 3;
   var tabNumParking = numParking - 1;

   //Fonction pour récupérer la semaine
   Date.prototype.getWeek = function() {
     var date = new Date(this.getTime());
     date.setHours(0, 0, 0, 0);
     // Thursday in current week decides the year.
     date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
     // January 4 is always in week 1.
     var week1 = new Date(date.getFullYear(), 0, 4);
     // Adjust to Thursday in week 1 and count number of weeks from date to week1.
     return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
   }


   //Tableau semaines alternantes ou non
   // 1 s'ils sont en entreprise
   //0 s'ils sont formation au CERI
   var alternant = [1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

   //Tableau pour les données de chaque jour
   var tabData = new Array();

   //SANS ALTERNANTS
   tabData["lundiNonAlt8h30"] = [32, 46, 46, 8, 26];
   tabData["lundiNonAlt10h0"] = [27, 27, 19, 8, 17];
   tabData["lundiNonAlt11h30"] = [30, 21, 15, 15, 29];
   tabData["lundiNonAlt13h0"] = [36, 29, 26, 24, 9];
   tabData["lundiNonAlt14h30"] = [36, 10, 20, 10, 16];
   tabData["lundiNonAlt16h0"] = [52, 48, 33, 56, 52];
   tabData["lundiNonAlt17h30"] = [82, 79, 70, 76, 91];

   tabData["mardiNonAlt8h30"] = [14, 56, 37, 31, 69];
   tabData["mardiNonAlt10h0"] = [23, 19, 15, 10, 22];
   tabData["mardiNonAlt11h30"] = [25, 13, 17, 27, 17];
   tabData["mardiNonAlt13h0"] = [23, 23, 17, 27, 22];
   tabData["mardiNonAlt14h30"] = [11, 10, 19, 13, 12];
   tabData["mardiNonAlt16h0"] = [18, 44, 33, 31, 31];
   tabData["mardiNonAlt17h30"] = [73, 85, 70, 65, 83];

   tabData["mercrediNonAlt8h30"] = [27, 29, 17, 27, 50];
   tabData["mercrediNonAlt10h0"] = [14, 19, 11, 2, 17];
   tabData["mercrediNonAlt11h30"] = [9, 19, 11, 8, 14];
   tabData["mercrediNonAlt13h0"] = [20, 25, 20, 23, 31];
   tabData["mercrediNonAlt14h30"] = [16, 19, 17, 13, 14];
   tabData["mercrediNonAlt16h0"] = [25, 31, 24, 26, 33];
   tabData["mercrediNonAlt17h30"] = [30, 19, 41, 31, 16];

   tabData["jeudiNonAlt8h30"] = [23, 23, 4, 15, 41];
   tabData["jeudiNonAlt10h0"] = [2, 2, 7, 5, 0];
   tabData["jeudiNonAlt11h30"] = [16, 10, 13, 6, 7];
   tabData["jeudiNonAlt13h0"] = [0, 6, 0, 5, 0];
   tabData["jeudiNonAlt14h30"] = [9, 6, 7, 3, 3];
   tabData["jeudiNonAlt16h0"] = [39, 31, 31, 31, 57];
   tabData["jeudiNonAlt17h30"] = [70, 58, 67, 48, 71];

   tabData["vendrediNonAlt8h30"] = [11, 13, 13, 8, 24];
   tabData["vendrediNonAlt10h0"] = [11, 4, 7, 0, 5];
   tabData["vendrediNonAlt11h30"] = [57, 27, 43, 24, 29];
   tabData["vendrediNonAlt13h0"] = [57, 46, 31, 32, 22];
   tabData["vendrediNonAlt14h30"] = [34, 45, 39, 19, 14];
   tabData["vendrediNonAlt16h0"] = [61, 65, 65, 53, 50];
   tabData["vendrediNonAlt17h30"] = [86, 71, 69, 74, 85];

   // AVEC ALTERNANTS
   tabData["lundiAlt8h30"] = [14, 27, 18, 14, 43];
   tabData["lundiAlt10h0"] = [7, 6, 0, 0, 0];
   tabData["lundiAlt11h30"] = [18, 19, 9, 23, 15];
   tabData["lundiAlt13h0"] = [14, 19, 15, 13, 7];
   tabData["lundiAlt14h30"] = [34, 10, 11, 2, 2];
   tabData["lundiAlt16h0"] = [25, 31, 26, 21, 21];
   tabData["lundiAlt17h30"] = [61, 58, 61, 52, 59];

   tabData["mardiAlt8h30"] = [5, 23, 13, 3, 40];
   tabData["mardiAlt10h0"] = [2, 8, 4, 0, 2];
   tabData["mardiAlt11h30"] = [25, 4, 13, 13, 16];
   tabData["mardiAlt13h0"] = [25, 8, 4, 3, 2];
   tabData["mardiAlt14h30"] = [5, 4, 2, 3, 7];
   tabData["mardiAlt16h0"] = [30, 35, 30, 42, 47];
   tabData["mardiAlt17h30"] = [55, 56, 48, 76, 66];

   tabData["mercrediAlt8h30"] = [14, 19, 24, 0, 22];
   tabData["mercrediAlt10h0"] = [0, 0, 2, 0, 3];
   tabData["mercrediAlt11h30"] = [7, 31, 22, 15, 9];
   tabData["mercrediAlt13h0"] = [41, 17, 15, 15, 14];
   tabData["mercrediAlt14h30"] = [16, 10, 6, 2, 9];
   tabData["mercrediAlt16h0"] = [25, 17, 24, 24, 18];
   tabData["mercrediAlt17h30"] = [43, 48, 46, 63, 52];

   tabData["jeudiAlt8h30"] = [33, 52, 44, 29, 35];
   tabData["jeudiAlt10h0"] = [23, 35, 19, 8, 35];
   tabData["jeudiAlt11h30"] = [30, 48, 30, 34, 45];
   tabData["jeudiAlt13h0"] = [20, 40, 23, 11, 48];
   tabData["jeudiAlt14h30"] = [20, 29, 17, 16, 38];
   tabData["jeudiAlt16h0"] = [41, 48, 34, 34, 43];
   tabData["jeudiAlt17h30"] = [59, 60, 59, 56, 78];

   tabData["vendrediAlt8h30"] = [50, 42, 20, 24, 48];
   tabData["vendrediAlt10h0"] = [27, 35, 17, 11, 33];
   tabData["vendrediAlt11h30"] = [39, 48, 30, 31, 41];
   tabData["vendrediAlt13h0"] = [14, 42, 19, 18, 40];
   tabData["vendrediAlt14h30"] = [25, 38, 24, 11, 41];
   tabData["vendrediAlt16h0"] = [30, 46, 59, 58, 67];
   tabData["vendrediAlt17h30"] = [70, 63, 67, 68, 85];


   // Date actuelle
   var d = new Date();
   var jourSemaine= ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
   var jour = jourSemaine[d.getDay()-1];
   var heure = d.getHours();
   var minute = d.getMinutes();
   var semaine = (d.getWeek())-1;

   var alt;

   /* POUR TEST */
   //var jour = "dimanche"
   //var heure = 7;
   //var minute = 44;

   //Conditions heures et jours
   if (jour == "samedi" || jour == "dimanche") {
     jour = "lundi";
     heure = 8;
     minute = 30;
     semaine = semaine+1;
   }
   else {
     if (heure >= 18) {
       if (jour == "vendredi") {
         jour = "lundi";
         semaine = semaine+1;
       }
       else {
         jour = jourSemaine[d.getDay()];
       }
       heure = 8;
       minute = 30;
     }
     else if (heure <= 8) {
       heure = 8;
       minute = 30;
     }
     else if (heure == 9) {
       if (minute >= 15) {
         heure = 10;
         minute = 0;
       }
       else {
         heure = 8;
         minute = 30;
       }
     }
     else if (heure == 10) {
       if (minute >= 45) {
         heure = 11;
         minute = 30;
       }
       else {
         minute = 0;
       }
     }
     else if (heure == 11) {
       minute = 30;
     }
     else if (heure == 12) {
       if (minute >= 15) {
         heure = 13;
         minute = 0;
       }
       else {
         heure = 11;
         minute = 30;
       }
     }
     else if (heure == 13) {
       if (minute >= 45) {
         heure = 14;
         minute = 30;
       }
       else {
         minute = 0;
       }
     }
     else if (heure == 14) {
       minute = 30;
     }
     else if (heure == 15) {
       if (minute >= 15) {
         heure = 16;
         minute = 0;
       }
       else {
         heure = 14;
         minute = 30;
       }
     }
     else if (heure == 16) {
       if (minute >= 45) {
         heure = 17;
         minute = 30;
       }
       else {
         minute = 0;
       }
     }
     else if (heure == 17) {
       minute = 30;
     }
   }

   //Si les alternants sont la ou pas
   if(alternant[semaine] == 1) {
     alt = "NonAlt";
   }
   else {
     alt = "Alt";
   }

   //Valeur à chercher dans le tableau
   var aChercher = jour+alt+heure+"h"+minute;
   console.log("DATE : " +aChercher);


   var resultat = tabData[aChercher][tabNumParking];
   console.log("Le pourcentage de places dispos au parking "+ numParking + " est de : "+ resultat + "%");

   //document.body.innerHTML = "Le calcul va être effectué pour le "+ jour + " à " + heure + "h" + minute;

   return resultat;

 }
  // minus adult when click minus button
  minusAdult() {
    this.adults--;
  }

  // plus adult when click plus button
  plusAdult() {
    this.adults++;
  }

  // minus children when click minus button
  minusChildren() {
    this.children--;
  }

  // plus children when click plus button
  plusChildren() {
    this.children++;
  }

  // go to checkout page
  checkout() {
    this.nav.push(CheckoutTripPage);
  }
}
