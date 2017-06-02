/*
	Map Controller
*/
app.
	controller('MapController', function(mapService, NgMap){
		
		var map = this;
		
		map.title = "Geolocation";
		map.urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
		map.latitude = 0;
		map.longitude = 0;
		map.markers = [];

		map.lookForHost = function(address){

			mapService.getLocation(address)
									 .then(
									 	function(data){

									 		map.markers = [];
									 		map.markers.push({latitude: data.latitude, longitude: data.longitude})


									 		map.latitude  = data.latitude;
									 		map.longitude = data.longitude;

									 		NgMap.getMap().then(function(map){
									 			console.log(map);
									 			console.log(map.getCenter().lat());
									 			console.log(map.getCenter().lng());
									 		})
									 	},
									 	function(err){
									 		//resetar o mapa
									 		map.latitude = "";
									 		map.longitude = "";
									 		map.markers = [];
									 	}
									 )
		}

		map.lookForHost("home");

	})