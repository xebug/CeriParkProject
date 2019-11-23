import {Injectable} from "@angular/core";
import {TRIPS} from "./mock-trips";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {TripsPage} from "../trips/trips";



@Injectable()
export class TripService {
  private trips: any;

  constructor() {
    this.trips = TRIPS;
  }

  getAll() {
    return this.trips;
  }

  calcul() {
    declare global {
    interface Date {
        getWeek (start?: number) : [Date, Date]
    }
}
    //Fonction pour récupérer la semainee
    Date.prototype.getWeek = function(start) {
      var date = new Date(this.getTime());
      date.setHours(0, 0, 0, 0);
      // Thursday in current week decides the year.
      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
      // January 4 is always in week 1.
      var week1 = new Date(date.getFullYear(), 0, 4);
      // Adjust to Thursday in week 1 and count number of weeks from date to week1.
      return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                            - 3 + (week1.getDay() + 6) % 7) / 7);
    }

    //PARKINGS
    var parking = [0.165413533834587, 0.180451127819549, 0.203007518796992, 0.233082706766917, 0.218045112781955];

    //Tableau semaines alternantes ou non
    // 1 s'ils sont en entreprise
    //0 s'ils sont formation au CERI
    var alternant = [1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

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

    tabData["jeudiNonAlt8h30"] = [0.215676959619952, 0.217577197149644 , 0.0351543942992874 , 0.138242280285036 , 0.393349168646081 ];
    tabData["jeudiNonAlt10h0"] = [0.135542168674699, 0.126506024096386, 0.44578313253012 , 0.292168674698795 , 0 ];
    tabData["jeudiNonAlt11h30"] = [0.302568981921979, 0.19790675547098 , 0.246431969552807 , 0.122740247383444 , 0.13035204567079 ];
    tabData["jeudiNonAlt13h0"] = [0,0.563063063063063 , 0 , 0.436936936936937, 0 ];
    tabData["jeudiNonAlt14h30"] = [0.30952380952381, 0.212585034013605 , 0.251700680272109 , 0.110544217687075 , 0.115646258503401 ];
    tabData["jeudiNonAlt16h0"] = [0.204605611434621, 0.165431445209105 , 0.166490206458444 , 0.162255161461091 , 0.301217575436739 ];
    tabData["jeudiNonAlt17h30"] = [0.223935155753338, 0.185473617291799 , 0.212015257469803 , 0.153846153846154 , 0.224729815638907 ];

    tabData["vendrediNonAlt8h30"] = [0.164373642288197, 0.181028240405503 , 0.187545257060101 , 0.117306299782766 , 0.349746560463432 ];
    tabData["vendrediNonAlt10h0"] = [0.403914590747331, 0.149466192170818 , 0.263345195729537 , 0, 0.183274021352313 ];
    tabData["vendrediNonAlt11h30"] = [0.315921089191442, 0.150319533203668 , 0.236454570714087 , 0.134481800500139 , 0.162823006390664 ];
    tabData["vendrediNonAlt13h0"] = [0.301032565528197, 0.242785279322213 , 0.166534286470744 , 0.171035213132115 , 0.11861265554673 ];
    tabData["vendrediNonAlt14h30"] = [0.225231175693527, 0.299537648612946 , 0.256605019815059 , 0.1278071334214 , 0.0908190224570674 ];
    tabData["vendrediNonAlt16h0"] = [0.208673469387755, 0.219557823129252 , 0.220578231292517 , 0.181122448979592 , 0.170068027210884 ];
    tabData["vendrediNonAlt17h30"] = [0.224736636753804, 0.184289244375081 , 0.178306671868904 , 0.192872935362206 , 0.219794511640005 ];

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
    var jourSemaine= ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
    var jour = jourSemaine[d.getDay()-1];
    var heure = d.getHours();
    var minute = d.getMinutes();
    var start=1;
    var semaine = (d.getWeek(start))-1;

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
    console.log("A chercher " +aChercher);

    // Valeur X
    // X = Proba1 * ValPlacesLibres + Proba2 * NbPlaces
    // calcul[i] = proba1 * tabData[aChercher][i] + proba2 * parking[i];
    // Proba1 + Proba2 = 1
    var proba1 = 0.8;
    var proba2 = 1 - proba1;
    var calcul = [];

    for(var i=0; i<5; i++){
        calcul[i] = proba1 * tabData[aChercher][i] + proba2 * parking[i];
    }

    console.log("Tableau des valeurs à "+heure+"h"+minute+" le "+jour+" " + alt + " : " + calcul);

    var parkingNumero = calcul.indexOf(Math.max(...calcul));
    console.log("Plus grande valeur à l'indice " + parkingNumero + " valeurs = " + calcul[parkingNumero]);
    parkingNumero+=1;
    console.log("Nous vous conseillons de vous garer au parking " + parkingNumero);
    return parkingNumero
  }


  getItem(id) {

    console.log(id);
    for (var i = 0; i < this.trips.length; i++) {
      if (this.trips[i].id === parseInt(id)) {
        //return this.trips[i];
        return this.trips[i];
      }
    }
    return null; //remettre null;
  }

  remove(item) {
    this.trips.splice(this.trips.indexOf(item), 1);
  }
}
