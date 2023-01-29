// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"BE_data.json":[function(require,module,exports) {
module.exports = {
  "Events": [{
    "sport_event_id": "sr:sport_event:27636100",
    "start_date": "2021-06-22T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:37863",
      "name": "SS Folgore Falciano Calcio",
      "country": "San Marino",
      "country_code": "SMR",
      "abbreviation": "FFC",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:277829",
      "name": "FC Prishtina",
      "country": "Kosovo",
      "country_code": "KOS",
      "abbreviation": "PRI",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:8329",
      "name": "Elbasan Arena",
      "capacity": 12500,
      "city_name": "Elbasan",
      "country_name": "Albania",
      "map_coordinates": "41.115875,20.091992",
      "country_code": "ALB"
    },
    "probability_home_team_winner": 2.5,
    "probability_draw": 88.1,
    "probability_away_team_winner": 9.4
  }, {
    "sport_event_id": "sr:sport_event:27636182",
    "start_date": "2021-06-22T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5187",
      "name": "HB Torshavn",
      "country": "Faroe Islands",
      "country_code": "FRO",
      "abbreviation": "HB",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:37946",
      "name": "Inter Club de Escaldes",
      "country": "Andorra",
      "country_code": "AND",
      "abbreviation": "ESC",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:18653",
      "name": "Niko Dovana Stadium",
      "capacity": 12040,
      "city_name": "Durres",
      "country_name": "Albania",
      "map_coordinates": "41.326081,19.449856",
      "country_code": "ALB"
    },
    "probability_home_team_winner": 68.9,
    "probability_draw": 11.3,
    "probability_away_team_winner": 19.8
  }, {
    "sport_event_id": "sr:sport_event:27849856",
    "start_date": "2021-06-25T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:277829",
      "name": "FC Prishtina",
      "country": "Kosovo",
      "country_code": "KOS",
      "abbreviation": "PRI",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:37946",
      "name": "Inter Club de Escaldes",
      "country": "Andorra",
      "country_code": "AND",
      "abbreviation": "ESC",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": null,
    "probability_home_team_winner": 68,
    "probability_draw": 10.6,
    "probability_away_team_winner": 21.4
  }, {
    "sport_event_id": "sr:sport_event:27735750",
    "start_date": "2021-07-06T16:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2242",
      "name": "HJK Helsinki",
      "country": "Finland",
      "country_code": "FIN",
      "abbreviation": "HJK",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5143",
      "name": "FK Buducnost",
      "country": "Montenegro",
      "country_code": "MNE",
      "abbreviation": "BUD",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1303",
      "name": "Helsinki Football Stadium",
      "capacity": 10770,
      "city_name": "Helsinki",
      "country_name": "Finland",
      "map_coordinates": "60.1875873,24.9200642",
      "country_code": "FIN"
    },
    "probability_home_team_winner": 69.2,
    "probability_draw": 11.5,
    "probability_away_team_winner": 19.3
  }, {
    "sport_event_id": "sr:sport_event:27736018",
    "start_date": "2021-07-06T16:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:3346",
      "name": "Flora Tallinn",
      "country": "Estonia",
      "country_code": "EST",
      "abbreviation": "FLO",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5331",
      "name": "Hibernians FC Paola",
      "country": "Malta",
      "country_code": "MLT",
      "abbreviation": "HIB",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:962",
      "name": "Albert le Coq Arena",
      "capacity": 15000,
      "city_name": "Tallinn",
      "country_name": "Estonia",
      "map_coordinates": "59.421292,24.732050",
      "country_code": "EST"
    },
    "probability_home_team_winner": 58.9,
    "probability_draw": 16.7,
    "probability_away_team_winner": 24.4
  }, {
    "sport_event_id": "sr:sport_event:27890986",
    "start_date": "2021-07-06T16:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:1925",
      "name": "Ferencvarosi Budapest",
      "country": "Hungary",
      "country_code": "HUN",
      "abbreviation": "FTC",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:277829",
      "name": "FC Prishtina",
      "country": "Kosovo",
      "country_code": "KOS",
      "abbreviation": "PRI",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:15347",
      "name": "Groupama Arena",
      "capacity": 22000,
      "city_name": "Budapest",
      "country_name": "Hungary",
      "map_coordinates": "47.475278,19.096111",
      "country_code": "HUN"
    },
    "probability_home_team_winner": 83.7,
    "probability_draw": 4.5,
    "probability_away_team_winner": 11.8
  }, {
    "sport_event_id": "sr:sport_event:27735754",
    "start_date": "2021-07-06T17:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5287",
      "name": "FC CFR 1907 Cluj",
      "country": "Romania",
      "country_code": "ROU",
      "abbreviation": "CFR",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5235",
      "name": "FK Borac Banja Luka",
      "country": "Bosnia & Herzegovina",
      "country_code": "BIH",
      "abbreviation": "BBL",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1180",
      "name": "Dr. Constantin Radulescu",
      "capacity": 23500,
      "city_name": "Cluj Napoca",
      "country_name": "Romania",
      "map_coordinates": "46.779533,23.577616",
      "country_code": "ROU"
    },
    "probability_home_team_winner": 82.1,
    "probability_draw": 5,
    "probability_away_team_winner": 13
  }, {
    "sport_event_id": "sr:sport_event:27735892",
    "start_date": "2021-07-06T17:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5345",
      "name": "Vilnius FK Zalgiris",
      "country": "Lithuania",
      "country_code": "LTU",
      "abbreviation": "ZAL",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5272",
      "name": "Linfield FC",
      "country": "Northern Ireland",
      "country_code": "NIR",
      "abbreviation": "LIN",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:3794",
      "name": "LFF Stadium",
      "capacity": 5422,
      "city_name": "Vilnius",
      "country_name": "Lithuania",
      "map_coordinates": "54.668548,25.294674",
      "country_code": "LTU"
    },
    "probability_home_team_winner": 67.3,
    "probability_draw": 11.6,
    "probability_away_team_winner": 21.1
  }, {
    "sport_event_id": "sr:sport_event:27735684",
    "start_date": "2021-07-06T17:30:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:25929",
      "name": "CS Fola Esch",
      "country": "Luxembourg",
      "country_code": "LUX",
      "abbreviation": "FES",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:126304",
      "name": "Lincoln Red Imps",
      "country": "Gibraltar",
      "country_code": "GIB",
      "abbreviation": "LIN",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:3746",
      "name": "Stade Emile Mayrisch",
      "capacity": 3900,
      "city_name": "Esch-sur-Alzette",
      "country_name": "Luxembourg",
      "map_coordinates": "49.492222,5.989722",
      "country_code": "LUX"
    },
    "probability_home_team_winner": 65.4,
    "probability_draw": 14.4,
    "probability_away_team_winner": 20.2
  }, {
    "sport_event_id": "sr:sport_event:27735762",
    "start_date": "2021-07-06T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5413",
      "name": "Shkendija Tetovo",
      "country": "North Macedonia",
      "country_code": "MKD",
      "abbreviation": "SHK",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:2410",
      "name": "Mura Murska Sobota",
      "country": "Slovenia",
      "country_code": "SVN",
      "abbreviation": "MUR",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:19200",
      "name": "Ecolog Arena",
      "capacity": 15000,
      "city_name": "Tetovo",
      "country_name": "North Macedonia",
      "map_coordinates": "42.018600,20.978300",
      "country_code": "MKD"
    },
    "probability_home_team_winner": 31,
    "probability_draw": 38.2,
    "probability_away_team_winner": 30.9
  }, {
    "sport_event_id": "sr:sport_event:27735690",
    "start_date": "2021-07-07T16:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:656",
      "name": "Bodoe/Glimt",
      "country": "Norway",
      "country_code": "NOR",
      "abbreviation": "BOG",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:3106",
      "name": "Legia Warszawa",
      "country": "Poland",
      "country_code": "POL",
      "abbreviation": "LEG",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1072",
      "name": "Aspmyra Stadion",
      "capacity": 7354,
      "city_name": "Bodo",
      "country_name": "Norway",
      "map_coordinates": "67.276701,14.384353",
      "country_code": "NOR"
    },
    "probability_home_team_winner": 45.9,
    "probability_draw": 26.5,
    "probability_away_team_winner": 27.6
  }, {
    "sport_event_id": "sr:sport_event:27735776",
    "start_date": "2021-07-07T16:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5171",
      "name": "FC Dinamo Tbilisi",
      "country": "Georgia",
      "country_code": "GEO",
      "abbreviation": "TBI",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5215",
      "name": "Neftchi Baku PFC",
      "country": "Azerbaijan",
      "country_code": "AZE",
      "abbreviation": "NEB",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:889",
      "name": "Boris Paichadze Dinamo Arena",
      "capacity": 54549,
      "city_name": "Tbilisi",
      "country_name": "Georgia",
      "map_coordinates": "41.723008,44.789761",
      "country_code": "GEO"
    },
    "probability_home_team_winner": 30.1,
    "probability_draw": 38,
    "probability_away_team_winner": 31.9
  }, {
    "sport_event_id": "sr:sport_event:27735688",
    "start_date": "2021-07-07T16:30:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2404",
      "name": "Slovan Bratislava",
      "country": "Slovakia",
      "country_code": "SVK",
      "abbreviation": "SLO",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:3177",
      "name": "Shamrock Rovers",
      "country": "Ireland",
      "country_code": "IRL",
      "abbreviation": "SHA",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:901",
      "name": "Tehelne Pole Stadion",
      "capacity": 22500,
      "city_name": "Bratislava",
      "country_name": "Slovakia",
      "map_coordinates": "48.163558, 17.136856",
      "country_code": "SVK"
    },
    "probability_home_team_winner": 61.8,
    "probability_draw": 15,
    "probability_away_team_winner": 23.2
  }, {
    "sport_event_id": "sr:sport_event:27735686",
    "start_date": "2021-07-07T17:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:1892",
      "name": "Malmo FF",
      "country": "Sweden",
      "country_code": "SWE",
      "abbreviation": "MAL",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:162368",
      "name": "Riga FC",
      "country": "Latvia",
      "country_code": "LVA",
      "abbreviation": "RFC",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1211",
      "name": "Stadion",
      "capacity": 27500,
      "city_name": "Malmo",
      "country_name": "Sweden",
      "map_coordinates": "55.583611,12.987778",
      "country_code": "SWE"
    },
    "probability_home_team_winner": 80.4,
    "probability_draw": 5.7,
    "probability_away_team_winner": 13.8
  }, {
    "sport_event_id": "sr:sport_event:27735772",
    "start_date": "2021-07-07T17:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5417",
      "name": "KF Teuta",
      "country": "Albania",
      "country_code": "ALB",
      "abbreviation": "TEU",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5173",
      "name": "FC Sheriff Tiraspol",
      "country": "Moldova",
      "country_code": "MDA",
      "abbreviation": "SHF",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:18653",
      "name": "Niko Dovana Stadium",
      "capacity": 12040,
      "city_name": "Durres",
      "country_name": "Albania",
      "map_coordinates": "41.326081,19.449856",
      "country_code": "ALB"
    },
    "probability_home_team_winner": 24.2,
    "probability_draw": 45.2,
    "probability_away_team_winner": 30.7
  }, {
    "sport_event_id": "sr:sport_event:27735812",
    "start_date": "2021-07-07T17:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5197",
      "name": "Maccabi Haifa FC",
      "country": "Israel",
      "country_code": "ISR",
      "abbreviation": "MAH",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5172",
      "name": "FC Kairat Almaty",
      "country": "Kazakhstan",
      "country_code": "KAZ",
      "abbreviation": "ALM",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:15345",
      "name": "Sammy Ofer Stadium",
      "capacity": 30874,
      "city_name": "Haifa",
      "country_name": "Israel",
      "map_coordinates": "32.783111,34.965167",
      "country_code": "ISR"
    },
    "probability_home_team_winner": 52.1,
    "probability_draw": 23,
    "probability_away_team_winner": 24.9
  }, {
    "sport_event_id": "sr:sport_event:27735850",
    "start_date": "2021-07-07T17:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:43840",
      "name": "PFC Ludogorets 1945 Razgrad",
      "country": "Bulgaria",
      "country_code": "BGR",
      "abbreviation": "LUD",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:3357",
      "name": "FC Shakhter Soligorsk",
      "country": "Belarus",
      "country_code": "BLR",
      "abbreviation": "SHS",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:3136",
      "name": "Huvepharma Arena",
      "capacity": 10422,
      "city_name": "Razgrad",
      "country_name": "Bulgaria",
      "map_coordinates": "43.534635,26.527642",
      "country_code": "BGR"
    },
    "probability_home_team_winner": 52.4,
    "probability_draw": 21,
    "probability_away_team_winner": 26.6
  }, {
    "sport_event_id": "sr:sport_event:27736010",
    "start_date": "2021-07-07T17:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2032",
      "name": "GNK Dinamo Zagreb",
      "country": "Croatia",
      "country_code": "HRV",
      "abbreviation": "DIN",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:1899",
      "name": "Valur Reykjavik",
      "country": "Iceland",
      "country_code": "ISL",
      "abbreviation": "VAL",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:900",
      "name": "Maksimir",
      "capacity": 35123,
      "city_name": "Zagreb",
      "country_name": "Croatia",
      "map_coordinates": "45.818858,16.018078",
      "country_code": "HRV"
    },
    "probability_home_team_winner": 80,
    "probability_draw": 6.3,
    "probability_away_team_winner": 13.7
  }, {
    "sport_event_id": "sr:sport_event:27735748",
    "start_date": "2021-07-07T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:4912",
      "name": "Connah`s Quay Nomads FC",
      "country": "Wales",
      "country_code": "WAL",
      "abbreviation": "CQN",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:67966",
      "name": "FC Alashkert Yerevan",
      "country": "Armenia",
      "country_code": "ARM",
      "abbreviation": "ALA",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:5040",
      "name": "Deeside Stadium",
      "capacity": 1582,
      "city_name": "Connah's Quay",
      "country_name": "Wales",
      "map_coordinates": "53.225338,-3.076505",
      "country_code": "WAL"
    },
    "probability_home_team_winner": 34.5,
    "probability_draw": 33.1,
    "probability_away_team_winner": 32.4
  }, {
    "sport_event_id": "sr:sport_event:27735752",
    "start_date": "2021-07-13T16:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:126304",
      "name": "Lincoln Red Imps",
      "country": "Gibraltar",
      "country_code": "GIB",
      "abbreviation": "LIN",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:25929",
      "name": "CS Fola Esch",
      "country": "Luxembourg",
      "country_code": "LUX",
      "abbreviation": "FES",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:13246",
      "name": "Victoria Stadium",
      "capacity": 5000,
      "city_name": "Gibraltar",
      "country_name": "Gibraltar",
      "map_coordinates": "36.149356,-5.350342",
      "country_code": "GIB"
    },
    "probability_home_team_winner": 32.5,
    "probability_draw": 42.1,
    "probability_away_team_winner": 25.4
  }, {
    "sport_event_id": "sr:sport_event:27735756",
    "start_date": "2021-07-13T16:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:162368",
      "name": "Riga FC",
      "country": "Latvia",
      "country_code": "LVA",
      "abbreviation": "RFC",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:1892",
      "name": "Malmo FF",
      "country": "Sweden",
      "country_code": "SWE",
      "abbreviation": "MAL",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:890",
      "name": "Skonto Stadium",
      "capacity": 9500,
      "city_name": "Riga",
      "country_name": "Latvia",
      "map_coordinates": "56.961372,24.116408",
      "country_code": "LVA"
    },
    "probability_home_team_winner": 13.2,
    "probability_draw": 65.9,
    "probability_away_team_winner": 20.8
  }, {
    "sport_event_id": "sr:sport_event:27736020",
    "start_date": "2021-07-13T16:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5331",
      "name": "Hibernians FC Paola",
      "country": "Malta",
      "country_code": "MLT",
      "abbreviation": "HIB",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:3346",
      "name": "Flora Tallinn",
      "country": "Estonia",
      "country_code": "EST",
      "abbreviation": "FLO",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:7490",
      "name": "Hibernians Ground",
      "capacity": 8000,
      "city_name": "Paola",
      "country_name": "Malta",
      "map_coordinates": "35.880278,14.512778",
      "country_code": "MLT"
    },
    "probability_home_team_winner": 26.5,
    "probability_draw": 44.8,
    "probability_away_team_winner": 28.7
  }, {
    "sport_event_id": "sr:sport_event:27735774",
    "start_date": "2021-07-13T17:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5173",
      "name": "FC Sheriff Tiraspol",
      "country": "Moldova",
      "country_code": "MDA",
      "abbreviation": "SHF",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5417",
      "name": "KF Teuta",
      "country": "Albania",
      "country_code": "ALB",
      "abbreviation": "TEU",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1296",
      "name": "Sheriff Stadium",
      "capacity": 14000,
      "city_name": "Tiraspol",
      "country_name": "Moldova",
      "map_coordinates": "46.837303,29.558842",
      "country_code": "MDA"
    },
    "probability_home_team_winner": 81.9,
    "probability_draw": 5.4,
    "probability_away_team_winner": 12.6
  }, {
    "sport_event_id": "sr:sport_event:27735768",
    "start_date": "2021-07-13T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5235",
      "name": "FK Borac Banja Luka",
      "country": "Bosnia & Herzegovina",
      "country_code": "BIH",
      "abbreviation": "BBL",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5287",
      "name": "FC CFR 1907 Cluj",
      "country": "Romania",
      "country_code": "ROU",
      "abbreviation": "CFR",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1937",
      "name": "Banja Luka City Stadium",
      "capacity": 9730,
      "city_name": "Banja Luka",
      "country_name": "Bosnia & Herzegovina",
      "map_coordinates": "44.776100,17.199600",
      "country_code": "BIH"
    },
    "probability_home_team_winner": 14.4,
    "probability_draw": 62.6,
    "probability_away_team_winner": 23
  }, {
    "sport_event_id": "sr:sport_event:27735770",
    "start_date": "2021-07-13T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2410",
      "name": "Mura Murska Sobota",
      "country": "Slovenia",
      "country_code": "SVN",
      "abbreviation": "MUR",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5413",
      "name": "Shkendija Tetovo",
      "country": "North Macedonia",
      "country_code": "MKD",
      "abbreviation": "SHK",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:8557",
      "name": "Mesti Stadion Fazanerija",
      "capacity": 5000,
      "city_name": "Murska Sobota",
      "country_name": "Slovenia",
      "country_code": "SVN"
    },
    "probability_home_team_winner": 46.9,
    "probability_draw": 25.8,
    "probability_away_team_winner": 27.3
  }, {
    "sport_event_id": "sr:sport_event:27890994",
    "start_date": "2021-07-13T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:277829",
      "name": "FC Prishtina",
      "country": "Kosovo",
      "country_code": "KOS",
      "abbreviation": "PRI",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:1925",
      "name": "Ferencvarosi Budapest",
      "country": "Hungary",
      "country_code": "HUN",
      "abbreviation": "FTC",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:19072",
      "name": "Fadil Vokrri Stadium",
      "capacity": 16200,
      "city_name": "Pristina",
      "country_name": "Kosovo",
      "map_coordinates": "42.662851,21.157067",
      "country_code": "KOS"
    },
    "probability_home_team_winner": 16.2,
    "probability_draw": 62.3,
    "probability_away_team_winner": 21.5
  }, {
    "sport_event_id": "sr:sport_event:27735766",
    "start_date": "2021-07-13T18:30:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5143",
      "name": "FK Buducnost",
      "country": "Montenegro",
      "country_code": "MNE",
      "abbreviation": "BUD",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:2242",
      "name": "HJK Helsinki",
      "country": "Finland",
      "country_code": "FIN",
      "abbreviation": "HJK",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1205",
      "name": "Podgorica City Stadium",
      "capacity": 17000,
      "city_name": "Podgorica",
      "country_name": "Montenegro",
      "country_code": "MNE"
    },
    "probability_home_team_winner": 27.8,
    "probability_draw": 45.7,
    "probability_away_team_winner": 26.5
  }, {
    "sport_event_id": "sr:sport_event:27735894",
    "start_date": "2021-07-13T18:45:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5272",
      "name": "Linfield FC",
      "country": "Northern Ireland",
      "country_code": "NIR",
      "abbreviation": "LIN",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5345",
      "name": "Vilnius FK Zalgiris",
      "country": "Lithuania",
      "country_code": "LTU",
      "abbreviation": "ZAL",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:964",
      "name": "Windsor Park",
      "capacity": 24734,
      "city_name": "Belfast",
      "country_name": "Northern Ireland",
      "map_coordinates": "54.582625,-5.955189",
      "country_code": "NIR"
    },
    "probability_home_team_winner": 32.2,
    "probability_draw": 39.9,
    "probability_away_team_winner": 27.8
  }, {
    "sport_event_id": "sr:sport_event:27735758",
    "start_date": "2021-07-13T19:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:3177",
      "name": "Shamrock Rovers",
      "country": "Ireland",
      "country_code": "IRL",
      "abbreviation": "SHA",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:2404",
      "name": "Slovan Bratislava",
      "country": "Slovakia",
      "country_code": "SVK",
      "abbreviation": "SLO",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:2491",
      "name": "Tallaght Stadium",
      "capacity": 5947,
      "city_name": "Dublin",
      "country_name": "Ireland",
      "map_coordinates": "53.283531,-6.373653",
      "country_code": "IRL"
    },
    "probability_home_team_winner": 35.3,
    "probability_draw": 36.7,
    "probability_away_team_winner": 28
  }, {
    "sport_event_id": "sr:sport_event:27735852",
    "start_date": "2021-07-13T19:30:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:3357",
      "name": "FC Shakhter Soligorsk",
      "country": "Belarus",
      "country_code": "BLR",
      "abbreviation": "SHS",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:43840",
      "name": "PFC Ludogorets 1945 Razgrad",
      "country": "Bulgaria",
      "country_code": "BGR",
      "abbreviation": "LUD",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:3822",
      "name": "Stroitel Stadium",
      "capacity": 4200,
      "city_name": "Salihorsk",
      "country_name": "Belarus",
      "map_coordinates": "52.798539,27.538212",
      "country_code": "BLR"
    },
    "probability_home_team_winner": 26.2,
    "probability_draw": 46.2,
    "probability_away_team_winner": 27.6
  }, {
    "sport_event_id": "sr:sport_event:27736012",
    "start_date": "2021-07-13T20:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:1899",
      "name": "Valur Reykjavik",
      "country": "Iceland",
      "country_code": "ISL",
      "abbreviation": "VAL",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:2032",
      "name": "GNK Dinamo Zagreb",
      "country": "Croatia",
      "country_code": "HRV",
      "abbreviation": "DIN",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:21768",
      "name": "Hlidarendi Stadium",
      "capacity": 2465,
      "city_name": "Reykjavik",
      "country_name": "Iceland",
      "map_coordinates": "64.132811,-21.923488",
      "country_code": "ISL"
    },
    "probability_home_team_winner": 9.6,
    "probability_draw": 75.2,
    "probability_away_team_winner": 15.2
  }, {
    "sport_event_id": "sr:sport_event:27735814",
    "start_date": "2021-07-14T14:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5172",
      "name": "FC Kairat Almaty",
      "country": "Kazakhstan",
      "country_code": "KAZ",
      "abbreviation": "ALM",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5197",
      "name": "Maccabi Haifa FC",
      "country": "Israel",
      "country_code": "ISR",
      "abbreviation": "MAH",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:952",
      "name": "Central Stadium",
      "capacity": 25057,
      "city_name": "Almaty",
      "country_name": "Kazakhstan",
      "map_coordinates": "43.238380,76.924177",
      "country_code": "KAZ"
    },
    "probability_home_team_winner": 37.3,
    "probability_draw": 35.1,
    "probability_away_team_winner": 27.6
  }, {
    "sport_event_id": "sr:sport_event:27735764",
    "start_date": "2021-07-14T15:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:67966",
      "name": "FC Alashkert Yerevan",
      "country": "Armenia",
      "country_code": "ARM",
      "abbreviation": "ALA",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:4912",
      "name": "Connah`s Quay Nomads FC",
      "country": "Wales",
      "country_code": "WAL",
      "abbreviation": "CQN",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:4050",
      "name": "Alashkert Stadium",
      "capacity": 6850,
      "city_name": "Yerevan",
      "country_name": "Armenia",
      "map_coordinates": "40.154605,44.475231",
      "country_code": "ARM"
    },
    "probability_home_team_winner": 67.6,
    "probability_draw": 12.6,
    "probability_away_team_winner": 19.8
  }, {
    "sport_event_id": "sr:sport_event:27735778",
    "start_date": "2021-07-14T17:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5215",
      "name": "Neftchi Baku PFC",
      "country": "Azerbaijan",
      "country_code": "AZE",
      "abbreviation": "NEB",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5171",
      "name": "FC Dinamo Tbilisi",
      "country": "Georgia",
      "country_code": "GEO",
      "abbreviation": "TBI",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:13192",
      "name": "Bakcell Arena",
      "capacity": 11000,
      "city_name": "Baku",
      "country_name": "Azerbaijan",
      "map_coordinates": "40.400163,49.944019",
      "country_code": "AZE"
    },
    "probability_home_team_winner": 48.5,
    "probability_draw": 22.9,
    "probability_away_team_winner": 28.5
  }, {
    "sport_event_id": "sr:sport_event:27735760",
    "start_date": "2021-07-14T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:3106",
      "name": "Legia Warszawa",
      "country": "Poland",
      "country_code": "POL",
      "abbreviation": "LEG",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:656",
      "name": "Bodoe/Glimt",
      "country": "Norway",
      "country_code": "NOR",
      "abbreviation": "BOG",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1289",
      "name": "Municipal Stadium of Marshal Jozef Pilsudski",
      "capacity": 15016,
      "city_name": "Warsaw",
      "country_name": "Poland",
      "map_coordinates": "52.220461,21.040628",
      "country_code": "POL"
    },
    "probability_home_team_winner": 54.7,
    "probability_draw": 22.1,
    "probability_away_team_winner": 23.2
  }, {
    "sport_event_id": "sr:sport_event:28160590",
    "start_date": "2021-07-20T15:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:67966",
      "name": "FC Alashkert Yerevan",
      "country": "Armenia",
      "country_code": "ARM",
      "abbreviation": "ALA",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5173",
      "name": "FC Sheriff Tiraspol",
      "country": "Moldova",
      "country_code": "MDA",
      "abbreviation": "SHF",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:4050",
      "name": "Alashkert Stadium",
      "capacity": 6850,
      "city_name": "Yerevan",
      "country_name": "Armenia",
      "map_coordinates": "40.154605,44.475231",
      "country_code": "ARM"
    },
    "probability_home_team_winner": 20.6,
    "probability_draw": 48.7,
    "probability_away_team_winner": 30.7
  }, {
    "sport_event_id": "sr:sport_event:28152910",
    "start_date": "2021-07-20T16:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:126304",
      "name": "Lincoln Red Imps",
      "country": "Gibraltar",
      "country_code": "GIB",
      "abbreviation": "LIN",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5287",
      "name": "FC CFR 1907 Cluj",
      "country": "Romania",
      "country_code": "ROU",
      "abbreviation": "CFR",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:13246",
      "name": "Victoria Stadium",
      "capacity": 5000,
      "city_name": "Gibraltar",
      "country_name": "Gibraltar",
      "map_coordinates": "36.149356,-5.350342",
      "country_code": "GIB"
    },
    "probability_home_team_winner": 9.6,
    "probability_draw": 73.6,
    "probability_away_team_winner": 16.7
  }, {
    "sport_event_id": "sr:sport_event:28152906",
    "start_date": "2021-07-20T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2032",
      "name": "GNK Dinamo Zagreb",
      "country": "Croatia",
      "country_code": "HRV",
      "abbreviation": "DIN",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:3395",
      "name": "AC Omonia Nicosia",
      "country": "Cyprus",
      "country_code": "CYP",
      "abbreviation": "OMO",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:900",
      "name": "Maksimir",
      "capacity": 35123,
      "city_name": "Zagreb",
      "country_name": "Croatia",
      "map_coordinates": "45.818858,16.018078",
      "country_code": "HRV"
    },
    "probability_home_team_winner": 61.9,
    "probability_draw": 15,
    "probability_away_team_winner": 23.1
  }, {
    "sport_event_id": "sr:sport_event:28152916",
    "start_date": "2021-07-20T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:1925",
      "name": "Ferencvarosi Budapest",
      "country": "Hungary",
      "country_code": "HUN",
      "abbreviation": "FTC",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5345",
      "name": "Vilnius FK Zalgiris",
      "country": "Lithuania",
      "country_code": "LTU",
      "abbreviation": "ZAL",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:15347",
      "name": "Groupama Arena",
      "capacity": 22000,
      "city_name": "Budapest",
      "country_name": "Hungary",
      "map_coordinates": "47.475278,19.096111",
      "country_code": "HUN"
    },
    "probability_home_team_winner": 70.5,
    "probability_draw": 10.7,
    "probability_away_team_winner": 18.8
  }, {
    "sport_event_id": "sr:sport_event:27759352",
    "start_date": "2021-07-20T18:30:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2055",
      "name": "SK Rapid Wien",
      "country": "Austria",
      "country_code": "AUT",
      "abbreviation": "SCR",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:2218",
      "name": "Sparta Prague",
      "country": "Czech Republic",
      "country_code": "CZE",
      "abbreviation": "SPA",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:18409",
      "name": "Allianz Stadion",
      "capacity": 28345,
      "city_name": "Vienna",
      "country_name": "Austria",
      "map_coordinates": "48.198062, 16.265908",
      "country_code": "AUT"
    },
    "probability_home_team_winner": 43,
    "probability_draw": 29,
    "probability_away_team_winner": 28
  }, {
    "sport_event_id": "sr:sport_event:27759354",
    "start_date": "2021-07-20T18:45:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2352",
      "name": "Celtic Glasgow",
      "country": "Scotland",
      "country_code": "SCO",
      "abbreviation": "CEL",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:1289",
      "name": "FC Midtjylland",
      "country": "Denmark",
      "country_code": "DNK",
      "abbreviation": "FCM",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:916",
      "name": "Celtic Park",
      "capacity": 60411,
      "city_name": "Glasgow",
      "country_name": "Scotland",
      "map_coordinates": "55.849711,-4.205589",
      "country_code": "SCO"
    },
    "probability_home_team_winner": 49.1,
    "probability_draw": 24.2,
    "probability_away_team_winner": 26.7
  }, {
    "sport_event_id": "sr:sport_event:28158930",
    "start_date": "2021-07-21T14:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5172",
      "name": "FC Kairat Almaty",
      "country": "Kazakhstan",
      "country_code": "KAZ",
      "abbreviation": "ALM",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5149",
      "name": "FK Crvena Zvezda Belgrade",
      "country": "Serbia",
      "country_code": "SRB",
      "abbreviation": "CRZ",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:952",
      "name": "Central Stadium",
      "capacity": 25057,
      "city_name": "Almaty",
      "country_name": "Kazakhstan",
      "map_coordinates": "43.238380,76.924177",
      "country_code": "KAZ"
    },
    "probability_home_team_winner": 29.5,
    "probability_draw": 40.8,
    "probability_away_team_winner": 29.8
  }, {
    "sport_event_id": "sr:sport_event:28152914",
    "start_date": "2021-07-21T17:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:1892",
      "name": "Malmo FF",
      "country": "Sweden",
      "country_code": "SWE",
      "abbreviation": "MAL",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:2242",
      "name": "HJK Helsinki",
      "country": "Finland",
      "country_code": "FIN",
      "abbreviation": "HJK",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1211",
      "name": "Stadion",
      "capacity": 27500,
      "city_name": "Malmo",
      "country_name": "Sweden",
      "map_coordinates": "55.583611,12.987778",
      "country_code": "SWE"
    },
    "probability_home_team_winner": 59.7,
    "probability_draw": 16.3,
    "probability_away_team_winner": 23.9
  }, {
    "sport_event_id": "sr:sport_event:28152918",
    "start_date": "2021-07-21T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2410",
      "name": "Mura Murska Sobota",
      "country": "Slovenia",
      "country_code": "SVN",
      "abbreviation": "MUR",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:43840",
      "name": "PFC Ludogorets 1945 Razgrad",
      "country": "Bulgaria",
      "country_code": "BGR",
      "abbreviation": "LUD",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:8557",
      "name": "Mesti Stadion Fazanerija",
      "capacity": 5000,
      "city_name": "Murska Sobota",
      "country_name": "Slovenia",
      "country_code": "SVN"
    },
    "probability_home_team_winner": 22,
    "probability_draw": 49.9,
    "probability_away_team_winner": 28.1
  }, {
    "sport_event_id": "sr:sport_event:28152908",
    "start_date": "2021-07-21T18:30:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2404",
      "name": "Slovan Bratislava",
      "country": "Slovakia",
      "country_code": "SVK",
      "abbreviation": "SLO",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:2445",
      "name": "Young Boys Bern",
      "country": "Switzerland",
      "country_code": "CHE",
      "abbreviation": "YB",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:901",
      "name": "Tehelne Pole Stadion",
      "capacity": 22500,
      "city_name": "Bratislava",
      "country_name": "Slovakia",
      "map_coordinates": "48.163558, 17.136856",
      "country_code": "SVK"
    },
    "probability_home_team_winner": 25.6,
    "probability_draw": 48.1,
    "probability_away_team_winner": 26.3
  }, {
    "sport_event_id": "sr:sport_event:27759356",
    "start_date": "2021-07-21T19:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2952",
      "name": "PSV Eindhoven",
      "country": "Netherlands",
      "country_code": "NLD",
      "abbreviation": "PSV",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:3061",
      "name": "Galatasaray Istanbul",
      "country": "Turkey",
      "country_code": "TUR",
      "abbreviation": "GAL",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:726",
      "name": "Philips Stadion",
      "capacity": 35000,
      "city_name": "Eindhoven",
      "country_name": "Netherlands",
      "map_coordinates": "51.441781,5.467442",
      "country_code": "NLD"
    },
    "probability_home_team_winner": 62.5,
    "probability_draw": 15.8,
    "probability_away_team_winner": 21.7
  }, {
    "sport_event_id": "sr:sport_event:28161122",
    "start_date": "2021-07-21T19:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:3245",
      "name": "Olympiacos Piraeus",
      "country": "Greece",
      "country_code": "GRC",
      "abbreviation": "OLY",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5215",
      "name": "Neftchi Baku PFC",
      "country": "Azerbaijan",
      "country_code": "AZE",
      "abbreviation": "NEB",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:906",
      "name": "Georgios Karaiskakis",
      "capacity": 32115,
      "city_name": "Piraeus",
      "country_name": "Greece",
      "map_coordinates": "37.946447,23.664317",
      "country_code": "GRC"
    },
    "probability_home_team_winner": 73.6,
    "probability_draw": 9.6,
    "probability_away_team_winner": 16.7
  }, {
    "sport_event_id": "sr:sport_event:28161970",
    "start_date": "2021-07-21T19:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:3106",
      "name": "Legia Warszawa",
      "country": "Poland",
      "country_code": "POL",
      "abbreviation": "LEG",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:3346",
      "name": "Flora Tallinn",
      "country": "Estonia",
      "country_code": "EST",
      "abbreviation": "FLO",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1289",
      "name": "Municipal Stadium of Marshal Jozef Pilsudski",
      "capacity": 15016,
      "city_name": "Warsaw",
      "country_name": "Poland",
      "map_coordinates": "52.220461,21.040628",
      "country_code": "POL"
    },
    "probability_home_team_winner": 79.7,
    "probability_draw": 6.1,
    "probability_away_team_winner": 14.2
  }, {
    "sport_event_id": "sr:sport_event:28152920",
    "start_date": "2021-07-27T16:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:3395",
      "name": "AC Omonia Nicosia",
      "country": "Cyprus",
      "country_code": "CYP",
      "abbreviation": "OMO",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:2032",
      "name": "GNK Dinamo Zagreb",
      "country": "Croatia",
      "country_code": "HRV",
      "abbreviation": "DIN",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:929",
      "name": "GSP Stadium",
      "capacity": 22859,
      "city_name": "Nicosia",
      "country_name": "Cyprus",
      "map_coordinates": "35.114542,33.362864",
      "country_code": "CYP"
    },
    "probability_home_team_winner": 31.2,
    "probability_draw": 40.8,
    "probability_away_team_winner": 27.9
  }, {
    "sport_event_id": "sr:sport_event:28152930",
    "start_date": "2021-07-27T16:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2242",
      "name": "HJK Helsinki",
      "country": "Finland",
      "country_code": "FIN",
      "abbreviation": "HJK",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:1892",
      "name": "Malmo FF",
      "country": "Sweden",
      "country_code": "SWE",
      "abbreviation": "MAL",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1303",
      "name": "Helsinki Football Stadium",
      "capacity": 10770,
      "city_name": "Helsinki",
      "country_name": "Finland",
      "map_coordinates": "60.1875873,24.9200642",
      "country_code": "FIN"
    },
    "probability_home_team_winner": 29.9,
    "probability_draw": 42.4,
    "probability_away_team_winner": 27.7
  }, {
    "sport_event_id": "sr:sport_event:28161972",
    "start_date": "2021-07-27T16:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:3346",
      "name": "Flora Tallinn",
      "country": "Estonia",
      "country_code": "EST",
      "abbreviation": "FLO",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:3106",
      "name": "Legia Warszawa",
      "country": "Poland",
      "country_code": "POL",
      "abbreviation": "LEG",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:962",
      "name": "Albert le Coq Arena",
      "capacity": 15000,
      "city_name": "Tallinn",
      "country_name": "Estonia",
      "map_coordinates": "59.421292,24.732050",
      "country_code": "EST"
    },
    "probability_home_team_winner": 19.4,
    "probability_draw": 54.6,
    "probability_away_team_winner": 26.1
  }, {
    "sport_event_id": "sr:sport_event:28152932",
    "start_date": "2021-07-27T17:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5345",
      "name": "Vilnius FK Zalgiris",
      "country": "Lithuania",
      "country_code": "LTU",
      "abbreviation": "ZAL",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:1925",
      "name": "Ferencvarosi Budapest",
      "country": "Hungary",
      "country_code": "HUN",
      "abbreviation": "FTC",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:3794",
      "name": "LFF Stadium",
      "capacity": 5422,
      "city_name": "Vilnius",
      "country_name": "Lithuania",
      "map_coordinates": "54.668548,25.294674",
      "country_code": "LTU"
    },
    "probability_home_team_winner": 25.2,
    "probability_draw": 49.5,
    "probability_away_team_winner": 25.2
  }, {
    "sport_event_id": "sr:sport_event:28160592",
    "start_date": "2021-07-28T17:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5173",
      "name": "FC Sheriff Tiraspol",
      "country": "Moldova",
      "country_code": "MDA",
      "abbreviation": "SHF",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:67966",
      "name": "FC Alashkert Yerevan",
      "country": "Armenia",
      "country_code": "ARM",
      "abbreviation": "ALA",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1296",
      "name": "Sheriff Stadium",
      "capacity": 14000,
      "city_name": "Tiraspol",
      "country_name": "Moldova",
      "map_coordinates": "46.837303,29.558842",
      "country_code": "MDA"
    },
    "probability_home_team_winner": 66.5,
    "probability_draw": 11.6,
    "probability_away_team_winner": 22
  }, {
    "sport_event_id": "sr:sport_event:28161124",
    "start_date": "2021-07-28T17:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5215",
      "name": "Neftchi Baku PFC",
      "country": "Azerbaijan",
      "country_code": "AZE",
      "abbreviation": "NEB",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:3245",
      "name": "Olympiacos Piraeus",
      "country": "Greece",
      "country_code": "GRC",
      "abbreviation": "OLY",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:13192",
      "name": "Bakcell Arena",
      "capacity": 11000,
      "city_name": "Baku",
      "country_name": "Azerbaijan",
      "map_coordinates": "40.400163,49.944019",
      "country_code": "AZE"
    },
    "probability_home_team_winner": 22.9,
    "probability_draw": 48.6,
    "probability_away_team_winner": 28.5
  }, {
    "sport_event_id": "sr:sport_event:28152928",
    "start_date": "2021-07-28T17:30:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5287",
      "name": "FC CFR 1907 Cluj",
      "country": "Romania",
      "country_code": "ROU",
      "abbreviation": "CFR",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:126304",
      "name": "Lincoln Red Imps",
      "country": "Gibraltar",
      "country_code": "GIB",
      "abbreviation": "LIN",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1180",
      "name": "Dr. Constantin Radulescu",
      "capacity": 23500,
      "city_name": "Cluj Napoca",
      "country_name": "Romania",
      "map_coordinates": "46.779533,23.577616",
      "country_code": "ROU"
    },
    "probability_home_team_winner": 78.4,
    "probability_draw": 6.9,
    "probability_away_team_winner": 14.8
  }, {
    "sport_event_id": "sr:sport_event:27759362",
    "start_date": "2021-07-28T17:45:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:1289",
      "name": "FC Midtjylland",
      "country": "Denmark",
      "country_code": "DNK",
      "abbreviation": "FCM",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:2352",
      "name": "Celtic Glasgow",
      "country": "Scotland",
      "country_code": "SCO",
      "abbreviation": "CEL",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1041",
      "name": "MCH Arena",
      "capacity": 11809,
      "city_name": "Herning",
      "country_name": "Denmark",
      "map_coordinates": "56.116910,8.951817",
      "country_code": "DNK"
    },
    "probability_home_team_winner": 37.3,
    "probability_draw": 33.5,
    "probability_away_team_winner": 29.2
  }, {
    "sport_event_id": "sr:sport_event:27759364",
    "start_date": "2021-07-28T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:3061",
      "name": "Galatasaray Istanbul",
      "country": "Turkey",
      "country_code": "TUR",
      "abbreviation": "GAL",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:2952",
      "name": "PSV Eindhoven",
      "country": "Netherlands",
      "country_code": "NLD",
      "abbreviation": "PSV",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:14806",
      "name": "Basaksehir Fatih Terim Stadium",
      "capacity": 17156,
      "city_name": "Istanbul",
      "country_name": "Turkey",
      "map_coordinates": "41.122784,28.808701",
      "country_code": "TUR"
    },
    "probability_home_team_winner": 27.5,
    "probability_draw": 48.6,
    "probability_away_team_winner": 23.9
  }, {
    "sport_event_id": "sr:sport_event:28152934",
    "start_date": "2021-07-28T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:43840",
      "name": "PFC Ludogorets 1945 Razgrad",
      "country": "Bulgaria",
      "country_code": "BGR",
      "abbreviation": "LUD",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:2410",
      "name": "Mura Murska Sobota",
      "country": "Slovenia",
      "country_code": "SVN",
      "abbreviation": "MUR",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:3136",
      "name": "Huvepharma Arena",
      "capacity": 10422,
      "city_name": "Razgrad",
      "country_name": "Bulgaria",
      "map_coordinates": "43.534635,26.527642",
      "country_code": "BGR"
    },
    "probability_home_team_winner": 73.8,
    "probability_draw": 8,
    "probability_away_team_winner": 18.2
  }, {
    "sport_event_id": "sr:sport_event:28152926",
    "start_date": "2021-07-28T18:15:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2445",
      "name": "Young Boys Bern",
      "country": "Switzerland",
      "country_code": "CHE",
      "abbreviation": "YB",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:2404",
      "name": "Slovan Bratislava",
      "country": "Slovakia",
      "country_code": "SVK",
      "abbreviation": "SLO",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:771",
      "name": "Stadion Wankdorf",
      "capacity": 32000,
      "city_name": "Bern",
      "country_name": "Switzerland",
      "map_coordinates": "46.963167,7.464833",
      "country_code": "CHE"
    },
    "probability_home_team_winner": 71.4,
    "probability_draw": 11,
    "probability_away_team_winner": 17.6
  }, {
    "sport_event_id": "sr:sport_event:27759358",
    "start_date": "2021-07-28T18:30:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2218",
      "name": "Sparta Prague",
      "country": "Czech Republic",
      "country_code": "CZE",
      "abbreviation": "SPA",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:2055",
      "name": "SK Rapid Wien",
      "country": "Austria",
      "country_code": "AUT",
      "abbreviation": "SCR",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:960",
      "name": "Generali Arena",
      "capacity": 18185,
      "city_name": "Prague",
      "country_name": "Czech Republic",
      "map_coordinates": "50.099803,14.415911",
      "country_code": "CZE"
    },
    "probability_home_team_winner": 51.6,
    "probability_draw": 24.8,
    "probability_away_team_winner": 23.6
  }, {
    "sport_event_id": "sr:sport_event:28158932",
    "start_date": "2021-07-28T18:30:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5149",
      "name": "FK Crvena Zvezda Belgrade",
      "country": "Serbia",
      "country_code": "SRB",
      "abbreviation": "CRZ",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5172",
      "name": "FC Kairat Almaty",
      "country": "Kazakhstan",
      "country_code": "KAZ",
      "abbreviation": "ALM",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:46440",
      "name": "Stadium Rajko Mitic",
      "capacity": 55538,
      "city_name": "Belgrade",
      "country_name": "Serbia",
      "map_coordinates": "44.783058,20.4626087",
      "country_code": "SRB"
    },
    "probability_home_team_winner": 69,
    "probability_draw": 11.9,
    "probability_away_team_winner": 19.1
  }, {
    "sport_event_id": "sr:sport_event:28353354",
    "start_date": "2021-08-03T17:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:1892",
      "name": "Malmo FF",
      "country": "Sweden",
      "country_code": "SWE",
      "abbreviation": "MAL",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:2351",
      "name": "Glasgow Rangers",
      "country": "Scotland",
      "country_code": "SCO",
      "abbreviation": "RFC",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1211",
      "name": "Stadion",
      "capacity": 27500,
      "city_name": "Malmo",
      "country_name": "Sweden",
      "map_coordinates": "55.583611,12.987778",
      "country_code": "SWE"
    },
    "probability_home_team_winner": 36.6,
    "probability_draw": 33.5,
    "probability_away_team_winner": 29.9
  }, {
    "sport_event_id": "sr:sport_event:28374622",
    "start_date": "2021-08-03T17:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2218",
      "name": "Sparta Prague",
      "country": "Czech Republic",
      "country_code": "CZE",
      "abbreviation": "SPA",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:1653",
      "name": "AS Monaco",
      "country": "France",
      "country_code": "FRA",
      "abbreviation": "ASM",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:960",
      "name": "Generali Arena",
      "capacity": 18185,
      "city_name": "Prague",
      "country_name": "Czech Republic",
      "map_coordinates": "50.099803,14.415911",
      "country_code": "CZE"
    },
    "probability_home_team_winner": 21.7,
    "probability_draw": 54.6,
    "probability_away_team_winner": 23.7
  }, {
    "sport_event_id": "sr:sport_event:28223628",
    "start_date": "2021-08-03T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2890",
      "name": "KRC Genk",
      "country": "Belgium",
      "country_code": "BEL",
      "abbreviation": "GEN",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:3313",
      "name": "FC Shakhtar Donetsk",
      "country": "Ukraine",
      "country_code": "UKR",
      "abbreviation": "SHA",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1204",
      "name": "Luminus Arena",
      "capacity": 24956,
      "city_name": "Genk",
      "country_name": "Belgium",
      "map_coordinates": "51.005000,5.533333",
      "country_code": "BEL"
    },
    "probability_home_team_winner": 40.1,
    "probability_draw": 32.4,
    "probability_away_team_winner": 27.5
  }, {
    "sport_event_id": "sr:sport_event:28370362",
    "start_date": "2021-08-03T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5287",
      "name": "FC CFR 1907 Cluj",
      "country": "Romania",
      "country_code": "ROU",
      "abbreviation": "CFR",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:2445",
      "name": "Young Boys Bern",
      "country": "Switzerland",
      "country_code": "CHE",
      "abbreviation": "YB",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1180",
      "name": "Dr. Constantin Radulescu",
      "capacity": 23500,
      "city_name": "Cluj Napoca",
      "country_name": "Romania",
      "map_coordinates": "46.779533,23.577616",
      "country_code": "ROU"
    },
    "probability_home_team_winner": 26.5,
    "probability_draw": 42.4,
    "probability_away_team_winner": 31.1
  }, {
    "sport_event_id": "sr:sport_event:28370368",
    "start_date": "2021-08-03T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2952",
      "name": "PSV Eindhoven",
      "country": "Netherlands",
      "country_code": "NLD",
      "abbreviation": "PSV",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:1289",
      "name": "FC Midtjylland",
      "country": "Denmark",
      "country_code": "DNK",
      "abbreviation": "FCM",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:726",
      "name": "Philips Stadion",
      "capacity": 35000,
      "city_name": "Eindhoven",
      "country_name": "Netherlands",
      "map_coordinates": "51.441781,5.467442",
      "country_code": "NLD"
    },
    "probability_home_team_winner": 68.5,
    "probability_draw": 12.6,
    "probability_away_team_winner": 18.9
  }, {
    "sport_event_id": "sr:sport_event:28370358",
    "start_date": "2021-08-03T19:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:3245",
      "name": "Olympiacos Piraeus",
      "country": "Greece",
      "country_code": "GRC",
      "abbreviation": "OLY",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:43840",
      "name": "PFC Ludogorets 1945 Razgrad",
      "country": "Bulgaria",
      "country_code": "BGR",
      "abbreviation": "LUD",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:906",
      "name": "Georgios Karaiskakis",
      "capacity": 32115,
      "city_name": "Piraeus",
      "country_name": "Greece",
      "map_coordinates": "37.946447,23.664317",
      "country_code": "GRC"
    },
    "probability_home_team_winner": 57.2,
    "probability_draw": 17.8,
    "probability_away_team_winner": 25
  }, {
    "sport_event_id": "sr:sport_event:28374624",
    "start_date": "2021-08-03T19:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5149",
      "name": "FK Crvena Zvezda Belgrade",
      "country": "Serbia",
      "country_code": "SRB",
      "abbreviation": "CRZ",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5173",
      "name": "FC Sheriff Tiraspol",
      "country": "Moldova",
      "country_code": "MDA",
      "abbreviation": "SHF",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:46440",
      "name": "Stadium Rajko Mitic",
      "capacity": 55538,
      "city_name": "Belgrade",
      "country_name": "Serbia",
      "map_coordinates": "44.783058,20.4626087",
      "country_code": "SRB"
    },
    "probability_home_team_winner": 72.6,
    "probability_draw": 9.3,
    "probability_away_team_winner": 18.1
  }, {
    "sport_event_id": "sr:sport_event:28223554",
    "start_date": "2021-08-04T17:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2323",
      "name": "FK Spartak Moscow",
      "country": "Russia",
      "country_code": "RUS",
      "abbreviation": "SPA",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:3006",
      "name": "Benfica Lisbon",
      "country": "Portugal",
      "country_code": "PRT",
      "abbreviation": "BEN",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:14704",
      "name": "Otkritie Arena",
      "capacity": 45360,
      "city_name": "Moscow",
      "country_name": "Russia",
      "map_coordinates": "55.817861,37.440250",
      "country_code": "RUS"
    },
    "probability_home_team_winner": 27.7,
    "probability_draw": 43.7,
    "probability_away_team_winner": 28.7
  }, {
    "sport_event_id": "sr:sport_event:28353360",
    "start_date": "2021-08-04T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2032",
      "name": "GNK Dinamo Zagreb",
      "country": "Croatia",
      "country_code": "HRV",
      "abbreviation": "DIN",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:3106",
      "name": "Legia Warszawa",
      "country": "Poland",
      "country_code": "POL",
      "abbreviation": "LEG",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:900",
      "name": "Maksimir",
      "capacity": 35123,
      "city_name": "Zagreb",
      "country_name": "Croatia",
      "map_coordinates": "45.818858,16.018078",
      "country_code": "HRV"
    },
    "probability_home_team_winner": 56.3,
    "probability_draw": 17.1,
    "probability_away_team_winner": 26.6
  }, {
    "sport_event_id": "sr:sport_event:28356334",
    "start_date": "2021-08-04T18:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:1925",
      "name": "Ferencvarosi Budapest",
      "country": "Hungary",
      "country_code": "HUN",
      "abbreviation": "FTC",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:2216",
      "name": "Slavia Prague",
      "country": "Czech Republic",
      "country_code": "CZE",
      "abbreviation": "SLA",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:15347",
      "name": "Groupama Arena",
      "capacity": 22000,
      "city_name": "Budapest",
      "country_name": "Hungary",
      "map_coordinates": "47.475278,19.096111",
      "country_code": "HUN"
    },
    "probability_home_team_winner": 29.4,
    "probability_draw": 40.7,
    "probability_away_team_winner": 29.9
  }, {
    "sport_event_id": "sr:sport_event:28356508",
    "start_date": "2021-08-10T17:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:2216",
      "name": "Slavia Prague",
      "country": "Czech Republic",
      "country_code": "CZE",
      "abbreviation": "SLA",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:1925",
      "name": "Ferencvarosi Budapest",
      "country": "Hungary",
      "country_code": "HUN",
      "abbreviation": "FTC",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1266",
      "name": "Sinobo Stadium",
      "capacity": 21000,
      "city_name": "Prague",
      "country_name": "Czech Republic",
      "map_coordinates": "50.067500,14.471667",
      "country_code": "CZE"
    },
    "probability_home_team_winner": 65.9,
    "probability_draw": 13.8,
    "probability_away_team_winner": 20.3
  }, {
    "sport_event_id": "sr:sport_event:28374626",
    "start_date": "2021-08-10T17:00:00+00:00",
    "sport_name": "Soccer",
    "competition_name": "UEFA Champions League",
    "competition_id": "sr:competition:7",
    "season_name": "UEFA Champions League 21/22",
    "competitors": [{
      "id": "sr:competitor:5173",
      "name": "FC Sheriff Tiraspol",
      "country": "Moldova",
      "country_code": "MDA",
      "abbreviation": "SHF",
      "qualifier": "home",
      "gender": "male"
    }, {
      "id": "sr:competitor:5149",
      "name": "FK Crvena Zvezda Belgrade",
      "country": "Serbia",
      "country_code": "SRB",
      "abbreviation": "CRZ",
      "qualifier": "away",
      "gender": "male"
    }],
    "venue": {
      "id": "sr:venue:1296",
      "name": "Sheriff Stadium",
      "capacity": 14000,
      "city_name": "Tiraspol",
      "country_name": "Moldova",
      "map_coordinates": "46.837303,29.558842",
      "country_code": "MDA"
    },
    "probability_home_team_winner": 26.1,
    "probability_draw": 43.1,
    "probability_away_team_winner": 30.8
  }]
};
},{}],"src/main.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = void 0;
var BE_data_json_1 = __importDefault(require("../BE_data.json"));
var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);
    this.data = [];
    this.eventDetailsTable = [];
    this.mapData();
    this.get10();
    this.printResult();
  }
  _createClass(Main, [{
    key: "printResult",
    value: function printResult() {
      var _a;
      for (var x = 0; x < 10; x++) {
        var el = document.createElement('div');
        var div1 = document.createElement('div');
        div1.textContent = 'Start date: ' + this.eventDetailsTable[x].start_date;
        var div2 = document.createElement('div');
        div2.textContent = "".concat(this.eventDetailsTable[x].competitors[0].name, " (").concat(this.eventDetailsTable[x].competitors[0].country, ") vs. ").concat(this.eventDetailsTable[x].competitors[1].name, " (").concat(this.eventDetailsTable[x].competitors[1].country, ")");
        var div3 = document.createElement('div');
        div3.textContent = "Venue: ".concat((_a = this.eventDetailsTable[x].venue) === null || _a === void 0 ? void 0 : _a.name);
        var div4 = document.createElement('div');
        div4.textContent = 'Highest probable result : ' + this.eventDetailsTable[x].result_name + ' (' + this.eventDetailsTable[x].probability + ')';
        var p = document.createElement('p');
        el.appendChild(div1);
        el.appendChild(div2);
        el.appendChild(div3);
        el.appendChild(div4);
        el.appendChild(p);
        document.body.appendChild(el);
      }
    }
  }, {
    key: "get10",
    value: function get10() {
      for (var k = 0; k < this.data.length; k++) {
        var event = this.data[k];
        var newEvent = {
          sport_event_id: event.sport_event_id,
          start_date: event.start_date,
          competitors: event.competitors,
          venue: event.venue
        };
        if (event.probability_home_team_winner > event.probability_away_team_winner && event.probability_home_team_winner > event.probability_draw) {
          newEvent.result_name = "HOME_TEAM_WIN";
          newEvent.probability = event.probability_home_team_winner;
          this.eventDetailsTable.push(newEvent);
        } else if (event.probability_away_team_winner > event.probability_home_team_winner && event.probability_away_team_winner > event.probability_draw) {
          newEvent.result_name = "AWAY_TEAM_WIN";
          newEvent.probability = event.probability_away_team_winner;
          this.eventDetailsTable.push(newEvent);
        } else {
          newEvent.result_name = "DRAW";
          newEvent.probability = event.probability_draw;
          this.eventDetailsTable.push(newEvent);
        }
        this.eventDetailsTable.sort(function (a, b) {
          return a.probability < b.probability ? 1 : -1;
        });
      }
    }
  }, {
    key: "mapData",
    value: function mapData() {
      var _a, _b, _c, _d, _e, _f, _g;
      for (var i = 0; i < BE_data_json_1.default.Events.length; i++) {
        var event = BE_data_json_1.default.Events[i];
        var newEvent = {
          sport_event_id: event.sport_event_id,
          start_date: event.start_date,
          sport_name: event.sport_name,
          competition_name: event.competition_name,
          competition_id: event.competition_id,
          season_name: event.season_name,
          venue: {
            id: (_a = event.venue) === null || _a === void 0 ? void 0 : _a.id,
            name: (_b = event.venue) === null || _b === void 0 ? void 0 : _b.name,
            capacity: (_c = event.venue) === null || _c === void 0 ? void 0 : _c.capacity,
            city_name: (_d = event.venue) === null || _d === void 0 ? void 0 : _d.city_name,
            country_name: (_e = event.venue) === null || _e === void 0 ? void 0 : _e.country_name,
            map_cooridinates: (_f = event.venue) === null || _f === void 0 ? void 0 : _f.map_coordinates,
            country_code: (_g = event.venue) === null || _g === void 0 ? void 0 : _g.country_code
          },
          probability_home_team_winner: event.probability_home_team_winner,
          probability_draw: event.probability_draw,
          probability_away_team_winner: event.probability_away_team_winner
        };
        var competitors = [];
        for (var j = 0; j < event.competitors.length; j++) {
          var competitor = event.competitors[j];
          var newCompetitor = {
            id: competitor.id,
            name: competitor.name,
            country: competitor.country,
            country_code: competitor.country_code,
            abbreviation: competitor.abbreviation,
            qualifier: competitor.qualifier,
            gender: competitor.gender
          };
          competitors.push(newCompetitor);
        }
        newEvent.competitors = competitors;
        this.data.push(newEvent);
      }
    }
  }]);
  return Main;
}();
exports.Main = Main;
var test = new Main();
},{"../BE_data.json":"BE_data.json"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63433" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.ts"], null)
//# sourceMappingURL=/main.b0a109ad.js.map