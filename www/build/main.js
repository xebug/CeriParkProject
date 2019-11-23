webpackJsonp([0],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_trips__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripService = (function () {
    function TripService() {
        this.trips = __WEBPACK_IMPORTED_MODULE_1__mock_trips__["a" /* TRIPS */];
    }
    TripService.prototype.getAll = function () {
        return this.trips;
    };
    TripService.prototype.calcul = function () {
        //Fonction pour récupérer la semainee
        Date.prototype.getWeek = function (start) {
            var date = new Date(this.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                - 3 + (week1.getDay() + 6) % 7) / 7);
        };
        //PARKINGS
        var parking = [0.165413533834587, 0.180451127819549, 0.203007518796992, 0.233082706766917, 0.218045112781955];
        //Tableau semaines alternantes ou non
        // 1 s'ils sont en entreprise
        //0 s'ils sont formation au CERI
        var alternant = [1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        //Tableau pour les données de chaque jour
        var tabData = new Array();
        //SANS ALTERNANTS
        tabData["lundiNonAlt8h30"] = [0.201074929, 0.289914638001897, 0.292443882390136, 0.0531141321530193, 0.163452418589946];
        tabData["lundiNonAlt10h0"] = [0.278145695364238, 0.275598573611819, 0.188487009679063, 0.0825267447784004, 0.17524197656648];
        tabData["lundiNonAlt11h30"] = [0.270976616231087, 0.191196698762036, 0.135717560751949, 0.133425034387895, 0.268684089867033];
        tabData["lundiNonAlt13h0"] = [0.292673107890499, 0.234702093397746, 0.2085346215781, 0.194847020933977, 0.0692431561996779];
        tabData["lundiNonAlt14h30"] = [0.393611261505144, 0.113156469951272, 0.220357336220899, 0.105035192203573, 0.167839740119112];
        tabData["lundiNonAlt16h0"] = [0.216922438822065, 0.19888013272501, 0.138116963915388, 0.231646619659892, 0.214433844877644];
        tabData["lundiNonAlt17h30"] = [0.205244009534563, 0.198594906536194, 0.17664032116422, 0.190189436708067, 0.229331326056956];
        tabData["mardiNonAlt8h30"] = [0.0660856935366739, 0.272331154684096, 0.179133381747761, 0.148390220285645, 0.334059549745824];
        tabData["mardiNonAlt10h0"] = [0.257352941176471, 0.21210407239819, 0.167420814479638, 0.10972850678733, 0.253393665158371];
        tabData["mardiNonAlt11h30"] = [0.253164556962025, 0.126582278481013, 0.168607594936709, 0.27746835443038, 0.174177215189873];
        tabData["mardiNonAlt13h0"] = [0.202588130298974, 0.204373047746542, 0.14859437751004, 0.244533690316823, 0.199910754127622];
        tabData["mardiNonAlt14h30"] = [0.174079754601227, 0.159509202453988, 0.283742331288344, 0.197852760736196, 0.184815950920245];
        tabData["mardiNonAlt16h0"] = [0.115715651896717, 0.278928912974179, 0.212304749760918, 0.195409627032196, 0.19764105833599];
        tabData["mardiNonAlt17h30"] = [0.193561261141413, 0.227218305174937, 0.187308766795264, 0.171611015032593, 0.220300651855794];
        tabData["mercrediNonAlt8h30"] = [0.181395348837209, 0.193687707641196, 0.11063122923588, 0.182059800664452, 0.332225913621262];
        tabData["mercrediNonAlt10h0"] = [0.219101123595506, 0.300963081861958, 0.178170144462279, 0.0256821829855538, 0.276083467094703];
        tabData["mercrediNonAlt11h30"] = [0.148971193415638, 0.308641975308642, 0.182716049382716, 0.133333333333333, 0.226337448559671];
        tabData["mercrediNonAlt13h0"] = [0.171201339472583, 0.209292591042277, 0.170364169108414, 0.189200502302219, 0.259941398074508];
        tabData["mercrediNonAlt14h30"] = [0.203846153846154, 0.240384615384615, 0.213461538461538, 0.165384615384615, 0.176923076923077];
        tabData["mercrediNonAlt16h0"] = [0.180050414115952, 0.225063017644941, 0.173208498379546, 0.185812027367663, 0.235866042491898];
        tabData["mercrediNonAlt17h30"] = [0.218645948945616, 0.13873473917869, 0.301146873843877, 0.226785053644099, 0.114687384387717];
        tabData["jeudiNonAlt8h30"] = [0.215676959619952, 0.217577197149644, 0.0351543942992874, 0.138242280285036, 0.393349168646081];
        tabData["jeudiNonAlt10h0"] = [0.135542168674699, 0.126506024096386, 0.44578313253012, 0.292168674698795, 0];
        tabData["jeudiNonAlt11h30"] = [0.302568981921979, 0.19790675547098, 0.246431969552807, 0.122740247383444, 0.13035204567079];
        tabData["jeudiNonAlt13h0"] = [0, 0.563063063063063, 0, 0.436936936936937, 0];
        tabData["jeudiNonAlt14h30"] = [0.30952380952381, 0.212585034013605, 0.251700680272109, 0.110544217687075, 0.115646258503401];
        tabData["jeudiNonAlt16h0"] = [0.204605611434621, 0.165431445209105, 0.166490206458444, 0.162255161461091, 0.301217575436739];
        tabData["jeudiNonAlt17h30"] = [0.223935155753338, 0.185473617291799, 0.212015257469803, 0.153846153846154, 0.224729815638907];
        tabData["vendrediNonAlt8h30"] = [0.164373642288197, 0.181028240405503, 0.187545257060101, 0.117306299782766, 0.349746560463432];
        tabData["vendrediNonAlt10h0"] = [0.403914590747331, 0.149466192170818, 0.263345195729537, 0, 0.183274021352313];
        tabData["vendrediNonAlt11h30"] = [0.315921089191442, 0.150319533203668, 0.236454570714087, 0.134481800500139, 0.162823006390664];
        tabData["vendrediNonAlt13h0"] = [0.301032565528197, 0.242785279322213, 0.166534286470744, 0.171035213132115, 0.11861265554673];
        tabData["vendrediNonAlt14h30"] = [0.225231175693527, 0.299537648612946, 0.256605019815059, 0.1278071334214, 0.0908190224570674];
        tabData["vendrediNonAlt16h0"] = [0.208673469387755, 0.219557823129252, 0.220578231292517, 0.181122448979592, 0.170068027210884];
        tabData["vendrediNonAlt17h30"] = [0.224736636753804, 0.184289244375081, 0.178306671868904, 0.192872935362206, 0.219794511640005];
        // AVEC ALTERNANTS
        tabData["lundiAlt8h30"] = [0.116488223, 0.231691649, 0.158458244, 0.124197002, 0.369164882];
        tabData["lundiAlt10h0"] = [0.521072796934866, 0.478927203065134, 0, 0, 0];
        tabData["lundiAlt11h30"] = [0.215430267062315, 0.222551928783383, 0.109792284866469, 0.268249258160237, 0.183976261127596];
        tabData["lundiAlt13h0"] = [0.203136669156087, 0.280059746079164, 0.221060492905153, 0.192681105302465, 0.103061986557132];
        tabData["lundiAlt14h30"] = [0.577152600170503, 0.177323103154305, 0.18925831202046, 0.0272804774083546, 0.0289855072463768];
        tabData["lundiAlt16h0"] = [0.202020202020202, 0.252525252525253, 0.209292929292929, 0.169292929292929, 0.166868686868687];
        tabData["lundiAlt17h30"] = [0.210788524308538, 0.200481017007387, 0.210101357155128, 0.177289125579797, 0.20133997594915];
        tabData["mardiAlt8h30"] = [0.0546546546546547, 0.275075075075075, 0.155555555555556, 0.0384384384384384, 0.476276276276276];
        tabData["mardiAlt10h0"] = [0.140625, 0.521875, 0.23125, 0, 0.10625];
        tabData["mardiAlt11h30"] = [0.354358610914245, 0.0588235294117647, 0.183557760453579, 0.183557760453579, 0.219702338766832];
        tabData["mardiAlt13h0"] = [0.595947556615018, 0.197854588796186, 0.0882002383790226, 0.0774731823599523, 0.0405244338498212];
        tabData["mardiAlt14h30"] = [0.219806763285024, 0.202898550724638, 0.0893719806763285, 0.154589371980676, 0.333333333333333];
        tabData["mardiAlt16h0"] = [0.161255115961801, 0.193178717598909, 0.16343792633015, 0.228103683492497, 0.254024556616644];
        tabData["mardiAlt17h30"] = [0.181681931723564, 0.187343880099917, 0.160366361365529, 0.252456286427977, 0.218151540383014];
        tabData["mercrediAlt8h30"] = [0.17258883248731, 0.237944162436548, 0.305203045685279, 0, 0.284263959390863];
        tabData["mercrediAlt10h0"] = [0, 0, 0.349056603773585, 0, 0.650943396226415];
        tabData["mercrediAlt11h30"] = [0.0815347721822542, 0.374700239808154, 0.266187050359712, 0.174460431654676, 0.103117505995204];
        tabData["mercrediAlt13h0"] = [0.406156901688183, 0.165342601787488, 0.146971201588878, 0.144488579940417, 0.137040714995035];
        tabData["mercrediAlt14h30"] = [0.377672209026128, 0.248218527315914, 0.131828978622328, 0.0380047505938242, 0.204275534441805];
        tabData["mercrediAlt16h0"] = [0.230627306273063, 0.154059040590406, 0.221863468634686, 0.223247232472325, 0.17020295202952];
        tabData["mercrediAlt17h30"] = [0.171394564570522, 0.190041658401111, 0.183693711565166, 0.249553659988098, 0.205316405475104];
        tabData["jeudiAlt8h30"] = [0.169865145228216, 0.270228215767635, 0.230290456431535, 0.150674273858921, 0.178941908713693];
        tabData["jeudiAlt10h0"] = [0.190775681341719, 0.29727463312369, 0.155136268343816, 0.0675052410901468, 0.289308176100629];
        tabData["jeudiAlt11h30"] = [0.159127625201939, 0.257942918686053, 0.159396876682822, 0.182283252557889, 0.241249326871298];
        tabData["jeudiAlt13h0"] = [0.143357868909919, 0.277602523659306, 0.161233788994041, 0.0792148615492464, 0.338590956887487];
        tabData["jeudiAlt14h30"] = [0.169991687448047, 0.242310889443059, 0.138403990024938, 0.134247714048213, 0.315045719035744];
        tabData["jeudiAlt16h0"] = [0.204807210816224, 0.240110165247872, 0.169504256384577, 0.169754631947922, 0.215823735603405];
        tabData["jeudiAlt17h30"] = [0.188908422566725, 0.193063768579191, 0.189547706568643, 0.180437909541314, 0.248042192744127];
        tabData["vendrediAlt8h30"] = [0.271076172404446, 0.225806451612903, 0.110328002168609, 0.131200867443752, 0.26158850637029];
        tabData["vendrediAlt10h0"] = [0.220826580226904, 0.287277147487844, 0.134927066450567, 0.0915721231766613, 0.265397082658023];
        tabData["vendrediAlt11h30"] = [0.205209994683679, 0.25465178096757, 0.157363104731526, 0.16294524189261, 0.219829877724615];
        tabData["vendrediAlt13h0"] = [0.104039634146341, 0.317454268292683, 0.141006097560976, 0.135289634146341, 0.302210365853659];
        tabData["vendrediAlt14h30"] = [0.179597701149425, 0.269396551724138, 0.172772988505747, 0.0811781609195402, 0.297054597701149];
        tabData["vendrediAlt16h0"] = [0.113675706866705, 0.176380073090979, 0.227928447778419, 0.22331217541835, 0.258703596845547];
        tabData["vendrediAlt17h30"] = [0.200056793979838, 0.177481186994179, 0.189407922760187, 0.193099531449666, 0.23995456481613];
        // Date actuelle
        var d = new Date();
        var jourSemaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
        var jour = jourSemaine[d.getDay() - 1];
        var heure = d.getHours();
        var minute = d.getMinutes();
        var start = 1;
        var semaine = (d.getWeek(start)) - 1;
        var alt;
        /* POUR TEST */
        //var jour = "vendredi"
        //var heure = 7;
        //var minute = 44;
        //Conditions heures et jours
        if (jour == "samedi" || jour == "dimanche") {
            jour = "lundi";
            heure = 8;
            minute = 30;
            semaine = semaine + 1;
        }
        else {
            if (heure >= 18) {
                if (jour == "vendredi") {
                    jour = "lundi";
                    semaine = semaine + 1;
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
        if (alternant[semaine] == 1) {
            alt = "NonAlt";
        }
        else {
            alt = "Alt";
        }
        //Valeur à chercher dans le tableau
        var aChercher = jour + alt + heure + "h" + minute;
        console.log("A chercher " + aChercher);
        // Valeur X
        // X = Proba1 * ValPlacesLibres + Proba2 * NbPlaces
        // calcul[i] = proba1 * tabData[aChercher][i] + proba2 * parking[i];
        // Proba1 + Proba2 = 1
        var proba1 = 0.8;
        var proba2 = 1 - proba1;
        var calcul = [];
        for (var i = 0; i < 5; i++) {
            calcul[i] = proba1 * tabData[aChercher][i] + proba2 * parking[i];
        }
        console.log("Tableau des valeurs à " + heure + "h" + minute + " le " + jour + " " + alt + " : " + calcul);
        var parkingNumero = calcul.indexOf(Math.max.apply(Math, calcul));
        console.log("Plus grande valeur à l'indice " + parkingNumero + " valeurs = " + calcul[parkingNumero]);
        parkingNumero += 1;
        console.log("Nous vous conseillons de vous garer au parking " + parkingNumero);
        return parkingNumero;
    };
    TripService.prototype.getItem = function (id) {
        console.log(id);
        for (var i = 0; i < this.trips.length; i++) {
            if (this.trips[i].id === parseInt(id)) {
                //return this.trips[i];
                return this.trips[i];
            }
        }
        return null; //remettre null;
    };
    TripService.prototype.remove = function (item) {
        this.trips.splice(this.trips.indexOf(item), 1);
    };
    return TripService;
}());
TripService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TripService);

//# sourceMappingURL=trip-service.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutTripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutTripPage = (function () {
    function CheckoutTripPage(nav, tripService, loadingCtrl, toastCtrl) {
        this.nav = nav;
        this.tripService = tripService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        // number of adults
        this.adults = 2;
        // date
        this.date = new Date();
        this.paymethods = 'creditcard';
        // set sample data
        this.trip = tripService.getItem(1);
    }
    // process send button
    CheckoutTripPage.prototype.send = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Veuillez attendre..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profile-bg',
            message: 'Book Activity Success!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, 3000);
    };
    return CheckoutTripPage;
}());
CheckoutTripPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checkout-trip',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/checkout-trip/checkout-trip.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Activity Checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="checkout-trip common-bg">\n  <!--trip information-->\n  <div class="trip-info card round">\n    <div class="trip-image border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.thumb + \')\'}"></div>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col width-66>\n          <h5 ion-text color="primary">{{ trip.name }}</h5>\n          <div>\n            <span class="bold">{{ trip.sub_name }}</span>\n            <br/>\n            <span ion-text color="dark">{{ adults }} Adults</span>\n          </div>\n          <div margin-top>\n            <span ion-text color="dark">{{ date | date: \'EEE, MMM dd\' }}</span>\n            <br/>\n            <span ion-text>{{ trip.location }}</span>\n          </div>\n          <div margin-top>\n            <ion-icon name="checkmark" class="text-green" *ngIf="trip.free_cancellation"></ion-icon>\n            <span ion-text *ngIf="trip.free_cancellation">Free cancellation</span>\n          </div>\n        </ion-col>\n        <ion-col col-4>\n          <span ion-text>Total with Tax</span>\n          <h5 ion-text color="primary" class="bold" no-margin>{{ trip.price_adult * adults | currency:\'USD\':true }}</h5>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n    <!--more info-->\n  <h5>Guest Details</h5>\n  <div class="card round" margin-top>\n\n    <ion-list no-margin>\n      <ion-item class="primary-bg">\n        <ion-avatar item-start>\n          <img src="assets/img/avatar.jpeg">\n        </ion-avatar>\n        <h2 ion-text class="text-white bold">João Firmino</h2>\n        <p ion-text class="text-secondary bold">User</p>\n      </ion-item>\n    </ion-list>\n\n    <div padding>\n      <h5 ion-text color="secondary">Other Guests</h5>\n\n      <ion-item no-padding>\n        <ion-label color="dark" stacked>Adult 1 Name:</ion-label>\n        <ion-input type="text" placeholder="Ex. Joe Doe" value=""></ion-input>\n      </ion-item>\n      <ion-item no-padding>\n        <ion-label color="dark" stacked>Child 1 Name:</ion-label>\n        <ion-input type="text" placeholder="Ex. Joe Doe" value=""></ion-input>\n      </ion-item>\n    </div>\n  </div>\n\n  <!--payment info-->\n  <h5>Payment Methods</h5>\n  <ion-segment color="secondary" [(ngModel)]="paymethods">\n    <ion-segment-button value="creditcard" >\n      Credit card\n    </ion-segment-button>\n    <ion-segment-button value="paypal">\n      PayPal\n    </ion-segment-button>\n  </ion-segment>\n\n  <div class="card round" margin-top margin-bottom>\n\n    <div [ngSwitch]="paymethods">\n      <ion-grid *ngSwitchCase="\'creditcard\'" padding>\n        <ion-row>\n          <ion-col no-padding text-center>\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMTUuMTg3NSAxOSBMIDEyLjU1ODU5NCAyNi44MzIwMzEgQyAxMi41NTg1OTQgMjYuODMyMDMxIDExLjg5NDUzMSAyMy41MTk1MzEgMTEuODI4MTI1IDIzLjEwMTU2MyBDIDEwLjMzMjAzMSAxOS42OTE0MDYgOC4xMjUgMTkuODgyODEzIDguMTI1IDE5Ljg4MjgxMyBMIDEwLjcyNjU2MyAzMCBMIDEwLjcyNjU2MyAyOS45OTYwOTQgTCAxMy44ODY3MTkgMjkuOTk2MDk0IEwgMTguMjU3ODEzIDE5IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkZGRkY7IiBkPSJNIDE3LjY4NzUgMzAgTCAyMC41NTg1OTQgMzAgTCAyMi4yOTY4NzUgMTkgTCAxOS4zOTA2MjUgMTkgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMzguMDA3ODEzIDE5IEwgMzQuOTg4MjgxIDE5IEwgMzAuMjc3MzQ0IDMwIEwgMzMuMTI4OTA2IDMwIEwgMzMuNzE4NzUgMjguNDI5Njg4IEwgMzcuMzEyNSAyOC40Mjk2ODggTCAzNy42MTcxODggMzAgTCA0MC4yMzA0NjkgMzAgWiBNIDM0LjUxMTcxOSAyNi4zMjgxMjUgTCAzNi4wNzQyMTkgMjIuMTcxODc1IEwgMzYuODk0NTMxIDI2LjMyODEyNSBaICIvPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAyNi4zNjcxODggMjIuMjA3MDMxIEMgMjYuMzY3MTg4IDIxLjYwMTU2MyAyNi44NjcxODggMjEuMTQ4NDM4IDI4LjI5Njg3NSAyMS4xNDg0MzggQyAyOS4yMjI2NTYgMjEuMTQ4NDM4IDMwLjI4NTE1NiAyMS44MjQyMTkgMzAuMjg1MTU2IDIxLjgyNDIxOSBMIDMwLjc1MzkwNiAxOS41MTU2MjUgQyAzMC43NTM5MDYgMTkuNTE1NjI1IDI5LjM5NDUzMSAxOSAyOC4wNjI1IDE5IEMgMjUuMDQyOTY5IDE5IDIzLjQ4NDM3NSAyMC40NDE0MDYgMjMuNDg0Mzc1IDIyLjI2OTUzMSBDIDIzLjQ4NDM3NSAyNS41NzgxMjUgMjcuNDY0ODQ0IDI1LjEyNSAyNy40NjQ4NDQgMjYuODIwMzEzIEMgMjcuNDY0ODQ0IDI3LjExMzI4MSAyNy4yMzQzNzUgMjcuNzg1MTU2IDI1LjU3NDIxOSAyNy43ODUxNTYgQyAyMy45MTQwNjMgMjcuNzg1MTU2IDIyLjgxNjQwNiAyNy4xNzU3ODEgMjIuODE2NDA2IDI3LjE3NTc4MSBMIDIyLjMyMDMxMyAyOS4zOTQ1MzEgQyAyMi4zMjAzMTMgMjkuMzk0NTMxIDIzLjM4NjcxOSAzMCAyNS40Mzc1IDMwIEMgMjcuNDk2MDk0IDMwIDMwLjM1NTQ2OSAyOC40NjA5MzggMzAuMzU1NDY5IDI2LjI0NjA5NCBDIDMwLjM1NTQ2OSAyMy41ODU5MzggMjYuMzY3MTg4IDIzLjM5NDUzMSAyNi4zNjcxODggMjIuMjA3MDMxIFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkMxMDc7IiBkPSJNIDEyLjIxMDkzOCAyNC45NDUzMTMgTCAxMS4yNDYwOTQgMjAuMTk1MzEzIEMgMTEuMjQ2MDk0IDIwLjE5NTMxMyAxMC44MDg1OTQgMTkuMTY3OTY5IDkuNjcxODc1IDE5LjE2Nzk2OSBDIDguNTM1MTU2IDE5LjE2Nzk2OSA1LjIzNDM3NSAxOS4xNjc5NjkgNS4yMzQzNzUgMTkuMTY3OTY5IEMgNS4yMzQzNzUgMTkuMTY3OTY5IDEwLjg5NDUzMSAyMC44Mzk4NDQgMTIuMjEwOTM4IDI0Ljk0NTMxMyBaICIvPjwvZz48L3N2Zz4=" alt="Visa" />\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojM0Y1MUI1OyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGQzEwNzsiIGQ9Ik0gNDAgMjQgQyA0MCAyOS41MjM0MzggMzUuNTIzNDM4IDM0IDMwIDM0IEMgMjQuNDc2NTYzIDM0IDIwIDI5LjUyMzQzOCAyMCAyNCBDIDIwIDE4LjQ3NjU2MyAyNC40NzY1NjMgMTQgMzAgMTQgQyAzNS41MjM0MzggMTQgNDAgMTguNDc2NTYzIDQwIDI0IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRjNEMDA7IiBkPSJNIDIyLjAxNTYyNSAzMCBDIDIxLjU1MDc4MSAyOS4zODI4MTMgMjEuMTUyMzQ0IDI4LjcxNDg0NCAyMC44Mzk4NDQgMjggTCAyNi4xNjQwNjMgMjggQyAyNi40NDE0MDYgMjcuMzYzMjgxIDI2LjY2MDE1NiAyNi42OTUzMTMgMjYuODAwNzgxIDI2IEwgMjAuMjAzMTI1IDI2IEMgMjAuMDcwMzEzIDI1LjM1NTQ2OSAyMCAyNC42ODc1IDIwIDI0IEwgMjcgMjQgQyAyNyAyMy4zMTI1IDI2LjkyOTY4OCAyMi42NDQ1MzEgMjYuODAwNzgxIDIyIEwgMjAuMTk5MjE5IDIyIEMgMjAuMzQzNzUgMjEuMzA0Njg4IDIwLjU1ODU5NCAyMC42MzY3MTkgMjAuODM5ODQ0IDIwIEwgMjYuMTY0MDYzIDIwIEMgMjUuODUxNTYzIDE5LjI4NTE1NiAyNS40NTMxMjUgMTguNjE3MTg4IDI0Ljk4ODI4MSAxOCBMIDIyLjAxNTYyNSAxOCBDIDIyLjQ0OTIxOSAxNy40MjE4NzUgMjIuOTQ1MzEzIDE2Ljg3ODkwNiAyMy40OTYwOTQgMTYuNDA2MjUgQyAyMS43NDYwOTQgMTQuOTEwMTU2IDE5LjQ4MDQ2OSAxNCAxNyAxNCBDIDExLjQ3NjU2MyAxNCA3IDE4LjQ3NjU2MyA3IDI0IEMgNyAyOS41MjM0MzggMTEuNDc2NTYzIDM0IDE3IDM0IEMgMjAuMjY5NTMxIDM0IDIzLjE2MDE1NiAzMi40MjU3ODEgMjQuOTg0Mzc1IDMwIFogIi8+PC9nPjwvc3ZnPg==" alt="mastercard">\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojRTFFN0VBOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjE5OTIxOSA0My4xOTkyMTkgMzkgNDEgMzkgTCA3IDM5IEMgNC44MDA3ODEgMzkgMyAzNy4xOTkyMTkgMyAzNSBMIDMgMTMgQyAzIDEwLjgwMDc4MSA0LjgwMDc4MSA5IDcgOSBMIDQxIDkgQyA0My4xOTkyMTkgOSA0NSAxMC44MDA3ODEgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGNkQwMDsiIGQ9Ik0gNDUgMzUgQyA0NSAzNy4xOTkyMTkgNDMuMTk5MjE5IDM5IDQxIDM5IEwgMTYgMzkgQyAxNiAzOSAzOS42MDE1NjMgMzUuMTk5MjE5IDQ1IDI0IFogTSAyMiAyNCBDIDIyIDI1LjY5OTIxOSAyMy4zMDA3ODEgMjcgMjUgMjcgQyAyNi42OTkyMTkgMjcgMjggMjUuNjk5MjE5IDI4IDI0IEMgMjggMjIuMzAwNzgxIDI2LjY5OTIxOSAyMSAyNSAyMSBDIDIzLjMwMDc4MSAyMSAyMiAyMi4zMDA3ODEgMjIgMjQgWiAiLz48cGF0aCBzdHlsZT0iICIgZD0iTSAxMS4xOTkyMTkgMjEgTCAxMi4zMDA3ODEgMjEgTCAxMi4zMDA3ODEgMjcgTCAxMS4xOTkyMTkgMjcgWiBNIDE3LjE5OTIxOSAyNCBDIDE3LjE5OTIxOSAyNS42OTkyMTkgMTguNSAyNyAyMC4xOTkyMTkgMjcgQyAyMC42OTkyMTkgMjcgMjEuMTAxNTYzIDI2Ljg5ODQzOCAyMS42MDE1NjMgMjYuNjk5MjE5IEwgMjEuNjAxNTYzIDI1LjM5ODQzOCBDIDIxLjE5OTIxOSAyNS44MDA3ODEgMjAuODAwNzgxIDI2IDIwLjE5OTIxOSAyNiBDIDE5LjEwMTU2MyAyNiAxOC4zMDA3ODEgMjUuMTk5MjE5IDE4LjMwMDc4MSAyNCBDIDE4LjMwMDc4MSAyMi44OTg0MzggMTkuMTAxNTYzIDIyIDIwLjE5OTIxOSAyMiBDIDIwLjY5OTIxOSAyMiAyMS4xMDE1NjMgMjIuMTk5MjE5IDIxLjYwMTU2MyAyMi42MDE1NjMgTCAyMS42MDE1NjMgMjEuMzAwNzgxIEMgMjEuMTAxNTYzIDIxLjEwMTU2MyAyMC42OTkyMTkgMjAuODk4NDM4IDIwLjE5OTIxOSAyMC44OTg0MzggQyAxOC41IDIxIDE3LjE5OTIxOSAyMi4zOTg0MzggMTcuMTk5MjE5IDI0IFogTSAzMC42MDE1NjMgMjQuODk4NDM4IEwgMjkgMjEgTCAyNy44MDA3ODEgMjEgTCAzMC4zMDA3ODEgMjcgTCAzMC44OTg0MzggMjcgTCAzMy4zOTg0MzggMjEgTCAzMi4xOTkyMTkgMjEgWiBNIDMzLjg5ODQzOCAyNyBMIDM3LjEwMTU2MyAyNyBMIDM3LjEwMTU2MyAyNiBMIDM1IDI2IEwgMzUgMjQuMzk4NDM4IEwgMzcgMjQuMzk4NDM4IEwgMzcgMjMuMzk4NDM4IEwgMzUgMjMuMzk4NDM4IEwgMzUgMjIgTCAzNy4xMDE1NjMgMjIgTCAzNy4xMDE1NjMgMjEgTCAzMy44OTg0MzggMjEgWiBNIDQxLjUgMjIuODAwNzgxIEMgNDEuNSAyMS42OTkyMTkgNDAuODAwNzgxIDIxIDM5LjUgMjEgTCAzNy44MDA3ODEgMjEgTCAzNy44MDA3ODEgMjcgTCAzOC44OTg0MzggMjcgTCAzOC44OTg0MzggMjQuNjAxNTYzIEwgMzkgMjQuNjAxNTYzIEwgNDAuNjAxNTYzIDI3IEwgNDIgMjcgTCA0MC4xOTkyMTkgMjQuNSBDIDQxIDI0LjMwMDc4MSA0MS41IDIzLjY5OTIxOSA0MS41IDIyLjgwMDc4MSBaIE0gMzkuMTk5MjE5IDIzLjgwMDc4MSBMIDM4Ljg5ODQzOCAyMy44MDA3ODEgTCAzOC44OTg0MzggMjIgTCAzOS4xOTkyMTkgMjIgQyAzOS44OTg0MzggMjIgNDAuMzAwNzgxIDIyLjMwMDc4MSA0MC4zMDA3ODEgMjIuODk4NDM4IEMgNDAuMzAwNzgxIDIzLjM5ODQzOCA0MCAyMy44MDA3ODEgMzkuMTk5MjE5IDIzLjgwMDc4MSBaIE0gNy42OTkyMTkgMjEgTCA2IDIxIEwgNiAyNyBMIDcuNjAxNTYzIDI3IEMgMTAuMTAxNTYzIDI3IDEwLjY5OTIxOSAyNC44OTg0MzggMTAuNjk5MjE5IDI0IEMgMTAuODAwNzgxIDIyLjE5OTIxOSA5LjUgMjEgNy42OTkyMTkgMjEgWiBNIDcuMzk4NDM4IDI2IEwgNy4xMDE1NjMgMjYgTCA3LjEwMTU2MyAyMiBMIDcuNSAyMiBDIDkgMjIgOS42MDE1NjMgMjMgOS42MDE1NjMgMjQgQyA5LjYwMTU2MyAyNC4zOTg0MzggOS41IDI2IDcuMzk4NDM4IDI2IFogTSAxNS4zMDA3ODEgMjMuMzAwNzgxIEMgMTQuNjAxNTYzIDIzIDE0LjM5ODQzOCAyMi44OTg0MzggMTQuMzk4NDM4IDIyLjYwMTU2MyBDIDE0LjM5ODQzOCAyMi4xOTkyMTkgMTQuODAwNzgxIDIyIDE1LjE5OTIxOSAyMiBDIDE1LjUgMjIgMTUuODAwNzgxIDIyLjEwMTU2MyAxNi4xMDE1NjMgMjIuNSBMIDE2LjY5OTIxOSAyMS42OTkyMTkgQyAxNi4xOTkyMTkgMjEuMTk5MjE5IDE1LjY5OTIxOSAyMSAxNSAyMSBDIDE0IDIxIDEzLjE5OTIxOSAyMS42OTkyMTkgMTMuMTk5MjE5IDIyLjY5OTIxOSBDIDEzLjE5OTIxOSAyMy41IDEzLjYwMTU2MyAyMy44OTg0MzggMTQuNjAxNTYzIDI0LjMwMDc4MSBDIDE1LjE5OTIxOSAyNC41IDE1LjY5OTIxOSAyNC42OTkyMTkgMTUuNjk5MjE5IDI1LjE5OTIxOSBDIDE1LjY5OTIxOSAyNS42OTkyMTkgMTUuMzAwNzgxIDI2IDE0LjgwMDc4MSAyNiBDIDE0LjMwMDc4MSAyNiAxMy44MDA3ODEgMjUuNjk5MjE5IDEzLjYwMTU2MyAyNS4xOTkyMTkgTCAxMi44OTg0MzggMjUuODk4NDM4IEMgMTMuMzk4NDM4IDI2LjY5OTIxOSAxNCAyNyAxNC44OTg0MzggMjcgQyAxNi4xMDE1NjMgMjcgMTYuODk4NDM4IDI2LjE5OTIxOSAxNi44OTg0MzggMjUuMTAxNTYzIEMgMTYuODk4NDM4IDI0LjE5OTIxOSAxNi41IDIzLjgwMDc4MSAxNS4zMDA3ODEgMjMuMzAwNzgxIFogIi8+PC9nPjwvc3ZnPg==" alt="discover">\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNTIgMjUyIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwyNTJ2LTI1MmgyNTJ2MjUyeiIgZmlsbD0ibm9uZSIvPjxnPjxnIGlkPSJzdXJmYWNlMSI+PHBhdGggZD0iTTIzNi4yNSwxODMuNzVjMCwxMS42MDc0MiAtOS4zOTI1OCwyMSAtMjEsMjFoLTE3OC41Yy0xMS42MDc0MiwwIC0yMSwtOS4zOTI1OCAtMjEsLTIxdi0xMTUuNWMwLC0xMS42MDc0MiA5LjM5MjU4LC0yMSAyMSwtMjFoMTc4LjVjMTEuNjA3NDIsMCAyMSw5LjM5MjU4IDIxLDIxeiIgZmlsbD0iIzE2YTA4NSIvPjxwYXRoIGQ9Ik0xMTYuODMzMDEsMTA1bC0xMS4wOTQ3MywyNC41ODg4N2wtMTEuMDMzMiwtMjQuNTg4ODdoLTE0LjE1MDM5djM1LjMxNDQ2bC0xNS43NzA1MSwtMzUuMzE0NDZoLTExLjkzNTU1bC0xNi4wOTg2MywzNi42NDc0Nmg5LjUzNjEzbDMuNTA2ODQsLTguMTgyNjJoMTguMDI2MzdsMy41ODg4Nyw4LjE4MjYyaDE4LjE5MDQzdi0yNy4yMTM4N2wxMi4wNTg1OSwyNy4yMTM4N2g4LjIwMzEzbDEyLjM0NTcxLC0yNi43NDIxOXYyNi43NDIxOWg5LjA0Mzk0di0zNi42NDc0NnpNNTMuMjE3NzcsMTI1LjU0ODgzbDUuMzczMDQsLTEyLjc5Njg3bDUuNTk4NjQsMTIuNzk2ODh6IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTE5OC44ODQ3NywxMjIuOTIzODNsMTYuMzY1MjMsLTE3LjgyMTI5aC0xMS42NDg0NGwtMTAuNDU4OTgsMTEuMzYxMzNsLTEwLjEzMDg2LC0xMS40NjM4N2gtMzYuMDExNzJ2MzYuNjQ3NDZoMzQuODQyNzdsMTAuOTcxNjgsLTEyLjEyMDEybDEwLjcwNTA4LDEyLjIyMjY2aDExLjYwNzQyek0xNzcuMDY0NDYsMTMzLjk1NzAzaC0yMS4wNDEwMnYtNy4yMzkyNmgyMC4xMzg2N3YtNi45NTIxNWgtMjAuMTM4Njd2LTYuODcwMTJsMjIuMjA5OTYsMC4wNjE1Mmw4LjkwMDM5LDkuOTY2OHoiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjwvZz48L3N2Zz4=" alt="Amex">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input type="text" placeholder="Card Holder"></ion-input>\n<!--               <ion-icon name="person" item-end no-margin></ion-icon> -->\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input placeholder="Card Number" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            <ion-item no-padding>\n              <ion-select placeholder="MM" class="max-width full-width">\n                <ion-option value="01">01</ion-option>\n                <ion-option value="02">02</ion-option>\n                <ion-option value="03">03</ion-option>\n                <ion-option value="04">04</ion-option>\n                <ion-option value="05">05</ion-option>\n                <ion-option value="06">06</ion-option>\n                <ion-option value="07">07</ion-option>\n                <ion-option value="08">08</ion-option>\n                <ion-option value="09">09</ion-option>\n                <ion-option value="10">10</ion-option>\n                <ion-option value="11">11</ion-option>\n                <ion-option value="12">12</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-4>\n            <ion-item no-padding>\n              <ion-select placeholder="YY" class="max-width full-width">\n                <ion-option value="19">19</ion-option>\n                <ion-option value="20">20</ion-option>\n                <ion-option value="21">21</ion-option>\n                <ion-option value="22">22</ion-option>\n                <ion-option value="23">23</ion-option>\n                <ion-option value="24">24</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-4>\n            <ion-item no-padding>\n              <ion-input placeholder="CVV" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid *ngSwitchCase="\'paypal\'" padding>\n        <ion-row>\n          <ion-col no-padding text-center>\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSAxOC42OTkyMTkgMTMuNzY1NjI1IEwgMTguNzAzMTI1IDEzLjc2OTUzMSBDIDE4LjgwODU5NCAxMy4zMjQyMTkgMTkuMTg3NSAxMyAxOS42NjAxNTYgMTMgTCAzMy4xMzI4MTMgMTMgQyAzMy4xNDg0MzggMTMgMzMuMTY0MDYzIDEyLjk5MjE4OCAzMy4xODM1OTQgMTIuOTkyMTg4IEMgMzIuODk0NTMxIDguMjE0ODQ0IDI4Ljg4NjcxOSA2IDI1LjM1MTU2MyA2IEwgMTEuODc4OTA2IDYgQyAxMS40MDIzNDQgNiAxMS4wMjczNDQgNi4zMzU5MzggMTAuOTIxODc1IDYuNzc3MzQ0IEwgMTAuOTE3OTY5IDYuNzczNDM4IEwgNS4wMjczNDQgMzMuODEyNSBMIDUuMDQyOTY5IDMzLjgxMjUgQyA1LjAyNzM0NCAzMy44Nzg5MDYgNS4wMDM5MDYgMzMuOTM3NSA1LjAwMzkwNiAzNC4wMDc4MTMgQyA1LjAwMzkwNiAzNC41NjI1IDUuNDQ5MjE5IDM1IDYuMDAzOTA2IDM1IEwgMTQuMDc0MjE5IDM1IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiMwMzlCRTU7IiBkPSJNIDMzLjE4MzU5NCAxMi45OTIxODggQyAzMy4yMzQzNzUgMTMuODcxMDk0IDMzLjE3OTY4OCAxNC44MjQyMTkgMzIuOTUzMTI1IDE1Ljg3NSBDIDMxLjY3MTg3NSAyMS44NzEwOTQgMjcuMDQyOTY5IDI0Ljk5MjE4OCAyMS4zMjAzMTMgMjQuOTkyMTg4IEMgMjEuMzIwMzEzIDI0Ljk5MjE4OCAxNy44NDc2NTYgMjQuOTkyMTg4IDE3LjAwNzgxMyAyNC45OTIxODggQyAxNi40ODQzNzUgMjQuOTkyMTg4IDE2LjIzODI4MSAyNS4yOTY4NzUgMTYuMTI1IDI1LjUzMTI1IEwgMTQuMzg2NzE5IDMzLjU3ODEyNSBMIDE0LjA4MjAzMSAzNS4wMDc4MTMgTCAxNC4wNzQyMTkgMzUuMDA3ODEzIEwgMTIuODEyNSA0MC44MDQ2ODggTCAxMi44MjQyMTkgNDAuODA0Njg4IEMgMTIuODEyNSA0MC44NzEwOTQgMTIuNzg1MTU2IDQwLjkyOTY4OCAxMi43ODUxNTYgNDEgQyAxMi43ODUxNTYgNDEuNTU0Njg4IDEzLjIzNDM3NSA0MiAxMy43ODUxNTYgNDIgTCAyMS4xMTcxODggNDIgTCAyMS4xMzI4MTMgNDEuOTg4MjgxIEMgMjEuNjA1NDY5IDQxLjk4NDM3NSAyMS45ODA0NjkgNDEuNjQ0NTMxIDIyLjA3ODEyNSA0MS4yMDMxMjUgTCAyMi4wOTM3NSA0MS4xODc1IEwgMjMuOTA2MjUgMzIuNzY5NTMxIEMgMjMuOTA2MjUgMzIuNzY5NTMxIDI0LjAzMTI1IDMxLjk2ODc1IDI0Ljg3ODkwNiAzMS45Njg3NSBDIDI1LjcyMjY1NiAzMS45Njg3NSAyOS4wNTQ2ODggMzEuOTY4NzUgMjkuMDU0Njg4IDMxLjk2ODc1IEMgMzQuNzc3MzQ0IDMxLjk2ODc1IDM5LjQ1NzAzMSAyOC44NjMyODEgNDAuNzM4MjgxIDIyLjg2NzE4OCBDIDQyLjE3OTY4OCAxNi4xMDU0NjkgMzcuMzU5Mzc1IDEzLjAxOTUzMSAzMy4xODM1OTQgMTIuOTkyMTg4IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiMyODM1OTM7IiBkPSJNIDE5LjY2MDE1NiAxMyBDIDE5LjE4NzUgMTMgMTguODA4NTk0IDEzLjMyNDIxOSAxOC43MDMxMjUgMTMuNzY5NTMxIEwgMTguNjk5MjE5IDEzLjc2NTYyNSBMIDE2LjEyNSAyNS41MzEyNSBDIDE2LjIzODI4MSAyNS4yOTY4NzUgMTYuNDg0Mzc1IDI0Ljk5MjE4OCAxNy4wMDM5MDYgMjQuOTkyMTg4IEMgMTcuODQ3NjU2IDI0Ljk5MjE4OCAyMS4yMzgyODEgMjQuOTkyMTg4IDIxLjIzODI4MSAyNC45OTIxODggQyAyNi45NjQ4NDQgMjQuOTkyMTg4IDMxLjY3MTg3NSAyMS44NzEwOTQgMzIuOTUzMTI1IDE1Ljg3ODkwNiBDIDMzLjE3OTY4OCAxNC44MjQyMTkgMzMuMjM0Mzc1IDEzLjg3MTA5NCAzMy4xODM1OTQgMTIuOTk2MDk0IEMgMzMuMTY0MDYzIDEyLjk5MjE4OCAzMy4xNDg0MzggMTMgMzMuMTMyODEzIDEzIFogIi8+PC9nPjwvc3ZnPg==" alt="paypal">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input type="mail" placeholder="E-mail"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input placeholder="Password" type="password"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n\n  <!--submit button-->\n  <button ion-button class="round" color="primary" margin-top full tappable (click)="send()">SEND</button>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/checkout-trip/checkout-trip.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], CheckoutTripPage);

//# sourceMappingURL=checkout-trip.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherProvider = (function () {
    function WeatherProvider(http) {
        this.http = http;
        this.apiKey = '1e4a0bdb251c64e4';
        console.log('Hello WeatherProvider Provider');
        this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/';
    }
    WeatherProvider.prototype.getWeather = function (state, city) {
        return this.http.get(this.url + state + '/' + city + '.json').map(function (res) { return res; });
    };
    return WeatherProvider;
}());
WeatherProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], WeatherProvider);

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = (function () {
    function NotificationsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/notifications/notifications.html"*/'<ion-list class="no-margin">\n  <ion-list-header class="no-margin">\n  	<ion-icon name="notifications" color="primary"></ion-icon>\n  	<span ion-text color="primary" class="bold">Notifications</span>\n  </ion-list-header>\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail"></ion-icon>\n  	New booking success!\n  </button>\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail"></ion-icon>\n  	Activity rescheduled\n  </button>\n  <button ion-item class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n  	<span ion-text color="secondary">Activity rescheduled</span>\n  </button>\n  <button ion-item class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n  	<span ion-text color="secondary">Activity rescheduled</span>\n  </button>\n</ion-list>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/notifications/notifications.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(nav) {
        this.nav = nav;
    }
    // logout
    SettingsPage.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/settings/settings.html"*/'<!-- -->\n<ion-header class="no-shadow">\n\n  <ion-navbar class="no-border">\n    <ion-title>\n      <ion-icon name="cog" class="text-primary"></ion-icon>\n      <span class="text-primary">Réglages</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n  <!-- User settings-->\n  <ion-item-group>\n    <ion-item-divider color="secondary" class="bold">Paramètres utilisateurs</ion-item-divider>\n    <ion-item>\n      <ion-label>Langue</ion-label>\n      <ion-select [(ngModel)]="language" cancelText="Cancel" okText="OK">\n        <ion-option value="fr" selected="true">Français (FR)</ion-option>\n      </ion-select>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-label>Notifications?</ion-label>\n      <ion-toggle checked="true"></ion-toggle>\n    </ion-item> -->\n  </ion-item-group>\n  <!-- App settings-->\n  <ion-item-group>\n    <!--<ion-item-divider color="secondary" class="bold">App Settings</ion-item-divider>\n    <ion-item>\n      <span>Clear Private Data</span>\n    </ion-item>\n    <ion-item>\n      <ion-label>Push Notifications?</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span>Privacy Policy</span>\n    </ion-item> -->\n  </ion-item-group>\n\n  <!--sign out button-->\n  <button ion-button color="primary" full tappable (click)="logout()">QUITTER</button>\n\n</ion-content>'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/settings/settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = (function () {
    function RegisterPage(nav) {
        this.nav = nav;
    }
    // register and go to home page
    RegisterPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/register/register.html"*/'<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        <strong>Ionic 3</strong> Start Theme\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          Full Name\n        </ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          Email\n        </ion-label>\n        <ion-input type="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n    </form>\n\n    <div margin-top>\n      <button ion-button block color="dark" tappable (click)="register()">\n        SIGN UP\n      </button>\n\n      <p text-center ion-text color="secondary">Or Sign Up with:</p>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-facebook">\n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-twitter">\n              <ion-icon name="logo-twitter"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-gplus">\n              <ion-icon name="logo-googleplus"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="primary" tappable (click)="login()">I have an account</span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/register/register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trip_detail_trip_detail2__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trip_detail_trip_detail3__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trip_detail_trip_detail4__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trip_detail_trip_detail5__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TripsPage = (function () {
    function TripsPage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        this.bonparking = 0;
        // set sample data
        ////this.trips = tripService.getAll();
        console.log("test");
        this.bonparking = tripService.calcul();
        this.viewDetail(this.parking); // this.bonparking d
    }
    // view trip detail
    TripsPage.prototype.viewDetail = function (id) {
        console.log(id);
        console.log("creation TripDetailPage");
        if (this.bonparking == 1) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__["a" /* TripDetailPage */]);
        }
        if (this.bonparking == 2) {
            console.log("ok");
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__trip_detail_trip_detail2__["a" /* TripDetailPage2 */]);
        }
        if (this.bonparking == 3) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__trip_detail_trip_detail3__["a" /* TripDetailPage3 */]);
        }
        if (this.bonparking == 4) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__trip_detail_trip_detail4__["a" /* TripDetailPage4 */]);
        }
        if (this.bonparking == 5) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__trip_detail_trip_detail5__["a" /* TripDetailPage5 */]);
        }
        //this.nav.push(TripDetailPage, {id: id});
    };
    return TripsPage;
}());
TripsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trips',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trips/trips.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>Résultats</span>\n    </ion-title>\n  </ion-navbar>\n\n  <!--  -->\n  <ion-toolbar padding color="light">\n    <p ion-text no-margin class="text-white">\n      <strong> Chargement en cours ...</strong>\n    </p>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding class="trips detail-bg">\n  <!--list of trips-->\n  <div class="trip card" *ngFor="let trip of trips" tappable (click)="viewDetail(trip.id)" margin-bottom>\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.imagePrincipale + \')\'}">\n      <div class="background-filter rlt">\n        <div class="align-bottom" padding-left padding-right>\n          <h6 class="pull-left text-white" ion-text>{{ trip.nomParking }}</h6>\n          <h6 class="pull-right text-white" ion-text>\n            <ion-icon name="time" class="text-white"></ion-icon> {{ trip.horaire }}\n          </h6>\n\n\n          <div class="clear"></div>\n        </div>\n      </div>\n    </div>\n    <div class="padding-sm primary-bg">\n      <ion-icon name="ios-arrow-dropright" class="text-white"></ion-icon>\n      <span ion-text class="text-green bold"> {{ trip.placesDispos }} %</span>\n\n      <span class=" pull-right" ion-text color="danger"><strong>de places disponibles</strong></span>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trips/trips.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
], TripsPage);

//# sourceMappingURL=trips.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripDetailPage = (function () {
    function TripDetailPage(nav, tripService) {
        // set sample data
        this.nav = nav;
        this.tripService = tripService;
        // number of adult
        this.adults = 2;
        // number of children
        this.children = 0;
        this.trip = tripService.getItem(1);
    }
    // minus adult when click minus button
    TripDetailPage.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPage.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPage.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPage.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPage.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__["a" /* CheckoutTripPage */]);
    };
    return TripDetailPage;
}());
TripDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trip-detail',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detail.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>{{ trip.nomParking }}</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of trip.images">\n      <img [src]="image" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--services-->\n  <ion-grid class="border-bottom dark-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-sm">\n          <div>\n            <ion-icon name="time" class="text-white"></ion-icon>\n            <span ion-text color="light">{{ trip.horaire }}</span>\n            <br>\n            <ion-icon name="ios-calculator-outline" class="text-white"></ion-icon>\n            <span ion-text color="light"> Nous vous conseillons fortement ce parking !</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--high light-->\n  <div class="border-bottom" padding>\n    <span ion-text color="dark" class="bold">INFORMATIONS</span>\n    <ul class="highlight">\n      <li *ngFor="let information of trip.informations">\n        <ion-icon name="checkmark" class="text-green"></ion-icon>\n        <span ion-text color="primary">{{ information }}</span>\n      </li>\n    </ul>\n  </div>\n\n  <!--address-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">ADRESSE</span>\n    <p ion-text>{{ trip.adresse }}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
], TripDetailPage);

//# sourceMappingURL=trip-detail.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPage2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripDetailPage2 = (function () {
    function TripDetailPage2(nav, tripService) {
        // set sample data
        this.nav = nav;
        this.tripService = tripService;
        // number of adult
        this.adults = 2;
        // number of children
        this.children = 0;
        this.trip = tripService.getItem(2);
    }
    // minus adult when click minus button
    TripDetailPage2.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPage2.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPage2.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPage2.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPage2.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__["a" /* CheckoutTripPage */]);
    };
    return TripDetailPage2;
}());
TripDetailPage2 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trip-detail',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detail.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>{{ trip.nomParking }}</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of trip.images">\n      <img [src]="image" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--services-->\n  <ion-grid class="border-bottom dark-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-sm">\n          <div>\n            <ion-icon name="time" class="text-white"></ion-icon>\n            <span ion-text color="light">{{ trip.horaire }}</span>\n            <br>\n            <ion-icon name="ios-calculator-outline" class="text-white"></ion-icon>\n            <span ion-text color="light"> Nous vous conseillons fortement ce parking !</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--high light-->\n  <div class="border-bottom" padding>\n    <span ion-text color="dark" class="bold">INFORMATIONS</span>\n    <ul class="highlight">\n      <li *ngFor="let information of trip.informations">\n        <ion-icon name="checkmark" class="text-green"></ion-icon>\n        <span ion-text color="primary">{{ information }}</span>\n      </li>\n    </ul>\n  </div>\n\n  <!--address-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">ADRESSE</span>\n    <p ion-text>{{ trip.adresse }}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
], TripDetailPage2);

//# sourceMappingURL=trip-detail2.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPage3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripDetailPage3 = (function () {
    function TripDetailPage3(nav, tripService) {
        // set sample data
        this.nav = nav;
        this.tripService = tripService;
        // number of adult
        this.adults = 2;
        // number of children
        this.children = 0;
        this.trip = tripService.getItem(3);
    }
    // minus adult when click minus button
    TripDetailPage3.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPage3.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPage3.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPage3.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPage3.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__["a" /* CheckoutTripPage */]);
    };
    return TripDetailPage3;
}());
TripDetailPage3 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trip-detail',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detail.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>{{ trip.nomParking }}</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of trip.images">\n      <img [src]="image" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--services-->\n  <ion-grid class="border-bottom dark-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-sm">\n          <div>\n            <ion-icon name="time" class="text-white"></ion-icon>\n            <span ion-text color="light">{{ trip.horaire }}</span>\n            <br>\n            <ion-icon name="ios-calculator-outline" class="text-white"></ion-icon>\n            <span ion-text color="light"> Nous vous conseillons fortement ce parking !</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--high light-->\n  <div class="border-bottom" padding>\n    <span ion-text color="dark" class="bold">INFORMATIONS</span>\n    <ul class="highlight">\n      <li *ngFor="let information of trip.informations">\n        <ion-icon name="checkmark" class="text-green"></ion-icon>\n        <span ion-text color="primary">{{ information }}</span>\n      </li>\n    </ul>\n  </div>\n\n  <!--address-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">ADRESSE</span>\n    <p ion-text>{{ trip.adresse }}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
], TripDetailPage3);

//# sourceMappingURL=trip-detail3.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPage4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripDetailPage4 = (function () {
    function TripDetailPage4(nav, tripService) {
        // set sample data
        this.nav = nav;
        this.tripService = tripService;
        // number of adult
        this.adults = 2;
        // number of children
        this.children = 0;
        this.trip = tripService.getItem(4);
    }
    // minus adult when click minus button
    TripDetailPage4.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPage4.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPage4.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPage4.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPage4.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__["a" /* CheckoutTripPage */]);
    };
    return TripDetailPage4;
}());
TripDetailPage4 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trip-detail',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detail.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>{{ trip.nomParking }}</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of trip.images">\n      <img [src]="image" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--services-->\n  <ion-grid class="border-bottom dark-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-sm">\n          <div>\n            <ion-icon name="time" class="text-white"></ion-icon>\n            <span ion-text color="light">{{ trip.horaire }}</span>\n            <br>\n            <ion-icon name="ios-calculator-outline" class="text-white"></ion-icon>\n            <span ion-text color="light"> Nous vous conseillons fortement ce parking !</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--high light-->\n  <div class="border-bottom" padding>\n    <span ion-text color="dark" class="bold">INFORMATIONS</span>\n    <ul class="highlight">\n      <li *ngFor="let information of trip.informations">\n        <ion-icon name="checkmark" class="text-green"></ion-icon>\n        <span ion-text color="primary">{{ information }}</span>\n      </li>\n    </ul>\n  </div>\n\n  <!--address-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">ADRESSE</span>\n    <p ion-text>{{ trip.adresse }}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
], TripDetailPage4);

//# sourceMappingURL=trip-detail4.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPage5; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripDetailPage5 = (function () {
    function TripDetailPage5(nav, tripService) {
        // set sample data
        this.nav = nav;
        this.tripService = tripService;
        // number of adult
        this.adults = 2;
        // number of children
        this.children = 0;
        this.trip = tripService.getItem(5);
    }
    // minus adult when click minus button
    TripDetailPage5.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPage5.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPage5.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPage5.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPage5.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__["a" /* CheckoutTripPage */]);
    };
    return TripDetailPage5;
}());
TripDetailPage5 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trip-detail',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detail.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>{{ trip.nomParking }}</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of trip.images">\n      <img [src]="image" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--services-->\n  <ion-grid class="border-bottom dark-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-sm">\n          <div>\n            <ion-icon name="time" class="text-white"></ion-icon>\n            <span ion-text color="light">{{ trip.horaire }}</span>\n            <br>\n            <ion-icon name="ios-calculator-outline" class="text-white"></ion-icon>\n            <span ion-text color="light"> Nous vous conseillons fortement ce parking !</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--high light-->\n  <div class="border-bottom" padding>\n    <span ion-text color="dark" class="bold">INFORMATIONS</span>\n    <ul class="highlight">\n      <li *ngFor="let information of trip.informations">\n        <ion-icon name="checkmark" class="text-green"></ion-icon>\n        <span ion-text color="primary">{{ information }}</span>\n      </li>\n    </ul>\n  </div>\n\n  <!--address-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">ADRESSE</span>\n    <p ion-text>{{ trip.adresse }}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
], TripDetailPage5);

//# sourceMappingURL=trip-detail5.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsPage1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detailAvecPourcentage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trip_detail_trip_detail2AvecPourcentage__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trip_detail_trip_detail3AvecPourcentage__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trip_detail_trip_detail4AvecPourcentage__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trip_detail_trip_detail5AvecPourcentage__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TripsPage1 = (function () {
    function TripsPage1(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        this.bonparking = 1;
        // set sample datad
        ////this.trips = tripService.getAll();
        console.log("test");
        //this.bonparking = tripService.calcul();
        this.viewDetail(this.bonparking);
    }
    // view trip detail
    TripsPage1.prototype.viewDetail = function (id) {
        console.log(id);
        console.log("creation TripDetailPage");
        if (this.bonparking == 1) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detailAvecPourcentage__["a" /* TripDetailPageAvecPourcentage */]);
        }
        if (this.bonparking == 2) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__trip_detail_trip_detail2AvecPourcentage__["a" /* TripDetailPage2AvecPourcentage */]);
        }
        if (this.bonparking == 3) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__trip_detail_trip_detail3AvecPourcentage__["a" /* TripDetailPage3AvecPourcentage */]);
        }
        if (this.bonparking == 4) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__trip_detail_trip_detail4AvecPourcentage__["a" /* TripDetailPage4AvecPourcentage */]);
        }
        if (this.bonparking == 5) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__trip_detail_trip_detail5AvecPourcentage__["a" /* TripDetailPage5AvecPourcentage */]);
        }
        //this.nav.push(TripDetailPage, {id: id});
    };
    return TripsPage1;
}());
TripsPage1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trips',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trips/trips.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>Résultats</span>\n    </ion-title>\n  </ion-navbar>\n\n  <!--  -->\n  <ion-toolbar padding color="light">\n    <p ion-text no-margin class="text-white">\n      <strong> Chargement en cours ...</strong>\n    </p>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding class="trips detail-bg">\n  <!--list of trips-->\n  <div class="trip card" *ngFor="let trip of trips" tappable (click)="viewDetail(trip.id)" margin-bottom>\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.imagePrincipale + \')\'}">\n      <div class="background-filter rlt">\n        <div class="align-bottom" padding-left padding-right>\n          <h6 class="pull-left text-white" ion-text>{{ trip.nomParking }}</h6>\n          <h6 class="pull-right text-white" ion-text>\n            <ion-icon name="time" class="text-white"></ion-icon> {{ trip.horaire }}\n          </h6>\n\n\n          <div class="clear"></div>\n        </div>\n      </div>\n    </div>\n    <div class="padding-sm primary-bg">\n      <ion-icon name="ios-arrow-dropright" class="text-white"></ion-icon>\n      <span ion-text class="text-green bold"> {{ trip.placesDispos }} %</span>\n\n      <span class=" pull-right" ion-text color="danger"><strong>de places disponibles</strong></span>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trips/trips.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]) === "function" && _b || Object])
], TripsPage1);

var _a, _b;
//# sourceMappingURL=trips1.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPage2AvecPourcentage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripDetailPage2AvecPourcentage = (function () {
    function TripDetailPage2AvecPourcentage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // number of adultde
        this.adults = 2;
        // number of childrenn
        this.children = 0;
        this.pourcentage = 0;
        // set sample datad
        this.pourcentage = this.calculPourcentage();
        this.trip = tripService.getItem(2);
    }
    TripDetailPage2AvecPourcentage.prototype.calculPourcentage = function () {
        var numParking = 2;
        var tabNumParking = numParking - 1;
        //Fonction pour récupérer la semaine
        Date.prototype.getWeek = function () {
            var date = new Date(this.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
        };
        //Tableau semaines alternantes ou non
        // 1 s'ils sont en entreprise
        //0 s'ils sont formation au CERI
        var alternant = [1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
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
        var jourSemaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
        var jour = jourSemaine[d.getDay() - 1];
        var heure = d.getHours();
        var minute = d.getMinutes();
        var semaine = (d.getWeek()) - 1;
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
            semaine = semaine + 1;
        }
        else {
            if (heure >= 18) {
                if (jour == "vendredi") {
                    jour = "lundi";
                    semaine = semaine + 1;
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
        if (alternant[semaine] == 1) {
            alt = "NonAlt";
        }
        else {
            alt = "Alt";
        }
        //Valeur à chercher dans le tableau
        var aChercher = jour + alt + heure + "h" + minute;
        console.log("DATE : " + aChercher);
        var resultat = tabData[aChercher][tabNumParking];
        console.log("Le pourcentage de places dispos au parking " + numParking + " est de : " + resultat + "%");
        //document.body.innerHTML = "Le calcul va être effectué pour le "+ jour + " à " + heure + "h" + minute;
        return resultat;
    };
    // minus adult when click minus button
    TripDetailPage2AvecPourcentage.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPage2AvecPourcentage.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPage2AvecPourcentage.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPage2AvecPourcentage.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPage2AvecPourcentage.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__["a" /* CheckoutTripPage */]);
    };
    return TripDetailPage2AvecPourcentage;
}());
TripDetailPage2AvecPourcentage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trip-detail',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detailAvecPourcentage.html"*/' <!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>{{ trip.nomParking }}</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of trip.images">\n      <img [src]="image" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--services-->\n  <ion-grid class="border-bottom dark-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-sm">\n          <div>\n            <ion-icon name="time" class="text-white"></ion-icon>\n            <span ion-text color="light">{{ trip.horaire }}</span>\n            <br>\n            <ion-icon name="ios-calculator-outline" class="text-white"></ion-icon>\n            <span ion-text color="light"> {{ this.pourcentage }} % de places disponibles</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--high light-->\n  <div class="border-bottom" padding>\n    <span ion-text color="dark" class="bold">INFORMATIONS</span>\n    <ul class="highlight">\n      <li *ngFor="let information of trip.informations">\n        <ion-icon name="checkmark" class="text-green"></ion-icon>\n        <span ion-text color="primary">{{ information }}</span>\n      </li>\n    </ul>\n  </div>\n\n  <!--address-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">ADRESSE</span>\n    <p ion-text>{{ trip.adresse }}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detailAvecPourcentage.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]) === "function" && _b || Object])
], TripDetailPage2AvecPourcentage);

var _a, _b;
//# sourceMappingURL=trip-detail2AvecPourcentage.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPage3AvecPourcentage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripDetailPage3AvecPourcentage = (function () {
    function TripDetailPage3AvecPourcentage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // number of adultde
        this.adults = 2;
        // number of childrenn
        this.children = 0;
        this.pourcentage = 0;
        // set sample datad
        this.pourcentage = this.calculPourcentage();
        this.trip = tripService.getItem(3);
    }
    TripDetailPage3AvecPourcentage.prototype.calculPourcentage = function () {
        var numParking = 3;
        var tabNumParking = numParking - 1;
        //Fonction pour récupérer la semaine
        Date.prototype.getWeek = function () {
            var date = new Date(this.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
        };
        //Tableau semaines alternantes ou non
        // 1 s'ils sont en entreprise
        //0 s'ils sont formation au CERI
        var alternant = [1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
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
        var jourSemaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
        var jour = jourSemaine[d.getDay() - 1];
        var heure = d.getHours();
        var minute = d.getMinutes();
        var semaine = (d.getWeek()) - 1;
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
            semaine = semaine + 1;
        }
        else {
            if (heure >= 18) {
                if (jour == "vendredi") {
                    jour = "lundi";
                    semaine = semaine + 1;
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
        if (alternant[semaine] == 1) {
            alt = "NonAlt";
        }
        else {
            alt = "Alt";
        }
        //Valeur à chercher dans le tableau
        var aChercher = jour + alt + heure + "h" + minute;
        console.log("DATE : " + aChercher);
        var resultat = tabData[aChercher][tabNumParking];
        console.log("Le pourcentage de places dispos au parking " + numParking + " est de : " + resultat + "%");
        //document.body.innerHTML = "Le calcul va être effectué pour le "+ jour + " à " + heure + "h" + minute;
        return resultat;
    };
    // minus adult when click minus button
    TripDetailPage3AvecPourcentage.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPage3AvecPourcentage.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPage3AvecPourcentage.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPage3AvecPourcentage.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPage3AvecPourcentage.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__["a" /* CheckoutTripPage */]);
    };
    return TripDetailPage3AvecPourcentage;
}());
TripDetailPage3AvecPourcentage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trip-detail',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detailAvecPourcentage.html"*/' <!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>{{ trip.nomParking }}</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of trip.images">\n      <img [src]="image" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--services-->\n  <ion-grid class="border-bottom dark-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-sm">\n          <div>\n            <ion-icon name="time" class="text-white"></ion-icon>\n            <span ion-text color="light">{{ trip.horaire }}</span>\n            <br>\n            <ion-icon name="ios-calculator-outline" class="text-white"></ion-icon>\n            <span ion-text color="light"> {{ this.pourcentage }} % de places disponibles</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--high light-->\n  <div class="border-bottom" padding>\n    <span ion-text color="dark" class="bold">INFORMATIONS</span>\n    <ul class="highlight">\n      <li *ngFor="let information of trip.informations">\n        <ion-icon name="checkmark" class="text-green"></ion-icon>\n        <span ion-text color="primary">{{ information }}</span>\n      </li>\n    </ul>\n  </div>\n\n  <!--address-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">ADRESSE</span>\n    <p ion-text>{{ trip.adresse }}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detailAvecPourcentage.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]) === "function" && _b || Object])
], TripDetailPage3AvecPourcentage);

var _a, _b;
//# sourceMappingURL=trip-detail3AvecPourcentage.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPage4AvecPourcentage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripDetailPage4AvecPourcentage = (function () {
    function TripDetailPage4AvecPourcentage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // number of adultde
        this.adults = 2;
        // number of childrenn
        this.children = 0;
        this.pourcentage = 0;
        // set sample datad
        this.pourcentage = this.calculPourcentage();
        this.trip = tripService.getItem(4);
    }
    TripDetailPage4AvecPourcentage.prototype.calculPourcentage = function () {
        var numParking = 4;
        var tabNumParking = numParking - 1;
        //Fonction pour récupérer la semaine
        Date.prototype.getWeek = function () {
            var date = new Date(this.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
        };
        //Tableau semaines alternantes ou non
        // 1 s'ils sont en entreprise
        //0 s'ils sont formation au CERI
        var alternant = [1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
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
        var jourSemaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
        var jour = jourSemaine[d.getDay() - 1];
        var heure = d.getHours();
        var minute = d.getMinutes();
        var semaine = (d.getWeek()) - 1;
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
            semaine = semaine + 1;
        }
        else {
            if (heure >= 18) {
                if (jour == "vendredi") {
                    jour = "lundi";
                    semaine = semaine + 1;
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
        if (alternant[semaine] == 1) {
            alt = "NonAlt";
        }
        else {
            alt = "Alt";
        }
        //Valeur à chercher dans le tableau
        var aChercher = jour + alt + heure + "h" + minute;
        console.log("DATE : " + aChercher);
        var resultat = tabData[aChercher][tabNumParking];
        console.log("Le pourcentage de places dispos au parking " + numParking + " est de : " + resultat + "%");
        //document.body.innerHTML = "Le calcul va être effectué pour le "+ jour + " à " + heure + "h" + minute;
        return resultat;
    };
    // minus adult when click minus button
    TripDetailPage4AvecPourcentage.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPage4AvecPourcentage.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPage4AvecPourcentage.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPage4AvecPourcentage.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPage4AvecPourcentage.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__["a" /* CheckoutTripPage */]);
    };
    return TripDetailPage4AvecPourcentage;
}());
TripDetailPage4AvecPourcentage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trip-detail',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detailAvecPourcentage.html"*/' <!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>{{ trip.nomParking }}</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of trip.images">\n      <img [src]="image" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--services-->\n  <ion-grid class="border-bottom dark-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-sm">\n          <div>\n            <ion-icon name="time" class="text-white"></ion-icon>\n            <span ion-text color="light">{{ trip.horaire }}</span>\n            <br>\n            <ion-icon name="ios-calculator-outline" class="text-white"></ion-icon>\n            <span ion-text color="light"> {{ this.pourcentage }} % de places disponibles</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--high light-->\n  <div class="border-bottom" padding>\n    <span ion-text color="dark" class="bold">INFORMATIONS</span>\n    <ul class="highlight">\n      <li *ngFor="let information of trip.informations">\n        <ion-icon name="checkmark" class="text-green"></ion-icon>\n        <span ion-text color="primary">{{ information }}</span>\n      </li>\n    </ul>\n  </div>\n\n  <!--address-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">ADRESSE</span>\n    <p ion-text>{{ trip.adresse }}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detailAvecPourcentage.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]) === "function" && _b || Object])
], TripDetailPage4AvecPourcentage);

var _a, _b;
//# sourceMappingURL=trip-detail4AvecPourcentage.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPage5AvecPourcentage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripDetailPage5AvecPourcentage = (function () {
    function TripDetailPage5AvecPourcentage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // number of adultde
        this.adults = 2;
        // number of childrenn
        this.children = 0;
        this.pourcentage = 0;
        // set sample datad
        this.pourcentage = this.calculPourcentage();
        this.trip = tripService.getItem(5);
    }
    TripDetailPage5AvecPourcentage.prototype.calculPourcentage = function () {
        var numParking = 5;
        var tabNumParking = numParking - 1;
        //Fonction pour récupérer la semaine
        Date.prototype.getWeek = function () {
            var date = new Date(this.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
        };
        //Tableau semaines alternantes ou non
        // 1 s'ils sont en entreprise
        //0 s'ils sont formation au CERI
        var alternant = [1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
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
        var jourSemaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
        var jour = jourSemaine[d.getDay() - 1];
        var heure = d.getHours();
        var minute = d.getMinutes();
        var semaine = (d.getWeek()) - 1;
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
            semaine = semaine + 1;
        }
        else {
            if (heure >= 18) {
                if (jour == "vendredi") {
                    jour = "lundi";
                    semaine = semaine + 1;
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
        if (alternant[semaine] == 1) {
            alt = "NonAlt";
        }
        else {
            alt = "Alt";
        }
        //Valeur à chercher dans le tableau
        var aChercher = jour + alt + heure + "h" + minute;
        console.log("DATE : " + aChercher);
        var resultat = tabData[aChercher][tabNumParking];
        console.log("Le pourcentage de places dispos au parking " + numParking + " est de : " + resultat + "%");
        //document.body.innerHTML = "Le calcul va être effectué pour le "+ jour + " à " + heure + "h" + minute;
        return resultat;
    };
    // minus adult when click minus button
    TripDetailPage5AvecPourcentage.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPage5AvecPourcentage.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPage5AvecPourcentage.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPage5AvecPourcentage.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPage5AvecPourcentage.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__["a" /* CheckoutTripPage */]);
    };
    return TripDetailPage5AvecPourcentage;
}());
TripDetailPage5AvecPourcentage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trip-detail',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detailAvecPourcentage.html"*/' <!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>{{ trip.nomParking }}</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of trip.images">\n      <img [src]="image" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--services-->\n  <ion-grid class="border-bottom dark-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-sm">\n          <div>\n            <ion-icon name="time" class="text-white"></ion-icon>\n            <span ion-text color="light">{{ trip.horaire }}</span>\n            <br>\n            <ion-icon name="ios-calculator-outline" class="text-white"></ion-icon>\n            <span ion-text color="light"> {{ this.pourcentage }} % de places disponibles</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--high light-->\n  <div class="border-bottom" padding>\n    <span ion-text color="dark" class="bold">INFORMATIONS</span>\n    <ul class="highlight">\n      <li *ngFor="let information of trip.informations">\n        <ion-icon name="checkmark" class="text-green"></ion-icon>\n        <span ion-text color="primary">{{ information }}</span>\n      </li>\n    </ul>\n  </div>\n\n  <!--address-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">ADRESSE</span>\n    <p ion-text>{{ trip.adresse }}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detailAvecPourcentage.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]) === "function" && _b || Object])
], TripDetailPage5AvecPourcentage);

var _a, _b;
//# sourceMappingURL=trip-detail5AvecPourcentage.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsPage2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detailAvecPourcentage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trip_detail_trip_detail2AvecPourcentage__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trip_detail_trip_detail3AvecPourcentage__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trip_detail_trip_detail4AvecPourcentage__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trip_detail_trip_detail5AvecPourcentage__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TripsPage2 = (function () {
    function TripsPage2(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        this.bonparking = 2;
        // set sample data
        ////this.trips = tripService.getAll();
        console.log("test");
        //this.bonparking = tripService.calcul();
        this.viewDetail(this.bonparking);
    }
    // view trip detail
    TripsPage2.prototype.viewDetail = function (id) {
        console.log(id);
        console.log("creation TripDetailPage");
        if (this.bonparking == 1) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detailAvecPourcentage__["a" /* TripDetailPageAvecPourcentage */]);
        }
        if (this.bonparking == 2) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__trip_detail_trip_detail2AvecPourcentage__["a" /* TripDetailPage2AvecPourcentage */]);
        }
        if (this.bonparking == 3) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__trip_detail_trip_detail3AvecPourcentage__["a" /* TripDetailPage3AvecPourcentage */]);
        }
        if (this.bonparking == 4) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__trip_detail_trip_detail4AvecPourcentage__["a" /* TripDetailPage4AvecPourcentage */]);
        }
        if (this.bonparking == 5) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__trip_detail_trip_detail5AvecPourcentage__["a" /* TripDetailPage5AvecPourcentage */]);
        }
        //this.nav.push(TripDetailPage, {id: id});
    };
    return TripsPage2;
}());
TripsPage2 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trips',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trips/trips.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>Résultats</span>\n    </ion-title>\n  </ion-navbar>\n\n  <!--  -->\n  <ion-toolbar padding color="light">\n    <p ion-text no-margin class="text-white">\n      <strong> Chargement en cours ...</strong>\n    </p>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding class="trips detail-bg">\n  <!--list of trips-->\n  <div class="trip card" *ngFor="let trip of trips" tappable (click)="viewDetail(trip.id)" margin-bottom>\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.imagePrincipale + \')\'}">\n      <div class="background-filter rlt">\n        <div class="align-bottom" padding-left padding-right>\n          <h6 class="pull-left text-white" ion-text>{{ trip.nomParking }}</h6>\n          <h6 class="pull-right text-white" ion-text>\n            <ion-icon name="time" class="text-white"></ion-icon> {{ trip.horaire }}\n          </h6>\n\n\n          <div class="clear"></div>\n        </div>\n      </div>\n    </div>\n    <div class="padding-sm primary-bg">\n      <ion-icon name="ios-arrow-dropright" class="text-white"></ion-icon>\n      <span ion-text class="text-green bold"> {{ trip.placesDispos }} %</span>\n\n      <span class=" pull-right" ion-text color="danger"><strong>de places disponibles</strong></span>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trips/trips.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]) === "function" && _b || Object])
], TripsPage2);

var _a, _b;
//# sourceMappingURL=trips2.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsPage3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detailAvecPourcentage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trip_detail_trip_detail2AvecPourcentage__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trip_detail_trip_detail3AvecPourcentage__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trip_detail_trip_detail4AvecPourcentage__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trip_detail_trip_detail5AvecPourcentage__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TripsPage3 = (function () {
    function TripsPage3(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        this.bonparking = 3;
        // set sample data
        ////this.trips = tripService.getAll();
        console.log("test");
        //this.bonparking = tripService.calcul();
        this.viewDetail(this.bonparking);
    }
    // view trip detail
    TripsPage3.prototype.viewDetail = function (id) {
        console.log(id);
        console.log("creation TripDetailPage");
        if (this.bonparking == 1) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detailAvecPourcentage__["a" /* TripDetailPageAvecPourcentage */]);
        }
        if (this.bonparking == 2) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__trip_detail_trip_detail2AvecPourcentage__["a" /* TripDetailPage2AvecPourcentage */]);
        }
        if (this.bonparking == 3) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__trip_detail_trip_detail3AvecPourcentage__["a" /* TripDetailPage3AvecPourcentage */]);
        }
        if (this.bonparking == 4) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__trip_detail_trip_detail4AvecPourcentage__["a" /* TripDetailPage4AvecPourcentage */]);
        }
        if (this.bonparking == 5) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__trip_detail_trip_detail5AvecPourcentage__["a" /* TripDetailPage5AvecPourcentage */]);
        }
        //this.nav.push(TripDetailPage, {id: id});
    };
    return TripsPage3;
}());
TripsPage3 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trips',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trips/trips.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>Résultats</span>\n    </ion-title>\n  </ion-navbar>\n\n  <!--  -->\n  <ion-toolbar padding color="light">\n    <p ion-text no-margin class="text-white">\n      <strong> Chargement en cours ...</strong>\n    </p>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding class="trips detail-bg">\n  <!--list of trips-->\n  <div class="trip card" *ngFor="let trip of trips" tappable (click)="viewDetail(trip.id)" margin-bottom>\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.imagePrincipale + \')\'}">\n      <div class="background-filter rlt">\n        <div class="align-bottom" padding-left padding-right>\n          <h6 class="pull-left text-white" ion-text>{{ trip.nomParking }}</h6>\n          <h6 class="pull-right text-white" ion-text>\n            <ion-icon name="time" class="text-white"></ion-icon> {{ trip.horaire }}\n          </h6>\n\n\n          <div class="clear"></div>\n        </div>\n      </div>\n    </div>\n    <div class="padding-sm primary-bg">\n      <ion-icon name="ios-arrow-dropright" class="text-white"></ion-icon>\n      <span ion-text class="text-green bold"> {{ trip.placesDispos }} %</span>\n\n      <span class=" pull-right" ion-text color="danger"><strong>de places disponibles</strong></span>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trips/trips.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]) === "function" && _b || Object])
], TripsPage3);

var _a, _b;
//# sourceMappingURL=trips3.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsPage4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detailAvecPourcentage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trip_detail_trip_detail2AvecPourcentage__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trip_detail_trip_detail3AvecPourcentage__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trip_detail_trip_detail4AvecPourcentage__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trip_detail_trip_detail5AvecPourcentage__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TripsPage4 = (function () {
    function TripsPage4(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        this.bonparking = 4;
        // set sample data
        ////this.trips = tripService.getAll();
        console.log("test");
        //this.bonparking = tripService.calcul();
        this.viewDetail(this.bonparking);
    }
    // view trip detail
    TripsPage4.prototype.viewDetail = function (id) {
        console.log(id);
        console.log("creation TripDetailPage");
        if (this.bonparking == 1) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detailAvecPourcentage__["a" /* TripDetailPageAvecPourcentage */]);
        }
        if (this.bonparking == 2) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__trip_detail_trip_detail2AvecPourcentage__["a" /* TripDetailPage2AvecPourcentage */]);
        }
        if (this.bonparking == 3) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__trip_detail_trip_detail3AvecPourcentage__["a" /* TripDetailPage3AvecPourcentage */]);
        }
        if (this.bonparking == 4) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__trip_detail_trip_detail4AvecPourcentage__["a" /* TripDetailPage4AvecPourcentage */]);
        }
        if (this.bonparking == 5) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__trip_detail_trip_detail5AvecPourcentage__["a" /* TripDetailPage5AvecPourcentage */]);
        }
        //this.nav.push(TripDetailPage, {id: id});
    };
    return TripsPage4;
}());
TripsPage4 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trips',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trips/trips.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>Résultats</span>\n    </ion-title>\n  </ion-navbar>\n\n  <!--  -->\n  <ion-toolbar padding color="light">\n    <p ion-text no-margin class="text-white">\n      <strong> Chargement en cours ...</strong>\n    </p>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding class="trips detail-bg">\n  <!--list of trips-->\n  <div class="trip card" *ngFor="let trip of trips" tappable (click)="viewDetail(trip.id)" margin-bottom>\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.imagePrincipale + \')\'}">\n      <div class="background-filter rlt">\n        <div class="align-bottom" padding-left padding-right>\n          <h6 class="pull-left text-white" ion-text>{{ trip.nomParking }}</h6>\n          <h6 class="pull-right text-white" ion-text>\n            <ion-icon name="time" class="text-white"></ion-icon> {{ trip.horaire }}\n          </h6>\n\n\n          <div class="clear"></div>\n        </div>\n      </div>\n    </div>\n    <div class="padding-sm primary-bg">\n      <ion-icon name="ios-arrow-dropright" class="text-white"></ion-icon>\n      <span ion-text class="text-green bold"> {{ trip.placesDispos }} %</span>\n\n      <span class=" pull-right" ion-text color="danger"><strong>de places disponibles</strong></span>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trips/trips.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]) === "function" && _b || Object])
], TripsPage4);

var _a, _b;
//# sourceMappingURL=trips4.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsPage5; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detailAvecPourcentage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trip_detail_trip_detail2AvecPourcentage__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trip_detail_trip_detail3AvecPourcentage__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trip_detail_trip_detail4AvecPourcentage__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trip_detail_trip_detail5AvecPourcentage__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TripsPage5 = (function () {
    function TripsPage5(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        this.bonparking = 5;
        // set sample data
        ////this.trips = tripService.getAll();
        console.log("test");
        //this.bonparking = tripService.calcul();
        this.viewDetail(this.bonparking);
    }
    // view trip detail
    TripsPage5.prototype.viewDetail = function (id) {
        console.log(id);
        console.log("creation TripDetailPage");
        if (this.bonparking == 1) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detailAvecPourcentage__["a" /* TripDetailPageAvecPourcentage */]);
        }
        if (this.bonparking == 2) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__trip_detail_trip_detail2AvecPourcentage__["a" /* TripDetailPage2AvecPourcentage */]);
        }
        if (this.bonparking == 3) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__trip_detail_trip_detail3AvecPourcentage__["a" /* TripDetailPage3AvecPourcentage */]);
        }
        if (this.bonparking == 4) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__trip_detail_trip_detail4AvecPourcentage__["a" /* TripDetailPage4AvecPourcentage */]);
        }
        if (this.bonparking == 5) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__trip_detail_trip_detail5AvecPourcentage__["a" /* TripDetailPage5AvecPourcentage */]);
        }
        //this.nav.push(TripDetailPage, {id: id});
    };
    return TripsPage5;
}());
TripsPage5 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trips',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trips/trips.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>Résultats</span>\n    </ion-title>\n  </ion-navbar>\n\n  <!--  -->\n  <ion-toolbar padding color="light">\n    <p ion-text no-margin class="text-white">\n      <strong> Chargement en cours ...</strong>\n    </p>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding class="trips detail-bg">\n  <!--list of trips-->\n  <div class="trip card" *ngFor="let trip of trips" tappable (click)="viewDetail(trip.id)" margin-bottom>\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.imagePrincipale + \')\'}">\n      <div class="background-filter rlt">\n        <div class="align-bottom" padding-left padding-right>\n          <h6 class="pull-left text-white" ion-text>{{ trip.nomParking }}</h6>\n          <h6 class="pull-right text-white" ion-text>\n            <ion-icon name="time" class="text-white"></ion-icon> {{ trip.horaire }}\n          </h6>\n\n\n          <div class="clear"></div>\n        </div>\n      </div>\n    </div>\n    <div class="padding-sm primary-bg">\n      <ion-icon name="ios-arrow-dropright" class="text-white"></ion-icon>\n      <span ion-text class="text-green bold"> {{ trip.placesDispos }} %</span>\n\n      <span class=" pull-right" ion-text color="danger"><strong>de places disponibles</strong></span>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trips/trips.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]) === "function" && _b || Object])
], TripsPage5);

var _a, _b;
//# sourceMappingURL=trips5.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {SearchCarsPage} from "../search-cars/search-cars";
var SearchLocationPage = (function () {
    function SearchLocationPage(storage, nav, navParams) {
        this.storage = storage;
        this.nav = nav;
        this.navParams = navParams;
        // places
        this.places = {
            nearby: [
                {
                    id: 1,
                    name: "Tous les parkings"
                },
                {
                    id: 2,
                    name: "Parking 1"
                },
                {
                    id: 3,
                    name: "Parking 2"
                },
                {
                    id: 4,
                    name: "Parking 3"
                },
                {
                    id: 5,
                    name: "Parking 4"
                },
                {
                    id: 6,
                    name: "Parking 5"
                }
            ],
        };
        this.fromto = this.navParams.data;
    }
    // search by item
    SearchLocationPage.prototype.searchBy = function (item) {
        if (this.fromto === 'from') {
            this.storage.set('pickup', item.name);
        }
        if (this.fromto === 'to') {
            this.storage.set('dropOff', item.name);
        }
        // this.nav.push(SearchCarsPage);
        this.nav.pop();
    };
    return SearchLocationPage;
}());
SearchLocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search-location',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/search-location/search-location.html"*/'<!-- # -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title> Choix Parking </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="list-no-border">\n    <!--nearby places-->\n    <ion-item *ngFor="let item of places.nearby" tappable (click)="searchBy(item)">\n      <ion-icon name="ios-car" item-left color="primary"></ion-icon>\n      <span ion-text color="primary">{{ item.name }}</span>\n    </ion-item>\n    <!--recent places-->\n    <ion-item *ngFor="let item of places.recent" tappable (click)="searchBy(item)">\n      <ion-icon name="md-time" item-left color="primary"></ion-icon>\n      <span ion-text color="primary">{{ item.name }}</span>\n    </ion-item>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/search-location/search-location.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SearchLocationPage);

//# sourceMappingURL=search-location.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(240);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_activity_service__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_trip_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_weather__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_checkout_trip_checkout_trip__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_notifications_notifications__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_register__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_search_location_search_location__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_trip_detail_trip_detail__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_trip_detail_trip_detail2__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_trip_detail_trip_detail3__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_trip_detail_trip_detail4__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_trip_detail_trip_detail5__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_trips_trips__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_trips_trips1__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_trips_trips2__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_trips_trips3__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_trips_trips4__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_trips_trips5__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_trip_detail_trip_detailAvecPourcentage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_trip_detail_trip_detail2AvecPourcentage__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_trip_detail_trip_detail3AvecPourcentage__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_trip_detail_trip_detail4AvecPourcentage__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_trip_detail_trip_detail5AvecPourcentage__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_local_weather_local_weather__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































// import services
// end import services
// end import services
// import pages
// end import pages
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_local_weather_local_weather__["a" /* LocalWeatherPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_search_location_search_location__["a" /* SearchLocationPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_trip_detail_trip_detail__["a" /* TripDetailPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_trip_detail_trip_detail2__["a" /* TripDetailPage2 */],
            __WEBPACK_IMPORTED_MODULE_21__pages_trip_detail_trip_detail3__["a" /* TripDetailPage3 */],
            __WEBPACK_IMPORTED_MODULE_22__pages_trip_detail_trip_detail4__["a" /* TripDetailPage4 */],
            __WEBPACK_IMPORTED_MODULE_23__pages_trip_detail_trip_detail5__["a" /* TripDetailPage5 */],
            __WEBPACK_IMPORTED_MODULE_24__pages_trips_trips__["a" /* TripsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_trips_trips1__["a" /* TripsPage1 */],
            __WEBPACK_IMPORTED_MODULE_26__pages_trips_trips2__["a" /* TripsPage2 */],
            __WEBPACK_IMPORTED_MODULE_27__pages_trips_trips3__["a" /* TripsPage3 */],
            __WEBPACK_IMPORTED_MODULE_28__pages_trips_trips4__["a" /* TripsPage4 */],
            __WEBPACK_IMPORTED_MODULE_29__pages_trips_trips5__["a" /* TripsPage5 */],
            __WEBPACK_IMPORTED_MODULE_30__pages_trip_detail_trip_detailAvecPourcentage__["a" /* TripDetailPageAvecPourcentage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_trip_detail_trip_detail2AvecPourcentage__["a" /* TripDetailPage2AvecPourcentage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_trip_detail_trip_detail3AvecPourcentage__["a" /* TripDetailPage3AvecPourcentage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_trip_detail_trip_detail4AvecPourcentage__["a" /* TripDetailPage4AvecPourcentage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_trip_detail_trip_detail5AvecPourcentage__["a" /* TripDetailPage5AvecPourcentage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {
                scrollPadding: false,
                scrollAssist: true,
                autoFocusAssist: false
            }, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__ionic3_start_theme',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_local_weather_local_weather__["a" /* LocalWeatherPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_search_location_search_location__["a" /* SearchLocationPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_trip_detail_trip_detail__["a" /* TripDetailPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_trip_detail_trip_detail2__["a" /* TripDetailPage2 */],
            __WEBPACK_IMPORTED_MODULE_21__pages_trip_detail_trip_detail3__["a" /* TripDetailPage3 */],
            __WEBPACK_IMPORTED_MODULE_22__pages_trip_detail_trip_detail4__["a" /* TripDetailPage4 */],
            __WEBPACK_IMPORTED_MODULE_23__pages_trip_detail_trip_detail5__["a" /* TripDetailPage5 */],
            __WEBPACK_IMPORTED_MODULE_24__pages_trips_trips__["a" /* TripsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_trips_trips1__["a" /* TripsPage1 */],
            __WEBPACK_IMPORTED_MODULE_26__pages_trips_trips2__["a" /* TripsPage2 */],
            __WEBPACK_IMPORTED_MODULE_27__pages_trips_trips3__["a" /* TripsPage3 */],
            __WEBPACK_IMPORTED_MODULE_28__pages_trips_trips4__["a" /* TripsPage4 */],
            __WEBPACK_IMPORTED_MODULE_29__pages_trips_trips5__["a" /* TripsPage5 */],
            __WEBPACK_IMPORTED_MODULE_30__pages_trip_detail_trip_detailAvecPourcentage__["a" /* TripDetailPageAvecPourcentage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_trip_detail_trip_detail2AvecPourcentage__["a" /* TripDetailPage2AvecPourcentage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_trip_detail_trip_detail3AvecPourcentage__["a" /* TripDetailPage3AvecPourcentage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_trip_detail_trip_detail4AvecPourcentage__["a" /* TripDetailPage4AvecPourcentage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_trip_detail_trip_detail5AvecPourcentage__["a" /* TripDetailPage5AvecPourcentage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_8__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_9__services_trip_service__["a" /* TripService */],
            __WEBPACK_IMPORTED_MODULE_10__services_weather__["a" /* WeatherProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_activities__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityService = (function () {
    function ActivityService() {
        this.activities = __WEBPACK_IMPORTED_MODULE_1__mock_activities__["a" /* ACTIVITIES */];
    }
    ActivityService.prototype.getAll = function () {
        return this.activities;
    };
    ActivityService.prototype.getItem = function (id) {
        for (var i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id === parseInt(id)) {
                return this.activities[i];
            }
        }
        return null;
    };
    ActivityService.prototype.remove = function (item) {
        this.activities.splice(this.activities.indexOf(item), 1);
    };
    return ActivityService;
}());
ActivityService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ActivityService);

//# sourceMappingURL=activity-service.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTIVITIES; });
var ACTIVITIES = [];
//# sourceMappingURL=mock-activities.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRIPS; });
var TRIPS = [
    {
        id: 1,
        nomParking: "Parking 1",
        placesDispos: 60,
        horaire: "11h30 - 13h",
        imagePrincipale: "assets/img/parking1/1.jpg",
        adresse: "436 Chemin des Meinajaries, 84140 Avignon",
        images: [
            "assets/img/parking1/1.jpg",
            "assets/img/parking1/2.jpg",
            "assets/img/parking1/3.jpg",
            "assets/img/parking1/4.jpg",
        ],
        informations: [
            "Le parking comporte 22 places",
        ]
    },
    {
        id: 2,
        nomParking: "Parking 2",
        placesDispos: 90,
        horaire: "4h",
        imagePrincipale: "assets/img/parking2/1.jpg",
        adresse: "200 Rue Michel de Montaigne, 84140 Avignon",
        images: [
            "assets/img/parking2/1.jpg",
            "assets/img/parking2/2.jpg",
            "assets/img/parking2/3.jpg",
            "assets/img/parking2/4.jpg",
        ],
        informations: [
            "Le parking comporte 24 places",
            "Le parking est situé sur la droite quand vous entrez à l'adresse indiqué",
        ]
    },
    {
        id: 3,
        nomParking: "Parking 3",
        placesDispos: 30,
        horaire: "6h",
        imagePrincipale: "assets/img/parking3/1.jpg",
        adresse: "200 Rue Michel de Montaigne, 84140 Avignon",
        images: [
            "assets/img/parking3/1.jpg",
            "assets/img/parking3/2.jpg",
            "assets/img/parking3/3.jpg",
            "assets/img/parking3/4.jpg",
        ],
        informations: [
            "Le parking comporte 27 places",
            "Le parking est situé en face quand vous entrez à l'adresse indiqué",
        ]
    },
    {
        id: 4,
        nomParking: "Parking 4",
        placesDispos: 100,
        horaire: "24h",
        imagePrincipale: "assets/img/parking4/1.jpg",
        adresse: "200 Rue Michel de Montaigne, 84140 Avignon",
        images: [
            "assets/img/parking4/1.jpg",
            "assets/img/parking4/2.jpg",
            "assets/img/parking4/3.jpg",
            "assets/img/parking4/4.jpg",
        ],
        informations: [
            "Le parking comporte 31 places",
            "Le parking est situé sur la gauche puis à droite quand vous entrez à l'adresse indiqué",
        ]
    },
    {
        id: 5,
        nomParking: "Parking 5",
        placesDispos: 35,
        horaire: "24h",
        imagePrincipale: "assets/img/parking5/1.jpg",
        adresse: "200 Rue Michel de Montaigne, 84140 Avignon",
        images: [
            "assets/img/parking5/1.jpg",
            "assets/img/parking5/2.jpg",
            "assets/img/parking5/3.jpg",
            "assets/img/parking5/4.jpg",
        ],
        informations: [
            "Le parking comporte 29 places",
            "Le parking est situé sur la gauche puis au fond à droite quand vous entrez à l'adresse indiqué",
        ]
    }
];
//# sourceMappingURL=mock-trips.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Accueil', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'ios-home' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            //*** Control Splash Screen
            // this.splashScreen.show();
            // this.splashScreen.hide();
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            //*** Control Keyboard
            //this.keyboard.disableScroll(true);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/app/app.html"*/'<ion-menu side="left" id="authenticated" [content]="content">\n  <ion-header>\n  </ion-header>\n\n  <ion-content color="primary">\n\n    <ion-list class="user-list">\n      <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon" color="primary"></ion-icon>\n        <span ion-text color="primary">{{menuItem.title}}</span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalWeatherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weather__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HttpErrorResponse } from '@angular/common/http';
var LocalWeatherPage = (function () {
    function LocalWeatherPage(navCtrl, weatherProvider, storage) {
        this.navCtrl = navCtrl;
        this.weatherProvider = weatherProvider;
        this.storage = storage;
        this.locationList = [
            { city: 'Los Angeles', state: 'CA' },
            { city: 'Miami', state: 'FL' },
            { city: 'New York', state: 'NY' },
            { city: 'Seattle', state: 'WA' }
        ];
    }
    LocalWeatherPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('location').then(function (val) {
            if (val != null) {
                _this.location = JSON.parse(val);
            }
            else {
                _this.location = {
                    state: 'NY',
                    city: 'New York'
                };
            }
            _this.getWeather(_this.location);
        });
    };
    LocalWeatherPage.prototype.getWeather = function (location) {
        var _this = this;
        if (typeof location === 'string') {
            this.location = JSON.parse(location);
            console.log(this.location);
        }
        else {
            this.location = location;
        }
        this.weatherProvider.getWeather(this.location.state, this.location.city).subscribe(function (weather) {
            _this.weather = weather.current_observation;
        });
    };
    return LocalWeatherPage;
}());
LocalWeatherPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-local-weather',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/local-weather/local-weather.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Local Weather</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="common-bg">\n  <ion-card class="full-width" no-margin margin-bottom>\n    <ion-card-content no-padding>\n\n      <ion-item>\n        <ion-label class="text-1x bold">Select Local</ion-label>\n        <ion-select [(ngModel)]="location" (ionChange)="getWeather(location)">\n          <ion-option *ngFor="let location of locationList" [value]="location">{{ location.city }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-grid class="card" padding *ngIf="weather">\n    <ion-row>\n        <ion-col width-50 offset-25>\n            <h2 class="location text-dark">{{weather.display_location.full}}</h2>\n            <div class="icon"><img src="{{weather.icon_url}}" alt="weather"></div>\n            <h3 class="desc">{{weather.weather}}</h3>\n            <h1 class="temp">{{weather.temp_c}}&deg;</h1>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col width-100>\n            <ion-list>\n\n                <ion-item>\n                <strong>Temp:</strong> {{weather.temperature_string}}\n                </ion-item>\n                 <ion-item>\n                    <strong>Relative Humidity:</strong> {{weather.relative_humidity}}\n                </ion-item>\n                 <ion-item>\n                    <strong>Dewpoint:</strong> {{weather.dewpoint_string}}\n                </ion-item>\n                 <ion-item>\n                    <strong>Visibility:</strong> {{weather.visibility_km}}\n                </ion-item>\n                <ion-item>\n                    <strong>Heat Index:</strong> {{weather.heat_index_string}}\n                </ion-item>\n\n            </ion-list>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/local-weather/local-weather.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_weather__["a" /* WeatherProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], LocalWeatherPage);

//# sourceMappingURL=local-weather.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPageAvecPourcentage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripDetailPageAvecPourcentage = (function () {
    function TripDetailPageAvecPourcentage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // number of adultde
        this.adults = 2;
        // number of childrenn
        this.children = 0;
        this.pourcentage = 0;
        // set sample datad
        this.pourcentage = this.calculPourcentage();
        this.trip = tripService.getItem(1);
    }
    TripDetailPageAvecPourcentage.prototype.calculPourcentage = function () {
        var numParking = 1;
        var tabNumParking = numParking - 1;
        //Fonction pour récupérer la semaine
        Date.prototype.getWeek = function () {
            var date = new Date(this.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
        };
        //Tableau semaines alternantes ou non
        // 1 s'ils sont en entreprise
        //0 s'ils sont formation au CERI
        var alternant = [1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
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
        var jourSemaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
        var jour = jourSemaine[d.getDay() - 1];
        var heure = d.getHours();
        var minute = d.getMinutes();
        var semaine = (d.getWeek()) - 1;
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
            semaine = semaine + 1;
        }
        else {
            if (heure >= 18) {
                if (jour == "vendredi") {
                    jour = "lundi";
                    semaine = semaine + 1;
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
        if (alternant[semaine] == 1) {
            alt = "NonAlt";
        }
        else {
            alt = "Alt";
        }
        //Valeur à chercher dans le tableau
        var aChercher = jour + alt + heure + "h" + minute;
        console.log("DATE : " + aChercher);
        var resultat = tabData[aChercher][tabNumParking];
        console.log("Le pourcentage de places dispos au parking " + numParking + " est de : " + resultat + "%");
        //document.body.innerHTML = "Le calcul va être effectué pour le "+ jour + " à " + heure + "h" + minute;
        return resultat;
    };
    // minus adult when click minus button
    TripDetailPageAvecPourcentage.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPageAvecPourcentage.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPageAvecPourcentage.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPageAvecPourcentage.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPageAvecPourcentage.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__["a" /* CheckoutTripPage */]);
    };
    return TripDetailPageAvecPourcentage;
}());
TripDetailPageAvecPourcentage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trip-detail',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detailAvecPourcentage.html"*/' <!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>{{ trip.nomParking }}</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of trip.images">\n      <img [src]="image" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--services-->\n  <ion-grid class="border-bottom dark-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-sm">\n          <div>\n            <ion-icon name="time" class="text-white"></ion-icon>\n            <span ion-text color="light">{{ trip.horaire }}</span>\n            <br>\n            <ion-icon name="ios-calculator-outline" class="text-white"></ion-icon>\n            <span ion-text color="light"> {{ this.pourcentage }} % de places disponibles</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--high light-->\n  <div class="border-bottom" padding>\n    <span ion-text color="dark" class="bold">INFORMATIONS</span>\n    <ul class="highlight">\n      <li *ngFor="let information of trip.informations">\n        <ion-icon name="checkmark" class="text-green"></ion-icon>\n        <span ion-text color="primary">{{ information }}</span>\n      </li>\n    </ul>\n  </div>\n\n  <!--address-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">ADRESSE</span>\n    <p ion-text>{{ trip.adresse }}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/trip-detail/trip-detailAvecPourcentage.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]) === "function" && _b || Object])
], TripDetailPageAvecPourcentage);

var _a, _b;
//# sourceMappingURL=trip-detailAvecPourcentage.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trips_trips__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trips_trips1__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trips_trips2__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__trips_trips3__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__trips_trips4__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__trips_trips5__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_location_search_location__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomePage = (function () {
    function HomePage(storage, nav, popoverCtrl) {
        this.storage = storage;
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        // search condition
        this.search = {
            name: "Parking",
            date: new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString()
        };
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('pickup').then(function (val) {
            if (val === null) {
                _this.search.name = "Tous les parkings";
            }
            else {
                _this.search.name = val;
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    // go to result page
    HomePage.prototype.doSearch = function () {
        if (this.search.name == "Tous les parkings") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__trips_trips__["a" /* TripsPage */]);
        }
        else {
            if (this.search.name == "Parking 1") {
                console.log("tesRRt");
                this.nav.push(__WEBPACK_IMPORTED_MODULE_6__trips_trips1__["a" /* TripsPage1 */]);
            }
            if (this.search.name == "Parking 2") {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_7__trips_trips2__["a" /* TripsPage2 */]);
            }
            if (this.search.name == "Parking 3") {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_8__trips_trips3__["a" /* TripsPage3 */]);
            }
            if (this.search.name == "Parking 4") {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_9__trips_trips4__["a" /* TripsPage4 */]);
            }
            if (this.search.name == "Parking 5") {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_10__trips_trips5__["a" /* TripsPage5 */]);
            }
        }
    };
    // choose place
    HomePage.prototype.choosePlace = function (from) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__search_location_search_location__["a" /* SearchLocationPage */], from);
    };
    // to go account page
    HomePage.prototype.goToAccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.presentNotifications = function (myEvent) {
        console.log(myEvent);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* NotificationsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/home/home.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <strong>CERI PARK</strong> Recherche\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button tappable (click)="presentNotifications($event)">\n        <ion-icon name="notifications"></ion-icon>\n      </button>\n      <button ion-button tappable (click)="goToAccount()">\n        <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg">\n\n  <ion-card no-margin margin-bottom class="full-width">\n    <ion-item tappable (click)="choosePlace(\'from\')" class="border-bottom">\n      <ion-icon name="ios-car-outline" color="primary" item-left></ion-icon>\n      <span>{{ search.name }}</span>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-calendar" color="primary" item-left></ion-icon>\n      <ion-datetime disabled class="no-pl" displayFormat="DD/MM/YYYY HH:mm" pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="search.date"></ion-datetime>\n    </ion-item>\n  </ion-card>\n\n  <button ion-button icon-start block no-margin color="primary" class="round" tappable (click)="doSearch()">\n    <ion-icon name="search"></ion-icon> Chercher une place\n  </button>\n\n</ion-content>'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */]])
], HomePage);

//
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(nav, forgotCtrl, menu, toastCtrl) {
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.menu.swipeEnable(false);
    }
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/login/login.html"*/'<!-- -->\n<ion-content padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        <h1><strong>CERI PARK</strong></h1><br>\n        <p ion-text class="text-secondary"> Allocation de places de parking autour du CERI</p> <br><br><br>\n      </h2>\n    </div>\n\n    <div>\n      <button ion-button icon-start block color="dark" tappable (click)="login()">\n        <ion-icon name="log-in"></ion-icon>\n        COMMENCER\n      </button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/rebug/Documents/GitHub/ceripark2mai/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[222]);
//# sourceMappingURL=main.js.map