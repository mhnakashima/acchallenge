/*
	Map Services
*/

app
	.factory('mapService', function($http, $q){

		var customMap;
		var markers = [];

		var getLocation = function(address){
			
			if(address == "" || address == undefined){				
				return $q.reject();
			}else{

				if(address == "home"){
					address = "";
				}

				return $q(function(resolve, reject){
					$http.get(' http://freegeoip.net/json/' + address)
						 .then(
							 function(result){
								if(result.data){
									resolve(result.data);
								}else{
									reject(reject.data);
								}
							 },
							 function(err){
							 	reject(err);
							 }
						 )
				});
			}
		}

		var createMap = function(mapElement, position){
			
		}

		

		var resetMap = function(element){

		}

		var setMarkers = function(value){
			markers.push(value);
		}

		var getMarkers = function(value){
			return markers;
		}

		return {
			getLocation: getLocation,
			createMap: createMap,
			resetMap: resetMap,
			setMarkers: setMarkers,
			getMarkers: getMarkers
		}
	})