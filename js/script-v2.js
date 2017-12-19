/*jshint devel:true */
var blue = '#3BA2FD';
var red = '#FF2424';

var map;
var changeRoute;
var tripObj;
var markersOnMap;
var appState;
var cost = 3;
var streetParkingOption;
var appStep = 1;
var parkingData;
var parkingDestroyed = false;
var routeShapes = {
  choice: 'none',
  scootOne: {
    walkStart: [[-122.461998,37.763427], [-122.462037,37.764007], [-122.462052,37.764225], [-122.462052,37.764244], [-122.460976,37.764286], [-122.460663,37.764301], [-122.460419,37.764312]],
    rideToGarage:[[-122.460419,37.764312], [-122.460663,37.764301], [-122.460976,37.764286], [-122.460976,37.764301], [-122.461045,37.765216], [-122.461106,37.76612], [-122.460923,37.766128], [-122.460412,37.766147], [-122.460274,37.766178], [-122.460206,37.766193], [-122.460137,37.766212], [-122.460068,37.766239], [-122.46,37.766273], [-122.459946,37.766304], [-122.459878,37.766349], [-122.459786,37.766429], [-122.459725,37.766475], [-122.459672,37.766529], [-122.45961,37.766624], [-122.459275,37.766883], [-122.459229,37.766925], [-122.459168,37.766967], [-122.459107,37.767009], [-122.459046,37.767047], [-122.458985,37.767059], [-122.458947,37.76707], [-122.458893,37.767089], [-122.458817,37.76712], [-122.458741,37.767147], [-122.458687,37.767166], [-122.458611,37.767189], [-122.458565,37.767208], [-122.458413,37.767253], [-122.458313,37.767288], [-122.458123,37.767372], [-122.456406,37.767875], [-122.455834,37.768047], [-122.455651,37.768074], [-122.455514,37.768108], [-122.455208,37.768199], [-122.455163,37.768215], [-122.455109,37.768238], [-122.455063,37.768268], [-122.45501,37.768321], [-122.454964,37.768371], [-122.454934,37.768428], [-122.454903,37.768486], [-122.454888,37.76855], [-122.45488,37.768611], [-122.454873,37.768669], [-122.454873,37.76873], [-122.454873,37.768795], [-122.454888,37.768882], [-122.45488,37.768947], [-122.45488,37.768993], [-122.454888,37.769039], [-122.454888,37.769088], [-122.454903,37.769157], [-122.454918,37.769218], [-122.454934,37.769287], [-122.454957,37.769355], [-122.454979,37.769424], [-122.45501,37.769496], [-122.455048,37.76958], [-122.455094,37.769672], [-122.455292,37.770053], [-122.455323,37.770118], [-122.455353,37.770191], [-122.455384,37.770263], [-122.455414,37.770336], [-122.455407,37.770416], [-122.455399,37.770469], [-122.455384,37.770526], [-122.455361,37.770576], [-122.455338,37.770622], [-122.455315,37.770671], [-122.455285,37.770717], [-122.455246,37.770759], [-122.455201,37.770805], [-122.455155,37.770843], [-122.455094,37.770885], [-122.455025,37.770927], [-122.454957,37.770965], [-122.454873,37.771011], [-122.454758,37.771064], [-122.454117,37.771327], [-122.453995,37.771377], [-122.453942,37.771392], [-122.453896,37.771404], [-122.45385,37.771415], [-122.453766,37.771427], [-122.453682,37.77143], [-122.453599,37.77143], [-122.453499,37.771423], [-122.4534,37.771411], [-122.452652,37.771286], [-122.452553,37.77127], [-122.452462,37.771263], [-122.452355,37.771259], [-122.452263,37.771263], [-122.452172,37.771274], [-122.450707,37.771461], [-122.450623,37.771472], [-122.450524,37.771484], [-122.450173,37.77153], [-122.448975,37.771682], [-122.448884,37.771694], [-122.447419,37.771881], [-122.447335,37.771892], [-122.447243,37.771903], [-122.446541,37.771991], [-122.446305,37.772022], [-122.445878,37.772075], [-122.44574,37.772094], [-122.445611,37.772109], [-122.444039,37.772312], [-122.443985,37.772315], [-122.442406,37.772518], [-122.442307,37.772529], [-122.441529,37.772628], [-122.440873,37.772712], [-122.440751,37.772724], [-122.440606,37.772735], [-122.43911,37.772926], [-122.438004,37.773067], [-122.437485,37.773132], [-122.437394,37.773143], [-122.436921,37.773204], [-122.435776,37.773349], [-122.434128,37.773559], [-122.432488,37.773769], [-122.43084,37.773979], [-122.429192,37.774185], [-122.429245,37.774456], [-122.429291,37.774654], [-122.429383,37.775119], [-122.429474,37.775585], [-122.429574,37.77605], [-122.429665,37.776515], [-122.429635,37.776565], [-122.429604,37.776615], [-122.429581,37.776668], [-122.429566,37.776721], [-122.429566,37.776775], [-122.429612,37.777004], [-122.429787,37.777854], [-122.429802,37.777935], [-122.429703,37.777946], [-122.428307,37.778125], [-122.426659,37.778331], [-122.425019,37.778541], [-122.423371,37.778751], [-122.423287,37.778327]],
    rideToStreet:[[-122.460419,37.764312], [-122.460663,37.764301], [-122.460976,37.764286], [-122.460976,37.764301], [-122.461045,37.765216], [-122.461106,37.76612], [-122.460923,37.766128], [-122.460412,37.766147], [-122.460274,37.766178], [-122.460206,37.766193], [-122.460137,37.766212], [-122.460068,37.766239], [-122.46,37.766273], [-122.459946,37.766304], [-122.459878,37.766349], [-122.459786,37.766429], [-122.459725,37.766475], [-122.459672,37.766529], [-122.45961,37.766624], [-122.459275,37.766883], [-122.459229,37.766925], [-122.459168,37.766967], [-122.459107,37.767009], [-122.459046,37.767047], [-122.458985,37.767059], [-122.458947,37.76707], [-122.458893,37.767089], [-122.458817,37.76712], [-122.458741,37.767147], [-122.458687,37.767166], [-122.458611,37.767189], [-122.458565,37.767208], [-122.458413,37.767253], [-122.458313,37.767288], [-122.458123,37.767372], [-122.456406,37.767875], [-122.455834,37.768047], [-122.455651,37.768074], [-122.455514,37.768108], [-122.455208,37.768199], [-122.455163,37.768215], [-122.455109,37.768238], [-122.455063,37.768268], [-122.45501,37.768321], [-122.454964,37.768371], [-122.454934,37.768428], [-122.454903,37.768486], [-122.454888,37.76855], [-122.45488,37.768611], [-122.454873,37.768669], [-122.454873,37.76873], [-122.454873,37.768795], [-122.454888,37.768882], [-122.45488,37.768947], [-122.45488,37.768993], [-122.454888,37.769039], [-122.454888,37.769088], [-122.454903,37.769157], [-122.454918,37.769218], [-122.454934,37.769287], [-122.454957,37.769355], [-122.454979,37.769424], [-122.45501,37.769496], [-122.455048,37.76958], [-122.455094,37.769672], [-122.455292,37.770053], [-122.455323,37.770118], [-122.455353,37.770191], [-122.455384,37.770263], [-122.455414,37.770336], [-122.455407,37.770416], [-122.455399,37.770469], [-122.455384,37.770526], [-122.455361,37.770576], [-122.455338,37.770622], [-122.455315,37.770671], [-122.455285,37.770717], [-122.455246,37.770759], [-122.455201,37.770805], [-122.455155,37.770843], [-122.455094,37.770885], [-122.455025,37.770927], [-122.454957,37.770965], [-122.454873,37.771011], [-122.454758,37.771064], [-122.454117,37.771327], [-122.453995,37.771377], [-122.453942,37.771392], [-122.453896,37.771404], [-122.45385,37.771415], [-122.453766,37.771427], [-122.453682,37.77143], [-122.453599,37.77143], [-122.453499,37.771423], [-122.4534,37.771411], [-122.452652,37.771286], [-122.452553,37.77127], [-122.452462,37.771263], [-122.452355,37.771259], [-122.452263,37.771263], [-122.452172,37.771274], [-122.450707,37.771461], [-122.450623,37.771472], [-122.450524,37.771484], [-122.450173,37.77153], [-122.448975,37.771682], [-122.448884,37.771694], [-122.447419,37.771881], [-122.447335,37.771892], [-122.447243,37.771903], [-122.446541,37.771991], [-122.446305,37.772022], [-122.445878,37.772075], [-122.44574,37.772094], [-122.445611,37.772109], [-122.444039,37.772312], [-122.443985,37.772315], [-122.442406,37.772518], [-122.442307,37.772529], [-122.441529,37.772628], [-122.440873,37.772712], [-122.440751,37.772724], [-122.440606,37.772735], [-122.43911,37.772926], [-122.438004,37.773067], [-122.437485,37.773132], [-122.437394,37.773143], [-122.436921,37.773204], [-122.435776,37.773349], [-122.434128,37.773559], [-122.432488,37.773769], [-122.43084,37.773979], [-122.429192,37.774185], [-122.427552,37.774394], [-122.425911,37.774604], [-122.424309,37.774806], [-122.42421,37.774822], [-122.424103,37.774833], [-122.424004,37.774848], [-122.42408,37.775215], [-122.424096,37.775314], [-122.424187,37.775783], [-122.42421,37.77589], [-122.424279,37.776195], [-122.424286,37.776245], [-122.422905,37.77642], [-122.421906,37.77655]],
    walkFromGarage: [[-122.423287,37.778327], [-122.423188,37.77782], [-122.423089,37.777355], [-122.422997,37.776885], [-122.422905,37.77642], [-122.422806,37.775959], [-122.421166,37.776168], [-122.420517,37.776252]],
    walkFromStreet: [[-122.421906,37.77655], [-122.42154,37.776596], [-122.421258,37.77663], [-122.421166,37.776168], [-122.420517,37.776252]],
  },
  scootTwo: {
    walkStart: [[-122.461998,37.763427], [-122.462037,37.764007], [-122.462052,37.764225], [-122.462052,37.764244], [-122.46312,37.76419], [-122.46312,37.764205], [-122.463166,37.764945]],
    rideToGarage: [[-122.463166,37.764945], [-122.463181,37.765121], [-122.46325,37.766014], [-122.463158,37.766017], [-122.462296,37.766067], [-122.462182,37.766075], [-122.462105,37.766078], [-122.461106,37.76612], [-122.460923,37.766128], [-122.460412,37.766147], [-122.460274,37.766178], [-122.460206,37.766193], [-122.460137,37.766212], [-122.460068,37.766239], [-122.46,37.766273], [-122.459946,37.766304], [-122.459878,37.766349], [-122.459786,37.766429], [-122.459725,37.766475], [-122.459672,37.766529], [-122.45961,37.766624], [-122.459275,37.766883], [-122.459229,37.766925], [-122.459168,37.766967], [-122.459107,37.767009], [-122.459046,37.767047], [-122.458985,37.767059], [-122.458947,37.76707], [-122.458893,37.767089], [-122.458817,37.76712], [-122.458741,37.767147], [-122.458687,37.767166], [-122.458611,37.767189], [-122.458565,37.767208], [-122.458413,37.767253], [-122.458313,37.767288], [-122.458123,37.767372], [-122.456406,37.767875], [-122.455834,37.768047], [-122.455651,37.768074], [-122.455514,37.768108], [-122.455208,37.768199], [-122.455163,37.768215], [-122.455109,37.768238], [-122.455063,37.768268], [-122.45501,37.768321], [-122.454964,37.768371], [-122.454934,37.768428], [-122.454903,37.768486], [-122.454888,37.76855], [-122.45488,37.768611], [-122.454873,37.768669], [-122.454873,37.76873], [-122.454873,37.768795], [-122.454888,37.768882], [-122.45488,37.768947], [-122.45488,37.768993], [-122.454888,37.769039], [-122.454888,37.769088], [-122.454903,37.769157], [-122.454918,37.769218], [-122.454934,37.769287], [-122.454957,37.769355], [-122.454979,37.769424], [-122.45501,37.769496], [-122.455048,37.76958], [-122.455094,37.769672], [-122.455292,37.770053], [-122.455323,37.770118], [-122.455353,37.770191], [-122.455384,37.770263], [-122.455414,37.770336], [-122.455407,37.770416], [-122.455399,37.770469], [-122.455384,37.770526], [-122.455361,37.770576], [-122.455338,37.770622], [-122.455315,37.770671], [-122.455285,37.770717], [-122.455246,37.770759], [-122.455201,37.770805], [-122.455155,37.770843], [-122.455094,37.770885], [-122.455025,37.770927], [-122.454957,37.770965], [-122.454873,37.771011], [-122.454758,37.771064], [-122.454117,37.771327], [-122.453995,37.771377], [-122.453942,37.771392], [-122.453896,37.771404], [-122.45385,37.771415], [-122.453766,37.771427], [-122.453682,37.77143], [-122.453599,37.77143], [-122.453499,37.771423], [-122.4534,37.771411], [-122.452652,37.771286], [-122.452553,37.77127], [-122.452462,37.771263], [-122.452355,37.771259], [-122.452263,37.771263], [-122.452172,37.771274], [-122.450707,37.771461], [-122.450623,37.771472], [-122.450524,37.771484], [-122.450173,37.77153], [-122.448975,37.771682], [-122.448884,37.771694], [-122.447419,37.771881], [-122.447335,37.771892], [-122.447243,37.771903], [-122.446541,37.771991], [-122.446305,37.772022], [-122.445878,37.772075], [-122.44574,37.772094], [-122.445611,37.772109], [-122.444039,37.772312], [-122.443985,37.772315], [-122.442406,37.772518], [-122.442307,37.772529], [-122.441529,37.772628], [-122.440873,37.772712], [-122.440751,37.772724], [-122.440606,37.772735], [-122.43911,37.772926], [-122.438004,37.773067], [-122.437485,37.773132], [-122.437394,37.773143], [-122.436921,37.773204], [-122.435776,37.773349], [-122.434128,37.773559], [-122.432488,37.773769], [-122.43084,37.773979], [-122.429192,37.774185], [-122.429245,37.774456], [-122.429291,37.774654], [-122.429383,37.775119], [-122.429474,37.775585], [-122.429574,37.77605], [-122.429665,37.776515], [-122.429635,37.776565], [-122.429604,37.776615], [-122.429581,37.776668], [-122.429566,37.776721], [-122.429566,37.776775], [-122.429612,37.777004], [-122.429787,37.777854], [-122.429802,37.777935], [-122.429703,37.777946], [-122.428307,37.778125], [-122.426659,37.778331], [-122.425019,37.778541], [-122.423371,37.778751], [-122.423287,37.778327]],
    rideToStreet: [[-122.463166,37.764945], [-122.463181,37.765121], [-122.46325,37.766014], [-122.463158,37.766017], [-122.462296,37.766067], [-122.462182,37.766075], [-122.462105,37.766078], [-122.461106,37.76612], [-122.460923,37.766128], [-122.460412,37.766147], [-122.460274,37.766178], [-122.460206,37.766193], [-122.460137,37.766212], [-122.460068,37.766239], [-122.46,37.766273], [-122.459946,37.766304], [-122.459878,37.766349], [-122.459786,37.766429], [-122.459725,37.766475], [-122.459672,37.766529], [-122.45961,37.766624], [-122.459275,37.766883], [-122.459229,37.766925], [-122.459168,37.766967], [-122.459107,37.767009], [-122.459046,37.767047], [-122.458985,37.767059], [-122.458947,37.76707], [-122.458893,37.767089], [-122.458817,37.76712], [-122.458741,37.767147], [-122.458687,37.767166], [-122.458611,37.767189], [-122.458565,37.767208], [-122.458413,37.767253], [-122.458313,37.767288], [-122.458123,37.767372], [-122.456406,37.767875], [-122.455834,37.768047], [-122.455651,37.768074], [-122.455514,37.768108], [-122.455208,37.768199], [-122.455163,37.768215], [-122.455109,37.768238], [-122.455063,37.768268], [-122.45501,37.768321], [-122.454964,37.768371], [-122.454934,37.768428], [-122.454903,37.768486], [-122.454888,37.76855], [-122.45488,37.768611], [-122.454873,37.768669], [-122.454873,37.76873], [-122.454873,37.768795], [-122.454888,37.768882], [-122.45488,37.768947], [-122.45488,37.768993], [-122.454888,37.769039], [-122.454888,37.769088], [-122.454903,37.769157], [-122.454918,37.769218], [-122.454934,37.769287], [-122.454957,37.769355], [-122.454979,37.769424], [-122.45501,37.769496], [-122.455048,37.76958], [-122.455094,37.769672], [-122.455292,37.770053], [-122.455323,37.770118], [-122.455353,37.770191], [-122.455384,37.770263], [-122.455414,37.770336], [-122.455407,37.770416], [-122.455399,37.770469], [-122.455384,37.770526], [-122.455361,37.770576], [-122.455338,37.770622], [-122.455315,37.770671], [-122.455285,37.770717], [-122.455246,37.770759], [-122.455201,37.770805], [-122.455155,37.770843], [-122.455094,37.770885], [-122.455025,37.770927], [-122.454957,37.770965], [-122.454873,37.771011], [-122.454758,37.771064], [-122.454117,37.771327], [-122.453995,37.771377], [-122.453942,37.771392], [-122.453896,37.771404], [-122.45385,37.771415], [-122.453766,37.771427], [-122.453682,37.77143], [-122.453599,37.77143], [-122.453499,37.771423], [-122.4534,37.771411], [-122.452652,37.771286], [-122.452553,37.77127], [-122.452462,37.771263], [-122.452355,37.771259], [-122.452263,37.771263], [-122.452172,37.771274], [-122.450707,37.771461], [-122.450623,37.771472], [-122.450524,37.771484], [-122.450173,37.77153], [-122.448975,37.771682], [-122.448884,37.771694], [-122.447419,37.771881], [-122.447335,37.771892], [-122.447243,37.771903], [-122.446541,37.771991], [-122.446305,37.772022], [-122.445878,37.772075], [-122.44574,37.772094], [-122.445611,37.772109], [-122.444039,37.772312], [-122.443985,37.772315], [-122.442406,37.772518], [-122.442307,37.772529], [-122.441529,37.772628], [-122.440873,37.772712], [-122.440751,37.772724], [-122.440606,37.772735], [-122.43911,37.772926], [-122.438004,37.773067], [-122.437485,37.773132], [-122.437394,37.773143], [-122.436921,37.773204], [-122.435776,37.773349], [-122.434128,37.773559], [-122.432488,37.773769], [-122.43084,37.773979], [-122.429192,37.774185], [-122.427552,37.774394], [-122.425911,37.774604], [-122.424309,37.774806], [-122.42421,37.774822], [-122.424103,37.774833], [-122.424004,37.774848], [-122.42408,37.775215], [-122.424096,37.775314], [-122.424187,37.775783], [-122.42421,37.77589], [-122.424279,37.776195], [-122.424286,37.776245], [-122.422905,37.77642], [-122.421906,37.77655]],
    walkFromGarage: [[-122.423287,37.778327], [-122.423188,37.77782], [-122.423089,37.777355], [-122.422997,37.776885], [-122.422905,37.77642], [-122.422806,37.775959], [-122.421166,37.776168], [-122.420517,37.776252]],
    walkFromStreet: [[-122.421906,37.77655], [-122.42154,37.776596], [-122.421258,37.77663], [-122.421166,37.776168], [-122.420517,37.776252]],
  },
  scootThree: {
    walkStart:[[-122.461998,37.763427], [-122.462037,37.764007], [-122.462052,37.764225], [-122.462052,37.764244], [-122.460976,37.764286], [-122.460663,37.764301], [-122.459908,37.764331], [-122.45887,37.764377], [-122.45884,37.764381], [-122.458603,37.764389], [-122.458085,37.764411], [-122.457985,37.764419], [-122.457932,37.764423], [-122.457886,37.764427], [-122.457848,37.764446], [-122.45781,37.764476], [-122.457787,37.764514], [-122.457764,37.764556], [-122.457734,37.764629], [-122.457726,37.764659], [-122.457726,37.764686], [-122.457734,37.76482], [-122.456772,37.764942], [-122.456368,37.764991], [-122.455422,37.765113]],
    rideToGarage:[[-122.455422,37.765113], [-122.454422,37.765239], [-122.452775,37.765449], [-122.452469,37.765487], [-122.451417,37.765621], [-122.450196,37.765777], [-122.449975,37.765804], [-122.449624,37.76585], [-122.449387,37.76588], [-122.449196,37.766063], [-122.449074,37.766178], [-122.448922,37.766284], [-122.448754,37.766349], [-122.448639,37.766372], [-122.448555,37.766414], [-122.44854,37.766475], [-122.448296,37.766471], [-122.448159,37.766445], [-122.447999,37.766433], [-122.447968,37.766391], [-122.447907,37.766399], [-122.447922,37.766479], [-122.448029,37.767009], [-122.447213,37.767112], [-122.446389,37.767215], [-122.445565,37.767322], [-122.444748,37.767425], [-122.443863,37.767539], [-122.443726,37.767559], [-122.443444,37.768402], [-122.443352,37.768672], [-122.443329,37.768733], [-122.443306,37.768787], [-122.443268,37.76884], [-122.443215,37.768886], [-122.443162,37.768924], [-122.443123,37.768947], [-122.442872,37.769104], [-122.442399,37.769409], [-122.442315,37.769424], [-122.442254,37.769451], [-122.442215,37.769493], [-122.442177,37.769557], [-122.442154,37.769634], [-122.442139,37.769687], [-122.442093,37.769744], [-122.44204,37.769798], [-122.441956,37.769874], [-122.441811,37.769897], [-122.441689,37.769924], [-122.441529,37.769973], [-122.44133,37.770038], [-122.44117,37.770046], [-122.441002,37.770099], [-122.44088,37.770164], [-122.44085,37.770313], [-122.440774,37.770446], [-122.440735,37.770561], [-122.440674,37.770606], [-122.440613,37.770629], [-122.440568,37.770633], [-122.440537,37.770709], [-122.440362,37.770854], [-122.440392,37.770931], [-122.44056,37.771785], [-122.440735,37.772636], [-122.440751,37.772724], [-122.440774,37.772834], [-122.440781,37.772853], [-122.440804,37.772979], [-122.440918,37.773544], [-122.440934,37.773639], [-122.440789,37.77367], [-122.440545,37.7737], [-122.4403,37.773731], [-122.439301,37.77386], [-122.438996,37.773899], [-122.438141,37.774005], [-122.437676,37.774066], [-122.437584,37.774078], [-122.437249,37.77412], [-122.435959,37.774284], [-122.434319,37.774494], [-122.432679,37.774703], [-122.431031,37.774913], [-122.429383,37.775119], [-122.427743,37.775329], [-122.426102,37.775539], [-122.4245,37.775741], [-122.424347,37.775764], [-122.424187,37.775783], [-122.422806,37.775959], [-122.422905,37.77642], [-122.422997,37.776885], [-122.423089,37.777355], [-122.423188,37.77782], [-122.423287,37.778327]],
    walkFromGarage:[[-122.423287,37.778327], [-122.423188,37.77782], [-122.423089,37.777355], [-122.422997,37.776885], [-122.422905,37.77642], [-122.422806,37.775959], [-122.421166,37.776168], [-122.420517,37.776252]]
  }
};


// on ready
$(window).on('load', function() {

streetParkingOption = $('#spo');
var streetParkingClone = '<article class="parking-options-item"> <span id="option-2" class="btn">Park on the street</span> <h1>Extra $1</h1> </article>';

var rideOptions = $('.options-bottom');
var destInput = $('#destination');
var topBar = $('.drawer-top-bar');
var scootChoices = $('.options-list');
var parkingChoices = $('.parking-options-list');
var stepsContainers = $('.steps-col');
var stepTwoHelp = $('#step2-helper');
var stepsAll = $('.steps-container');
var backBtn = $('#back-btn');
backBtn.fadeOut(0);


var costCounter = new CountUp("est-cost", cost, cost, 2, 1, options);


markersOnMap = {
  walkingStart: false,
  scootPin: false,
  ridePath: false,
  garage: false,
  garageText: false,
  walkingEnd: false,
  streetParkPin: false,
  streetParkCircle: false,
  streetParkText: false,
  finalDest: false,
  finalDestText: false,
};

// app states
// 'map'
// 'searching'
// 'pickup'
// 'dropoff'
// 'ridemode'

appState = 'map';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2Nvb3R0ZWNoIiwiYSI6IlBMTjNqVTgifQ.r8a_cZRmGF_GIOKIKaK1dA';
// ***********************************************
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/scoottech/cj1ntr678001m2rqnl9flpo60', 
  center: [-122.462008,37.763429], 
  zoom: 14,
  scrollZoom: true,

  //dragRotate: false,
});

// disable map rotation using touch rotation gesture
map.touchZoomRotate.disableRotation();
// 2x tap zoom

// add GPS
map.on('load', function () {
  map.addLayer({
        "id": "route",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.462008,37.763429]
                    },
                    "properties": {}
                }]
            }
        },
        "layout": {
            "icon-image": "gps",
            "icon-size": {
              "stops": [
                // zoom is 5 -> circle radius will be 1px
                [12, 0.2],
                // zoom is 10 -> circle radius will be 2px
                [18, 1]
              ]
            }
        }
    });
  // reset icons & drawers
  //scootChoices.fadeOut(0);
  setTimeout(function(){
    $('#splash').fadeOut(500);
  },500);
  showRoutePreview('pickupScoot',0,'start');
  parkingChoices.fadeOut(0);

});

// resize event
map.on('resize', function () {
  console.log('map RESIZED')
});


var resetToBlue = function(){
  //var rg = map.querySourceFeatures('Garages WITH Scoots');
  //console.log(map.querySourceFeatures('Garages WITH Scoots') );
  map.setLayoutProperty('Garages WITH Scoots', 'icon-image', 'parking-inactive');
  map.setPaintProperty('New Scoots', 'icon-opacity', 0);
  map.setPaintProperty('Classics', 'icon-opacity', 0);
  map.setPaintProperty('Cargos', 'icon-opacity', 0);
}

var resetToRed = function(){
  map.setLayoutProperty('Garages WITH Scoots', 'icon-image', 'pickup-inactive');
  map.setPaintProperty('New Scoots', 'icon-opacity', 1);
  map.setPaintProperty('Classics', 'icon-opacity', 1);
  map.setPaintProperty('Cargos', 'icon-opacity', 1);
}



map.on('click', function (e) {
    var point = [e.point.x, e.point.y];
    var features = map.queryRenderedFeatures(point);
    // console.log(features);
    if(features.length > 0){
          var layerID = features[0].layer.id 
          console.log('ID: ' + layerID); 
          //console.log(features[0]);
          console.log(features[0].geometry.coordinates); 
          
    } else {
      // console.log('nothing here');
    }
});



// scoot slider
scootChoices.flickity({
  cellSelector: '.option-item',
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  // setGallerySize: false,
  resize: false
});

//parking choices slider
parkingChoices.flickity({
  cellSelector: '.parking-options-item',
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  resize: false
});


$('#sr').click(function(){ scootChoices.flickity( 'next' );});
$('#sl').click(function(){ scootChoices.flickity( 'previous' );});
$('#pr').click(function(){ parkingChoices.flickity( 'next' );});
$('#pl').click(function(){ parkingChoices.flickity( 'previous' );});



parkingData = parkingChoices.data('flickity');
var scootData = scootChoices.data('flickity');

var swipeTip = true;
var tip = $('.options-header');

var checkUIarrows = function(val){
  
  if (val === 0){
    $('#sr').removeClass('disabled');
    $('#sl').addClass('disabled');
  } else if( val === 1){
    $('#sr').removeClass('disabled');
    $('#sl').removeClass('disabled');
  } else {
    $('#sr').addClass('disabled');
    $('#sl').removeClass('disabled');
  }
}
var checkUIarrowsP = function(val){
  
  if (val === 0){
    $('#pr').removeClass('disabled');
    $('#pl').addClass('disabled');
  } else {
    $('#pr').addClass('disabled');
    $('#pl').removeClass('disabled');
  }
}

scootChoices.on('select.flickity', function() {
  // if(appState === "map"){
  //   checkUIarrows(scootData.selectedIndex);
  //   //rideOptions.fadeOut(0);
  //   return;
  // } else {
  //   checkUIarrows(scootData.selectedIndex);
  // }
  // console.log('flickity has selected something');
  var index = scootData.selectedIndex;
  checkUIarrows(index);
  showRoutePreview('pickupScoot', index, tripObj.destText);
  if( index === 2 ){
    costCounter.update(2);
    cost = 2;
  } else {
    costCounter.update(3);
    cost = 3;
  }
  // showRoutePreview('pickup', scootData.selectedIndex, tripObj.destText)
  
});


// scoots
var scootMove = false;
scootChoices.on( 'dragMove.flickity', function() {
  if(scootMove === false){
    scootMove = true;
    // console.log(scootMove);
  } else {
    return;
  }
});
scootChoices.on( 'settle.flickity', function() {
  scootMove = false;
  // console.log(scootMove);
});



// parking

var parkingMove = false;
parkingChoices.on( 'dragMove.flickity', function() {
  if(parkingMove === false){
    parkingMove = true;
    // console.log(parkingMove);
  } else {
    return;
  }
});
parkingChoices.on( 'settle.flickity', function() {
  parkingMove = false;
  // console.log(parkingMove);
});


var costContainer = $('.steps-col-2 h2');
parkingChoices.on( 'select.flickity', function(e, i) {

  console.log('this works: ', parkingData.selectedIndex);
  // if(appState === "map"){
  //   checkUIarrowsP(parkingData.selectedIndex);
  //   //parkingChoices.fadeOut(0);
  //   return;
  // } else {
    //checkUIarrowsP(parkingData.selectedIndex);
  //}
  checkUIarrowsP(parkingData.selectedIndex);


  if (parkingData.selectedIndex === 0){
    if(routeShapes.choice === "three"){
      costCounter.update(2);
    } else {
      costCounter.update(3);
    }
    
    setTimeout(function(){
      costContainer.velocity('callout.pulse');
    },700);
    //console.log('x', tripObj.groveGough);
    map.flyTo({ center: [tripObj.groveGough[0] + 0.002, tripObj.groveGough[1] - 0.002], speed: 1, zoom: 15 });
  } else {
    //console.log('rickshaw', tripObj.end.parkingByRickshaw);
    costCounter.update(4);
    setTimeout(function(){
      costContainer.velocity('callout.pulse');
    },700);
    map.flyTo({ center: tripObj.end.parkingByRickshaw, speed: 1, zoom: 15 });
  }

  console.log(e);
  console.log(i);
  showRoutePreview('parking', parkingData.selectedIndex);
  
});


// scootChoices.flickity( 'select', 0 );
// parkingChoices.flickity( 'select', 0 );


// the independent
// -122.437832, 37.775500
// green chile
// -122.441939, 37.777331

// Green Apple Bookstore
// -122.464571, 37.782998,

// rickshaw stop
// 37.776231, -122.420511


//garages 

// mcallister and divis
// [-122.43988037109375, 37.7783131479967]

tripObj = {
  gps: [-122.462008,37.763429],
  start: {
    LngLat: [ [-122.46041536331177, 37.76435174190689], [-122.46319144964218, 37.76494756721861],  [-122.45542109012604, 37.76511719632279]],
    //addressNum: undefined,
    //locationText: undefined,
  },

  destText: undefined,
  // this is for autocomplete (gets latlng)
  tripOptions: {
  },

  rickshaw: [-122.420511, 37.776231],
  groveGough: [-122.42340087890625, 37.7783131479967],

  theSpot: [-122.43988037109375, 37.7783131479967], //mc and divis
  end: {
    LngLat: [-122.436636, 37.775140],
    parkingByRickshaw: [-122.421909, 37.776544]
    // garages: {
    //   mcAndDivis : [-122.43988037109375, 37.7783131479967],
    //   groveGough: [-122.42340087890625, 37.7783131479967],
    //   california: [-122.46597290039062, 37.784825448858584]
    // }
  },  
}











    // // remove the destination parking CIRCLE
    // map.removeLayer('scooter-pin');
    // map.removeSource('scooter-pin');

    // // remove the destination parking TEXT
    // map.removeLayer('scooter-pin');
    // map.removeSource('scooter-pin');






// interactions
var fmasDrawer = $('.scoot-options-container');



// 
//fmasDrawer.fadeOut(0);

//inputFields
var inputFields = $('.options-top');
var typed = false;
inputFields.fadeOut(0);

$('.desination-container').click(function(){
  if(typed || appState === 'done'){
    return;
  }
  
  //rideOptions.fadeOut(300);
  if($(this).hasClass('desination-container') ){
    $(this).find('input').val('').attr('placeholder','Enter a destination').focus();
  } else {
    $(this).find('input').val('').attr('placeholder','Enter your location').focus();
  }
  tripObj.status = 'searching';
  $('#map').addClass('full');
    setTimeout(function(){
      //console.log('resize that shit');
      // map.resize();
       $(window).scrollTop(0);
      // scroll to top
    },250);
  
});

// $('input.location').blur(function(){
//   var val = $(this).val();
//   if(val === ''){
//     $(this).attr('placeholder','Current Location');
//   }
// })

// autocomplete
var parent = $('.search-results-container');
parent.fadeOut(0);
var makeSearchList = function(searchObj){
  
  parent.fadeIn(300);
  parent.children().remove();
  var lngLatArray = [];
 for(var i = 0; i< searchObj.features.length; i++ ){
  var el = searchObj.features[i];
  //console.log(el);
  var type = el.properties.layer;
  var name = el.properties.name;
  var street = el.properties.street
  var city = el.properties.locality;
  var state = el.properties.region_a;
  var lnglat = el.geometry.coordinates;
  lngLatArray.push(lnglat);
  //console.log(type, name, street);
  if (type === 'venue'){
    if(street === undefined){
      //parent.append( '<div class="result-item"><i class="icon ion-location"></i><div class="result-area"><strong>'+name+'</strong><span>'+city+', '+state+'</span></div></div>');
      parent.append(
        '<div class="result-item"><i class="icon ion-location"></i><div class="result-area"><strong>'+name+'</strong><span>'+city+', '+state+'</span></div></div>');
      
    } else {
      parent.append( '<div class="result-item"><i class="icon ion-location"></i><div class="result-area"><strong>'+name+', '+street+'</strong><span>'+city+', '+state+'</span></div></div>');
    }
    
  } else {
    parent.append( '<div class="result-item"><i class="icon ion-location"></i><div class="result-area"><strong>'+name+'</strong><span>'+city+', '+state+'</span></div></div>');
  }
  
  } // end of for loop
  tripObj.tripOptions = lngLatArray;
  //console.log(tripObj);

}

var updateResults = function(){
  var text = $('#destination').val();
  $.getJSON("https://search.mapzen.com/v1/search/?api_key=mapzen-jQ1cw6W&boundary.rect.min_lat=37.737598&boundary.rect.min_lon=-122.516613&boundary.rect.max_lat=37.813717&boundary.rect.max_lon=-122.369156&text="+text+"&size=2&boundary.country=USA&layers=venue,address", function(result, textStatus, xhr) {
    if (xhr && xhr.status) {
      //console.log(result);
      makeSearchList(result);
    } 
});
  
};



var intervalId;

destInput.on('keydown', _.debounce(updateResults, 250 ));

var loader = $('#loader');
var showLoading = function(){
  loader.fadeIn(300);
  resetToBlue();
  setTimeout(function(){
    loader.fadeOut(300);
    map.flyTo({
      center: [tripObj.groveGough[0] + 0.002, tripObj.groveGough[1] - 0.002],
      zoom: 15,
      speed: 0.8,
      curve: 2,
    });
    changeStep(3);
    parkingChoices.fadeIn(300);
    $('.options-top').fadeOut(300);


  },4000);
}


// get addy from results
// START FIRST STEP
$('.search-results-container').on('click',".result-item", function(){
  appStep = 3;

  typed = true;
  $('#destination').prop('disabled', true);
  var i = $(this).index();
  lngLatChoice = tripObj.tripOptions[i];
  tripObj.theSpot = lngLatChoice
  var choiceText = $(this).find('strong').text();
  $('#destination').blur();
  $('#destination').val(choiceText);
  $('#destination').text(choiceText);
  console.log(choiceText);
  tripObj.destText = choiceText.split(',')[0];
  appState = 'pickup';
  //scootChoices.flickity( 'select', 0 );
  //scootChoices.fadeIn(300);
  //console.log('time for bidness')
  parent.fadeOut(300);
  stepTwoHelp.fadeOut(0);
  showRoutePreview('parking', 0);
  animateMapBounds('trip-overview');
  showLoading();

  // });

});


var layOutRules;
var lineWidthRules = {
"stops": [
    [12, 4],
    [18, 10]
  ]
};

var placeMarker = function(type, point, walking){
  if (walking === undefined){
    //console.log('walking undefined');
    walking = 1;
  }
  if (type === "destination-pin"){
    var layerID = 'finale';
    var markerType = 'symbol';
    var paintRules = {};
    var sourceObj = {
                "type": "geojson",
                "data": {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Point",
                        "coordinates": point                    
                    }
                }};
    var layoutObj = {
      "icon-size" : {
        stops : [[12,0.4],[16,1]]
      },
      "icon-image": "pin"
    };
  } else if (type ==="street-parking-marker"){
    var layerID = 'sp-marker';
    var markerType = 'symbol';
    var paintRules = {};
    var sourceObj = {
                "type": "geojson",
                "data": {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Point",
                        "coordinates": point                    
                    }
                }};
    var layoutObj = {
      "icon-size" :
      {
        stops : [[12,0.4],[16,1]]
      },
      "icon-image": "parking-marker"
    };
    
  } else if (type ==="garageText"){
    
    var layerID = 'garageText';
    var markerType = 'symbol';
    var paintRules = {
      "text-opacity": {
        "stops": [ [13.9, 0], [14, 1]   ] // zoom, val
      },
      'text-color': '#1a64a5',
    };
    var sourceObj = {
              "type": "geojson",
              "data": {
                  "type": "Feature",
                  "properties": {},
                  "geometry": {
                      "type": "Point",
                      "coordinates": point                    
                  }
              }};
    var layoutObj = {
      "text-field": 'Grove Garage',
      "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
      "text-size": 10,
      "text-transform": "uppercase",
      "text-letter-spacing": 0.05,
      "text-offset": [3,0],
      "text-justify" : 'left',
      "text-anchor" : 'left'
         //"stops": [ [11, [0,1]], [16, [0,4]]   ] // zoom, val
      //}
    };  
  } else if (type ==="destText"){
    
    var layerID = 'finaleText';
    var markerType = 'symbol';
    var paintRules = {
      "text-opacity": {
        "stops": [ [13.9, 0], [14, 1]   ] // zoom, val
      },
      'text-color': '#333',
    };
    var sourceObj = {
              "type": "geojson",
              "data": {
                  "type": "Feature",
                  "properties": {},
                  "geometry": {
                      "type": "Point",
                      "coordinates": point                    
                  }
              }};
    var layoutObj = {
      "text-field": '155 Fell Street ('+walking+ ' min walk)',
      "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
      "text-size": 10,
      'text-max-width': 8,
      "text-transform": "uppercase",
      "text-letter-spacing": 0.05,
      "text-offset": [2,0],
      "text-justify" : 'left',
      "text-anchor" : 'left'
         //"stops": [ [11, [0,1]], [16, [0,4]]   ] // zoom, val
      //}
    };

  } else if (type ==="destination-sp-text"){
  
  var layerID = 'destination-sp-text';
  var markerType = 'symbol';
  var paintRules = {
    "text-color": "#1a64a5",
    "text-opacity": {
      "stops": [ [13.9, 0], [14, 1]   ] // zoom, val
      //"stops": [ [11, 0], [14, 0], [16, 1]   ] // zoom, val
    }
  };
  var sourceObj = {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": point                    
                }
            }};
  var layoutObj = {
    "text-field": 'PARK IN THIS AREA',
    "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
    "text-size": 10,
    "text-transform": "uppercase",
    "text-letter-spacing": 0.05,
    "text-offset": [0,3]
       //"stops": [ [11, [0,1]], [16, [0,4]]   ] // zoom, val
    //}
  };

  } else if (type ==="destination-circle"){
    
    var layerID = 'destination-circle';
    var markerType = 'circle';
    var paintRules = {
      "circle-radius": {
      "stops": [ [11, 10], [16, 100], [18, 250], [20,500] ] // zoom, val
      },
      'circle-color': '#0073ff',
      'circle-stroke-width': {
        "stops": [ [12, 0], [13, 1] ]
      },
      'circle-stroke-color': '#228deb',
      'circle-opacity': 0.08
      // {
      //   "stops": [ [11, 0.1], [16, 0.15], [18, 0.08] ] // zoom, val
      // }
    };
    var sourceObj = {
              "type": "geojson",
              "data": {
                  "type": "Feature",
                  "properties": {},
                  "geometry": {
                      "type": "Point",
                      "coordinates": point                    
                  }
              }};
    var layoutObj = {};
  } else if (type === "scooter-pin"){
    var layerID = 'scooter-pin';
  var markerType = 'symbol';
  var paintRules = {};
  var sourceObj = {
              "type": "geojson",
              "data": {
                  "type": "Feature",
                  "properties": {},
                  "geometry": {
                      "type": "Point",
                      "coordinates": point                    
                  }
              }};
  var layoutObj = {
    "icon-size" : {
      stops : [[12,0.3],[16,0.7]]
    },
    "icon-image": "active-scoot"
  }; 
  
  } else if(type ==="destination-garage"){
    var layerID = 'destination-garage';
  var markerType = 'symbol';
  var paintRules = {};
  var sourceObj = {
              "type": "geojson",
              "data": {
                  "type": "Feature",
                  "properties": {},
                  "geometry": {
                      "type": "Point",
                      "coordinates": point                    
                  }
              }};
  var layoutObj = {
    "icon-size" : {
      stops : [[12,0.5],[15,1]]
    },
    "icon-image": "parking-active"
  };

  } else {

  }

  map.addLayer({
          "id": layerID,
          "type": markerType,
          "source": sourceObj,
          "layout": layoutObj,
          "paint": paintRules
      });
};


var drawRouteOnMap = function(type, pathCoords){
  // console.log('type: '+ type);
  // console.log('Draw a route on the map');
  // console.log(pathCoords);
  //console.log('Drawing line on map: ', type);
  // console.log(pathCoords);
  var strokeColor;
  var strokeOpacity;
  var dashArray;
  var layerID;
  var sourceObj;
  var paintRules;
  var markerType;

   strokeOpacity = 0.7;
   
  
  // set param
  if (type === 'ride'){
    //console.log('set these up!');
    dashArray = [1,0];
    strokeColor =  "#08baba";
    layerID = "ride-route";
    markerType = "line";
    layOutRules = {
      "line-join": "round",
      "line-cap": "round"
    };
    paintRules = {
              "line-color": strokeColor,
              "line-opacity": strokeOpacity,
              "line-dasharray": dashArray,
              "line-width": lineWidthRules };

  } else if (type === "walking1" || type === "walking2"){
    markerType = "line";
    strokeColor = '#888';
    dashArray = { "stops": [  [14,[1, 0] ], [14.2,[1,2]]  ]};
    layOutRules = {
      "line-join": "round",
      "line-cap": "round"
    };
    paintRules = {
              "line-color": strokeColor,
              "line-opacity": strokeOpacity,
              "line-dasharray": dashArray,
              "line-width": lineWidthRules };
    if (type === "walking1"){

      layerID = "walking-start-path";
      
    } else {
      layerID = "walking-end-path";
    }
  } else if (type === "walking-icon1" || type === "walking-icon2"){
    //console.log('make the line SYMBOL!!!');
    markerType = "symbol";
    if (type === "walking-icon1"){
      layerID = "walking-icon-line1";
    } else {
      layerID = "walking-icon-line2";
    }
    //console.log('final layer ID:',layerID)
    
    layOutRules = {
      'icon-image': 'walking-icon',
      'icon-size': { 'stops': [  [14, 0.1], [16, 0.4]  ]},
      'symbol-placement': 'line',
      'symbol-spacing': { 'stops': [  [14, 20], [16, 50]  ]},
      'icon-rotation-alignment': 'viewport'
    }
    paintRules = {
      'icon-opacity': { 'stops': [  [14, 0], [16, 1]  ]}
    };
  }
  sourceObj = {
              "type": "geojson",
              "data": {
                  "type": "Feature",
                  "properties": {},
                  "geometry": {
                      "type": "LineString",
                      "coordinates": pathCoords                    
                  }
              }};

  //console.log('ID', layerID);
  //console.log('type', markerType);
  map.addLayer({
          "id": layerID,
          "type": markerType,
          "source": sourceObj,
          "layout": layOutRules,
          "paint": paintRules
      }, "OB");

};
 
// 
var decode = function(str, precision) {
    var index = 0,
        lat = 0,
        lng = 0,
        coordinates = [],
        shift = 0,
        result = 0,
        byte = null,
        latitude_change,
        longitude_change,
        factor = Math.pow(10, precision || 6);

    // Coordinates have variable length when encoded, so just keep
    // track of whether we've hit the end of the string. In each
    // loop iteration, a single coordinate is decoded.
    while (index < str.length) {

        // Reset shift, result, and byte
        byte = null;
        shift = 0;
        result = 0;

        do {
            byte = str.charCodeAt(index++) - 63;
            result |= (byte & 0x1f) << shift;
            shift += 5;
        } while (byte >= 0x20);

        latitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

        shift = result = 0;

        do {
            byte = str.charCodeAt(index++) - 63;
            result |= (byte & 0x1f) << shift;
            shift += 5;
        } while (byte >= 0x20);

        longitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

        lat += latitude_change;
        lng += longitude_change;

        coordinates.push([lng / factor, lat / factor]);
    }

    return coordinates;
};




var getResults= function(type, obj){
  var lat1 = obj.lat1;
  var lon1 = obj.lon1;
  var lat2 = obj.lat2;
  var lon2 = obj.lon2;
  //console.log(type)
  if (type === "walking1" || type === "walking2" || type === "walking-icon1" || type === "walking-icon2"){

   $.getJSON('https://valhalla.mapzen.com/route?json={"locations":[{"lat":'+lat1+',"lon":'+lon1+'},{"lat":'+lat2+',"lon":'+lon2+'}],"costing":"pedestrian","costing_options":{"transit":{"use_bus":"1.0","use_rail":"0.0","use_transfers":"0.3"},"pedestrian":{"walking_speed":"4.1"}}}&api_key=mapzen-jQ1cw6W', function(result, textStatus, xhr) {
  
  if (xhr && xhr.status) {
    var shapeString = result.trip.legs[0].shape;
    var coords = decode(shapeString);
    
    drawRouteOnMap(coords, type)
  } 
 });

 } else {
  
  //console.log('this is a RIDDDE');
  $.getJSON('https://valhalla.mapzen.com/route?json={"locations":[{"lat":'+lat1+',"lon":'+lon1+'},{"lat":'+lat2+',"lon":'+lon2+'}],"costing":"auto","costing_options":{"maneuver_penalty":30}}&api_key=mapzen-jQ1cw6W', function(result, textStatus, xhr) {
  
  if (xhr && xhr.status) {
    //console.log(result);
    var shapeString = result.trip.legs[0].shape;
    var coords = decode(shapeString);
    drawRouteOnMap(coords, type)
  } 
 });

 
  }
};


// var lnglatSetting = [-122.437832, 37.775500,];
// placeMarker('destination',lnglatSetting)

var animateMapBounds = function(type, index, animLength){
  var n, e, s, w;
  if (type === 'pickup' || type === 'pickupScoot'){
    var start = tripObj.gps;
    var end = tripObj.start.LngLat[index];
  } else if (type === "trip-overview") {
    var start = tripObj.gps;
    var end = tripObj.rickshaw;
  } else {

  }
  
  if(start [0] > end[0]){
    var w = end[0]
    var e = start[0]
  } else {
    var e = end[0]
    var w = start[0]
  }

  if(start [1] > end[1]){
    var s = end[1]
    var n = start[1]
  } else {
    var n = end[1]
    var s = start[1]
  }  

  // [w, s, e, n]

  
  var bbox = [
    [w, s], [e, n]
    //[-79, 43], [-73, 45]
  ];
  //console.log(bbox);
  if (type === 'pickup' || type === 'pickupScoot'){
    map.fitBounds(bbox, {
      padding: {top: 200, bottom:200, left: 60, right: 60},
      speed: 1
    });
  } else if (type === "trip-overview") {
    map.fitBounds(bbox, {
      padding: {top: 100, bottom:150, left: 40, right: 40},
      speed: 1
    });

  } else {

  }
  
}

// var changeRoute = function(param){
//   console.log('empty function');
// }




var removeIconsRoutes = function(){
  // remove the START walking path
    if( markersOnMap.walkingStart){
      map.removeLayer('walking-start-path');
      map.removeSource('walking-start-path');
    }
    
    // remove the END walking path
    if( markersOnMap.walkingEnd){
      map.removeLayer('walking-end-path');
      map.removeSource('walking-end-path');
    }

    // remove the RIDE path
    if( markersOnMap.ridePath ){
      map.removeLayer('ride-route');
      map.removeSource('ride-route');
    }
  
    // remove scooter pin
    if( markersOnMap.scootPin ){
      map.removeLayer('scooter-pin');
      map.removeSource('scooter-pin');
    }

    // remove the garage pin
    if( markersOnMap.garage ){
      map.removeLayer('destination-garage');
      map.removeSource('destination-garage');
    }

    // remove the garage pin
    if( markersOnMap.garageText ){
      map.removeLayer('garageText');
      map.removeSource('garageText');
    }

    // remove the destination pin
    if( markersOnMap.finalDest ){
      map.removeLayer('finale');
      map.removeSource('finale');
    }

    // remove the destination text
    if( markersOnMap.finalDestText ){
      map.removeLayer('finaleText');
      map.removeSource('finaleText');
    }


    // remove the destination parking CIRCLE
    if( markersOnMap.streetParkCircle ){
      map.removeLayer('destination-circle');
      map.removeSource('destination-circle');
    }

    // remove the destination parking PIN
    if( markersOnMap.streetParkPin ){
      map.removeLayer('sp-marker');
      map.removeSource('sp-marker');
    }

    // remove the destination parking TEXT
    if( markersOnMap.streetParkText ){
      map.removeLayer('destination-sp-text');
      map.removeSource('destination-sp-text');
    }
    
};

var processPickUpScoot = function(val,destination){
  console.log('process pickup scoot');
  
  var scooterGPS = [tripObj.start.LngLat[val][0], tripObj.start.LngLat[val][1]];

  // remove icons
  removeIconsRoutes();

  // set obj states
  
  // routes
  markersOnMap.walkingStart = true;
  markersOnMap.walkingEnd = false;
  markersOnMap.ridePath = false;
  // markers
  markersOnMap.scootPin = true;
  markersOnMap.garage = false;
  markersOnMap.garageText = false;
  markersOnMap.finalDest = false;
  markersOnMap.finalDestText = false;

  // misc
  markersOnMap.streetParkCircle = false;
  markersOnMap.streetParkPin = false;
  markersOnMap.streetParkText = false;
  

  
  // set route variables & add new routes & markers
  if(val === 0){
    drawRouteOnMap('walking1', routeShapes.scootOne.walkStart);
    placeMarker('scooter-pin', tripObj.start.LngLat[val] );
    routeShapes.choice = 'one';
  } else if (val == 1) {
    drawRouteOnMap('walking1', routeShapes.scootTwo.walkStart);
    placeMarker('scooter-pin', tripObj.start.LngLat[val] );
    routeShapes.choice = 'two';
  } else {
    // third option
    drawRouteOnMap('walking1', routeShapes.scootThree.walkStart);
    placeMarker('scooter-pin', tripObj.start.LngLat[val] );
    routeShapes.choice = 'three';
  }
  
     
      
}


var processPickUp = function(val,destination){
  resetToBlue();
  var scooterGPS = [tripObj.start.LngLat[val][0], tripObj.start.LngLat[val][1]];

  // remove icons
  removeIconsRoutes();

  // set obj states
  
  // routes
  markersOnMap.walkingStart = true;
  markersOnMap.walkingEnd = true;
  markersOnMap.ridePath = true;
  // markers
  markersOnMap.scootPin = true;
  markersOnMap.garage = true;
  markersOnMap.garageText = true;
  markersOnMap.finalDest = true;
  markersOnMap.finalDestText = true;

  
  // set route variables & add new routes & markers
  if(val === 0){
    drawRouteOnMap('walking1', routeShapes.scootOne.walkStart);
    drawRouteOnMap('ride', routeShapes.scootOne.rideToGarage);
    drawRouteOnMap('walking2', routeShapes.scootOne.walkFromGarage);
    placeMarker('scooter-pin', tripObj.start.LngLat[val] );
    placeMarker('destination-garage',tripObj.groveGough);
    placeMarker('garageText', tripObj.groveGough);
    placeMarker('destination-pin', tripObj.rickshaw);
    placeMarker('destText', tripObj.rickshaw, 3);   
    routeShapes.choice = 'one';
  } else if (val === 1) {
    drawRouteOnMap('walking1', routeShapes.scootTwo.walkStart);
    drawRouteOnMap('ride', routeShapes.scootTwo.rideToGarage);
    drawRouteOnMap('walking2', routeShapes.scootTwo.walkFromGarage);
    placeMarker('scooter-pin', tripObj.start.LngLat[val] );
    placeMarker('destination-garage',tripObj.groveGough);
    placeMarker('garageText', tripObj.groveGough);
    placeMarker('destination-pin', tripObj.rickshaw);
    placeMarker('destText', tripObj.rickshaw, 3);
    // set choice
    routeShapes.choice = 'two';
  } else {
    //third choice

    console.log('draw here');  

    drawRouteOnMap('walking1', routeShapes.scootThree.walkStart);
    drawRouteOnMap('ride', routeShapes.scootThree.rideToGarage);
    drawRouteOnMap('walking2', routeShapes.scootThree.walkFromGarage);
    placeMarker('scooter-pin', tripObj.start.LngLat[val] );
    placeMarker('destination-garage',tripObj.groveGough);
    placeMarker('garageText', tripObj.groveGough);
    placeMarker('destination-pin', tripObj.rickshaw);
    placeMarker('destText', tripObj.rickshaw, 3);
    // set choice
    routeShapes.choice = 'three';
  }
  
     
      
}
// end of processPickUp

var processParking = function(val,destination){
    console.log('run process parking');
    removeIconsRoutes();
    // routes
    markersOnMap.walkingStart = true;
    markersOnMap.walkingEnd = true;
    markersOnMap.ridePath = true;
    // markers
    markersOnMap.scootPin = true;
    markersOnMap.finalDestText = true;
    if(val === 1){
      markersOnMap.garage = false;
    } else {
      markersOnMap.garage = true;
    }
    markersOnMap.finalDest = true;
    console.log('this is the val: ' + val);
    if(val === 1){
      markersOnMap.streetParkPin = true;
      markersOnMap.streetParkCircle = true;
      markersOnMap.streetParkText = true;
      markersOnMap.garageText = false;
    } else {
      markersOnMap.streetParkCircle = false;
      markersOnMap.streetParkPin = false;
      markersOnMap.streetParkText = false;
      markersOnMap.garageText = true;
    }
    

      // set route variables & add new routes & markers
  if(routeShapes.choice === 'one'){
    //console.log(val);
    if(val === 1){

      drawRouteOnMap('walking1', routeShapes.scootOne.walkStart);
      drawRouteOnMap('ride', routeShapes.scootOne.rideToStreet);
      drawRouteOnMap('walking2', routeShapes.scootOne.walkFromStreet);
      placeMarker('scooter-pin', tripObj.start.LngLat[0] );
      placeMarker('destination-pin', tripObj.rickshaw);
      placeMarker('destText', tripObj.rickshaw, 1);
      
      // street parking stuff
      placeMarker('destination-circle', tripObj.end.parkingByRickshaw);
      placeMarker('street-parking-marker', tripObj.end.parkingByRickshaw);
      placeMarker('destination-sp-text', tripObj.end.parkingByRickshaw);
      
      
      
      
      
      

    } else {
      drawRouteOnMap('walking1', routeShapes.scootOne.walkStart);
      drawRouteOnMap('ride', routeShapes.scootOne.rideToGarage);
      drawRouteOnMap('walking2', routeShapes.scootOne.walkFromGarage);
      placeMarker('scooter-pin', tripObj.start.LngLat[0] );
      placeMarker('destination-garage',tripObj.groveGough);
      placeMarker('garageText', tripObj.groveGough);
      placeMarker('destination-pin', tripObj.rickshaw); 
      placeMarker('destText', tripObj.rickshaw, 3);
    }

    if(parkingDestroyed){
      var parkingFlickityArrows = $('.parking-options-list').find('.scoots');
      var parkingFlickityDots = $('.parking-options-list').find('.flickity-page-dots');
      streetParkingOption.fadeIn(0);
      parkingFlickityDots.fadeIn(0);
      parkingFlickityArrows.fadeIn(0);
      setTimeout(function(){
        console.log('new flicker 1');
        parkingChoices.flickity({
          cellSelector: '.parking-options-item',
          //cellAlign: 'left',
          //contain: true,
          setGallerySize: false,
          prevNextButtons: false,
          // resize: false
        });
        parkingData = parkingChoices.data('flickity');
        setTimeout(function(){
          console.log('resizwe');
          parkingChoices.flickity('resize');
          parkingChoices.flickity('reposition');
        },1000);  
      },5550);

        parkingDestroyed = false;
      }

  // if it's the second scoot
  } else if(routeShapes.choice === 'two'){
    if(val === 1){
      drawRouteOnMap('walking1', routeShapes.scootTwo.walkStart);
      drawRouteOnMap('ride', routeShapes.scootTwo.rideToStreet);
      drawRouteOnMap('walking2', routeShapes.scootTwo.walkFromStreet);
      placeMarker('scooter-pin', tripObj.start.LngLat[1] );
      placeMarker('destination-pin', tripObj.rickshaw);
      placeMarker('destText', tripObj.rickshaw, 1);
      // street parking stuff
      placeMarker('destination-circle', tripObj.end.parkingByRickshaw); 
      placeMarker('street-parking-marker', tripObj.end.parkingByRickshaw);
      placeMarker('destination-sp-text', tripObj.end.parkingByRickshaw);
      
    } else {
      drawRouteOnMap('walking1', routeShapes.scootTwo.walkStart);
      drawRouteOnMap('ride', routeShapes.scootTwo.rideToGarage);
      drawRouteOnMap('walking2', routeShapes.scootTwo.walkFromGarage);
      placeMarker('scooter-pin', tripObj.start.LngLat[1] );
      placeMarker('destination-garage',tripObj.groveGough);
      placeMarker('garageText', tripObj.groveGough);
      placeMarker('destination-pin', tripObj.rickshaw);
      placeMarker('destText', tripObj.rickshaw, 3);
    }
    if(parkingDestroyed){
      var parkingFlickityArrows = $('.parking-options-list').find('.scoots');
      var parkingFlickityDots = $('.parking-options-list').find('.flickity-page-dots');
      streetParkingOption.fadeIn(0);
      parkingFlickityDots.fadeIn(0);
      parkingFlickityArrows.fadeIn(0);
      setTimeout(function(){
        console.log('new flicker 2');
        parkingChoices.flickity({
          cellSelector: '.parking-options-item',
          //cellAlign: 'left',
          //contain: true,
          setGallerySize: false,
          prevNextButtons: false,
          // resize: false
        });
        parkingData = parkingChoices.data('flickity');
        setTimeout(function(){
          console.log('resizwe');
          parkingChoices.flickity('resize');
          parkingChoices.flickity('reposition');
        },1000);  
      },5550);
      parkingDestroyed = false;
      }
  } else if (routeShapes.choice === 'three') {
    // third choice
    // kim
    console.log('this is the third choice');
    markersOnMap.streetParkCircle = false;
    markersOnMap.streetParkPin = false;
    markersOnMap.streetParkText = false;

    drawRouteOnMap('walking1', routeShapes.scootThree.walkStart);
    drawRouteOnMap('ride', routeShapes.scootThree.rideToGarage);
    drawRouteOnMap('walking2', routeShapes.scootThree.walkFromGarage);
    placeMarker('scooter-pin', tripObj.start.LngLat[2] );
    placeMarker('destination-garage',tripObj.groveGough);
    placeMarker('garageText', tripObj.groveGough);
    placeMarker('destination-pin', tripObj.rickshaw);
    placeMarker('destText', tripObj.rickshaw, 3);

    var parkingFlickityArrows = $('.parking-options-list').find('.scoots');
    var parkingFlickityDots = $('.parking-options-list').find('.flickity-page-dots');
    parkingChoices.flickity('destroy');
    //parkingChoices.flickity( 'remove', streetParkingOption );
    streetParkingOption.fadeOut(0);
    parkingFlickityDots.fadeOut(0);
    parkingFlickityArrows.fadeOut(0);
    parkingDestroyed = true;
    //parkingChoices.flickity( 'append', streetParkingClone );

  } else {
    // do nothing
  }

}

var processRouteMarkers = function(type,val,destination){
  if (type === "pickup"){
    processPickUp(val,destination);
    
  } else if(type === "parking"){
    processParking(val, destination);

  } else if(type === "pickupScoot"){
    processPickUpScoot(val, destination);
  // if it's not parking or ride...
  } else {

  }

}

var showRoutePreview = function(type, val, destination){
  if(type ==='pickup' || type ==="pickupScoot" && destination !== "start"){
    animateMapBounds(type, val, 1000);
  }
    processRouteMarkers(type,val,destination);
  
  
  
}

var stepNum = $('.steps-col-1 span em');
var stepTitle = $('.steps-col-2 h1');
var stepPill = $('.steps-col-1 span')
var changeStep = function(index){
  if( index === 1){
    console.log('ok back again');
    appStep = 1;
    stepNum.text('1');
    stepTitle.text('Choose your scoot');
    stepPill.css({
      'border-color': red,
      'color': red,
    })
  }
  if( index === 2){
    stepNum.text('2');
    stepTitle.text('Enter Destination');
    stepPill.css({
      'border-color': blue,
      'color': blue,
    })
    appStep = 2;
  }
  if( index === 3){
    stepNum.text('3');
    stepTitle.text('Choose Parking');
    stepPill.css({
      'border-color': blue,
      'color': blue,
    })
    stepsContainers.velocity("callout.pulse");
    appStep = 3;
  }
  if( index === 4){
    stepNum.text('4');
    stepTitle.text('Start your ride');
    stepPill.css({
      'border-color': red,
      'color': red,
    });
    stepsContainers.velocity("callout.pulse");
    appStep = 4;
  }
}

  


var reserveBtn = $('.reserve-btn');




reserveBtn.click(function(){
  destInput.focus();
  if (scootMove){
    return;
  }
  backBtn.fadeIn(0);
  appStep = 2;
  if(routeShapes.choice === 'none'){
    
    routeShapes.choice = 'one';
    showRoutePreview('pickupScoot',0,1000);
    scootChoices.fadeOut(0);
    setTimeout(function(){
      inputFields.velocity('transition.bounceDownIn');
      changeStep(2);
      setTimeout(function(){
        stepsContainers.velocity("callout.pulse");
        //destInput.velocity("callout.flash");
      },300);
    },1200);
  } else {
    
    scootChoices.fadeOut(0);
    inputFields.velocity('transition.bounceDownIn');
    changeStep(2);
    setTimeout(function(){
      stepsContainers.velocity("callout.pulse");
      //destInput.velocity("callout.flash");
    },300);
  }

  if(routeShapes.choice === 'one'){
    $('.context.location').val('Scoot #512 (Parked on Irving St)');
  } else if  (routeShapes.choice === 'two'){
    $('.context.location').val('Scoot #1108 (Parked on 6th Ave)');
  } else {
    $('.context.location').val('Scoot #917 (Parked on Carl St)');
  }
  // change icons 
  //resetToBlue();
  
  //animate map
  // map.flyTo({
  //   center: [tripObj.groveGough[0] + 0.002, tripObj.groveGough[1] - 0.002],
  //   zoom: 15,
  //   speed: 0.8,
  //   curve: 2,
  // });

  // replace scooter options with parking options
  // rideOptions.fadeOut(300,function(){
  //   parkingChoices.fadeIn(0,function(){
  //     scootChoices.fadeOut(0);
  //     rideOptions.fadeIn(300);
  //   })
  // });

  // set up parking instructions


  //fade in help text
  stepTwoHelp.fadeIn(500);

});










var log = $('#log');
$('#test').click(function(){
  // tripObj.start.LngLat[2]
  // tripObj.rickshaw
  // tripObj.groveGough

  var lat1 = tripObj.start.LngLat[2][1];
  var lon1 = tripObj.start.LngLat[2][0];
  var lat2 = tripObj.groveGough[1];
  var lon2 = tripObj.groveGough[0];
  //console.log(type)  


  // ride
  //$.getJSON('https://valhalla.mapzen.com/route?json={"locations":[{"lat":'+lat1+',"lon":'+lon1+'},{"lat":'+lat2+',"lon":'+lon2+'}],"costing":"auto","costing_options":{"maneuver_penalty":30}}&api_key=mapzen-jQ1cw6W', function(result, textStatus, xhr) {
  // walking
  $.getJSON('https://valhalla.mapzen.com/route?json={"locations":[{"lat":'+lat1+',"lon":'+lon1+'},{"lat":'+lat2+',"lon":'+lon2+'}],"costing":"pedestrian","costing_options":{"transit":{"use_bus":"1.0","use_rail":"0.0","use_transfers":"0.3"},"pedestrian":{"walking_speed":"4.1"}}}&api_key=mapzen-jQ1cw6W', function(result, textStatus, xhr) {
  
  if (xhr && xhr.status) {
    var shapeString = result.trip.legs[0].shape;
    var coords = decode(shapeString);
    // console.log(coords);
    //var test = routeShapes.scootOne.walkFromGarage;
    //drawRouteOnMap(coords, 'walking1');
    for(var i = 0; i< coords.length; i++ ){
      // console.log(coords[i]);
      log.append('<p>['+coords[i][0]+','+coords[i][1]+'],</p>')
    }
  } 
 });


  
}); // end of click


// choose parking
var rideMode = $('.ride-mode');
rideMode.fadeOut(0);


var destContext = $('.dest .context');
var destDesc = $('.dest .description span');
var scootNum = $('#scoot-number');
var scootRng = $('#rr');
var battIcon = $('#rm-battery');

var startRideMode = function(parking){
  //parkingChoices.fadeOut(150);
  // console.log(parking)
  stepsAll.fadeOut(0);
  var time = moment().add(15, 'm').format('LT');
  $('#time').text(time);
  if(parking === "option-2"){
    destContext.text('Park on the street');
    destDesc.text('Street Parking');
  } else {
    destContext.text('Grove Garage');
    destDesc.text('Garage Parking');
  }

  if (routeShapes.choice === "one"){
    scootNum.text('512');
    scootRng.text('18');
    battIcon.css('color','#10d410');
    
  } else if (routeShapes.choice === "two"){
    scootNum.text('1108');
    scootRng.text('12');
    battIcon.css('color','#10d410');
  } else {
    scootNum.text('917');
    scootRng.text('4');
    battIcon.css('color','#fc0');
  }

  // disable the dest input 
  $('#destination').prop('disabled', true);
  appState = 'done';
  

  // open the ride mode drawer
  rideMode.fadeIn(500);
  animateMapBounds('trip-overview', 0, 1000);


  setTimeout(function(){
    changeStep(4);
  },500);
}

$('#option-1, #option-2').click(function(){
  if (parkingMove){
    // console.log('dont do it!!!');
    return;
  }
  // console.log('start ride mode');
  var id = $(this).attr('id');
  startRideMode(id);
  
});


// cost counter
var options = {
  useEasing : false, 
  useGrouping : true, 
  decimal : '.', 
  prefix : '', 
  suffix : '' 
};



$('.turn-on-btn').click(function(){
  window.alert("You've finished! Please answer the follow up questions—Thank you!")
});




// back button
backBtn.click(function(){
  if (appStep === 2){
    backBtn.fadeOut(0);
    inputFields.velocity('transition.bounceUpOut');
    
    stepTwoHelp.fadeOut(300, function(){
      changeStep(1);
      scootChoices.fadeIn(300);
    });
    

    // set step
    appStep = 1;
  } else if (appStep === 3){
    changeStep(2);
    resetToRed();
    map.flyTo({ center: tripObj.gps, speed: 1, zoom: 15 });
    loader.fadeOut(300);
    $('#destination').prop('disabled', false);
    $('#destination').val('');
    $('#destination').attr('placeholder','Choose a destination');
    $('#destination').text('');
    parkingChoices.fadeOut(300, function(){
      inputFields.velocity('transition.bounceDownIn');
      stepTwoHelp.fadeIn(300);

    });

    

  } else {

  }

  




});


}); // end of ready



