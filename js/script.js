/*jshint devel:true */
var stateEngine;
var map;
var directions;
var changeRoute;
// on ready
$(window).on('load', function() {



var destination = [-122.44590863123258, 37.767478083760864];
var nearbyGarage = [-122.4471046599675, 37.77094470398184];
var startPos = [-122.4729874800642, 37.763923871626076];
var gpsCoords = [-122.47455778282995, 37.763678651375386];
var padding = 0.001; // minus to push up

mapboxgl.accessToken = 'pk.eyJ1Ijoic2Nvb3R0ZWNoIiwiYSI6IlBMTjNqVTgifQ.r8a_cZRmGF_GIOKIKaK1dA';
// ***********************************************
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/scoottech/cj9fxafpl8gmx2spf6exr13dg', 
	center: [startPos[0],startPos[1] - padding], 
	zoom: 15,
	minZoom: 11,
	dragRotate: false,
});

var destInput = $('#destination');
var backBtn = $('.drawer-top-bar span');
var drawer = $('.scoot-options-container');
var tripBar = $('#trip-bar');
var actionBtn = $('#reserve-btn');
var title = $('#title');
var titleText = $('#title h1');
var garageDrawer = $('#garage');
var garageClicker = $('#clicker');

//drawer.slideUp(0);
tripBar.velocity("slideUp", { duration: 250 })
garageDrawer.velocity("slideUp", { duration: 250 })


var removeSplash = function(){
	$('#splash').fadeOut(300);
}


// layout variables for symbols
var scootLayout = {
		"icon-image":'scoot-batt-high',
		"icon-size": {"stops": [
            [14, 0.4],
            [16, 1]
        ]}
}
var garageLayout = {
		"icon-image":'pickup-inactive',
		"icon-size": {"stops": [
            [13, 0.4],
            [15, 1],
            [18, 1.5],
        ]}
}
var destLayout = {
		"icon-image":'star',
		"text-field":'Your Destination',
		'text-size': 12,
		'text-anchor': 'bottom',
		'text-offset': {"stops": [
            [14, [0, 2]],
            [16, [0, 5]]
        ]},
		"icon-size": {"stops": [
            [14, 0.4],
            [16, 1]
        ]}

}

var gpsLayout = {
		"icon-image":'gps',
		"icon-size": {"stops": [
            [14, 0.3],
            [16, 0.8]
        ]}
}


var createNewLayer = function(id,type,coords,layout){
	var feature = turf.featureCollection( [turf.point(coords)] );	
	map.addLayer({
			"id": id,
			"type": type,
			"source": {
			    "type": "geojson",
			    "data": feature,
			},
			'layout': layout
	});
}

var setupMapLayers = function(){

	// create scoot, garage, and destination, GPS
	createNewLayer('startScoot','symbol',startPos,scootLayout);
	createNewLayer('garage','symbol',nearbyGarage,garageLayout);
	createNewLayer('destination','symbol',destination,destLayout);
	createNewLayer('gps','symbol',gpsCoords,gpsLayout);
}



stateEngine = {
	'reserveDrawer': false,
	'rideMode': false,
	'walkingPath': false,
	'garageSelected': false,
}

var openReserveDrawer = function(){
	drawer.velocity("slideDown", { duration: 800, easing: [ 250, 18 ]})
	stateEngine.reserveDrawer = true;
	map.setLayoutProperty('startScoot', 'icon-size', {"stops": [ [14, 0.6], [16, 1.2] ] });
};
var closeReserveDrawer = function(){
	drawer.velocity("slideUp", { duration: 200})
	map.setLayoutProperty('startScoot', 'icon-size', {"stops": [ [14, 0.4], [16, 1] ] });
	map.setLayoutProperty('startScoot', 'icon-image','scoot-batt-high');
	stateEngine.reserveDrawer = false;
	updateForReservation();
};
var startReservation = function(){
	stateEngine.rideMode = true;
	updateForRideMode();
};

var updateForRideMode = function(){
	tripBar.velocity("slideDown", { duration: 500 })
	actionBtn.velocity("callout.pulse",{delay:500}).text('turn on');
	title.velocity({backgroundColor:'#ccc'},{ duration: 500 });
	// setTimeout(function(){
	// 	titleText.velocity({"scaleX":0,"scaleY":0},{
	// 		complete:function(){
	// 			titleText.text('Park at a garage to save money!');
	// 			titleText.velocity({"scaleX":1,"scaleY":1});
	// 			setTimeout(function(){
	// 				titleText.velocity({"scaleX":0,"scaleY":0},{
	// 					complete:function(){
	// 						title.velocity("slideUp", { duration: 500,delay:500 })
	// 					}
	// 				});

	// 			},2500);
	// 		}
	// 	})
	// },2500);
	titleText.text("Reserved! Billing starts in 15 minutes");
	map.setLayoutProperty('startScoot', 'icon-image','ride-mode-scoot');
	map.setLayoutProperty('startScoot', 'icon-size', {"stops": [ [14, 0.8], [16, 1] ] });
	map.setLayoutProperty('garage', 'icon-image','parking-inactive');
	//map.flyTo({'center':startPos,'zoom':15, 'speed': 3})
	// update grace period
	$('#info-2').text('Billing starts')
	$('#cost').text('$4.00');
	var time = moment().add(15, 'm').format('LT');
	$('#timer').text(time)


};
var updateForReservation = function(){
	tripBar.velocity("slideUp", { duration: 200 })
	actionBtn.text('Reserve');
	title.velocity({backgroundColor:'#fff'},{ duration: 0 });
	titleText.text("Street Parked Scoot");
	map.setLayoutProperty('startScoot', 'icon-image','scoot-batt-high');
	map.setLayoutProperty('startScoot', 'icon-size', {"stops": [ [14, 0.4], [16, 1] ] });
	
	// update grace period
	$('#info-2').text('Walking Dist')
	$('#cost').text('$3 - 4');
	//var time = moment().add(15, 'm').format('LT');
	$('#timer').text('1 min')
	stateEngine.rideMode = false;
	map.setLayoutProperty('garage', 'icon-image','pickup-inactive');
}

var openGarageDrawer = function(){
	garageDrawer.velocity("slideDown", { duration: 250 })
}

map.on('load', function() {
	removeSplash();
	setupMapLayers();

	map.on('click', function (e) {        
		var clickCenter = [e.lngLat.lng, e.lngLat.lat]
		var topFeature = map.queryRenderedFeatures(e.point)[0];
		var id = topFeature.layer.id
		console.log(topFeature, id)
		if(id === 'garage' && stateEngine.rideMode === true){
			openGarageDrawer();
		}
		if(id === 'startScoot' && stateEngine.reserveDrawer === false && stateEngine.rideMode === false ){
			openReserveDrawer();
		}
		//if()
	});

	

});




$('.location-btn').click(function(){
	map.flyTo({'center':[gpsCoords[0],gpsCoords[1] - padding],'zoom':15})
});
$('#close-drawer').click(function(){
	if(stateEngine.rideMode){

		if (window.confirm('Do you want to cancel your reservation and start again?')) { 
 		 closeReserveDrawer()
		}
		
	} else {
		closeReserveDrawer()
	}
	
});
actionBtn.click(function(){
	if(!stateEngine.rideMode){
		startReservation();
	} else {
		window.alert('turned on scoot');
	}
	
});

garageClicker.click(function(){
	console.log('hey!');
	garageDrawer.velocity("slideUp", { duration: 250 });
	$('#cost').text('$3.00');
});



// old 

// backBtn.click(function(){

//   console.log(tripObj.status);
//   if(tripObj.status === 'searching'){

//     //fmasDrawer.slideUp(500);
//     topBar.slideUp(150);
//     fmasDrawer.removeClass('expanded-drawer');
//     tripObj.status = 'map';
//     changeRoute('clear');



//   } else {
//     $('#map').addClass('full');
//     setTimeout(function(){
//       console.log('resize that shit');
//       map.resize();
//     },500);

//     rideOptions.slideUp(200);
//     fmasDrawer.addClass('expanded-drawer');
//     destInput.val('').attr('placeholder','Enter a destination').focus();
//     tripObj.status = 'searching';
//   }
//   window.location = '#';

// });



// // 
// //fmasDrawer.slideUp(0);
// rideOptions.slideUp(0);


// $('.desination-container').click(function(){
//   if(fmasDrawer.hasClass('expanded-drawer')){
//     return;
//   }
//   fmasDrawer.addClass('expanded-drawer');
//   rideOptions.slideUp(300);
//   if($(this).hasClass('desination-container') ){
//     $(this).find('input').val('').attr('placeholder','Enter a destination').focus();
//   } else {
//     $(this).find('input').val('').attr('placeholder','Enter your location').focus();
//   }
//   tripObj.status = 'searching';
//   $('#map').addClass('full');
//     setTimeout(function(){
//       console.log('resize that shit');
//       map.resize();
//        $(window).scrollTop(0);
//       // scroll to top
//     },250);

// });

// $('input.location').blur(function(){
//   var val = $(this).val();
//   if(val === ''){
//     $(this).attr('placeholder','Current Location');
//   }
// })

// // autocomplete
// var parent = $('.search-results-container');
// //parent.fadeOut(0);
// var makeSearchList = function(searchObj){

//   parent.fadeIn(300);
//   parent.children().remove();
//   var lngLatArray = [];
//  for(var i = 0; i< searchObj.features.length; i++ ){
//   var el = searchObj.features[i];
//   //console.log(el);
//   var type = el.properties.layer;
//   var name = el.properties.name;
//   var street = el.properties.street
//   var city = el.properties.locality;
//   var state = el.properties.region_a;
//   var lnglat = el.geometry.coordinates;
//   lngLatArray.push(lnglat);
//   //console.log(type, name, street);
//   if (type === 'venue'){
//     if(street === undefined){
//       //parent.append( '<div class="result-item"><i class="icon ion-location"></i><div class="result-area"><strong>'+name+'</strong><span>'+city+', '+state+'</span></div></div>');
//       parent.append(
//         '<div class="result-item"><i class="icon ion-location"></i><div class="result-area"><strong>'+name+'</strong><span>'+city+', '+state+'</span></div></div>');

//     } else {
//       parent.append( '<div class="result-item"><i class="icon ion-location"></i><div class="result-area"><strong>'+name+', '+street+'</strong><span>'+city+', '+state+'</span></div></div>');
//     }

//   } else {
//     parent.append( '<div class="result-item"><i class="icon ion-location"></i><div class="result-area"><strong>'+name+'</strong><span>'+city+', '+state+'</span></div></div>');
//   }

//   } // end of for loop
//   tripObj.tripOptions = lngLatArray;
//   console.log(tripObj);

// }

// var updateResults = function(){
//   var text = $('#destination').val();
//   $.getJSON("https://search.mapzen.com/v1/search/?api_key=mapzen-jQ1cw6W&boundary.rect.min_lat=37.737598&boundary.rect.min_lon=-122.516613&boundary.rect.max_lat=37.813717&boundary.rect.max_lon=-122.369156&text="+text+"&size=4&boundary.country=USA&layers=venue,address", function(result, textStatus, xhr) {
//     if (xhr && xhr.status) {
//       console.log(result);
//       makeSearchList(result);
//     } 
// });

// };



// var intervalId;

// destInput.on('keydown', _.debounce(updateResults, 250 ));


// // get addy from results
// $('.search-results-container').on('click',".result-item", function(){
//   var i = $(this).index();
//   lngLatChoice = tripObj.tripOptions[i];
//   tripObj.theSpot = lngLatChoice
//   var choiceText = $(this).find('strong').text();
//   destInput.val(choiceText)
//   scootChoices.flickity( 'select', 0 );
//   tripObj.status = 'ride-choices';
//   $('#map').addClass('full');


//   parent.slideUp(300, function(){
//     fmasDrawer.removeClass('expanded-drawer');


//     setTimeout(function(){
//       rideOptions.slideDown(300,function(){
//         $('#map').removeClass('full');
//         topBar.slideDown(150);

//       });
//     },1000);

//     setTimeout(function(){
//       map.resize();
//       changeRoute(0, lngLatChoice);  
//     },1500);



//   });


// });




}); // end of ready





