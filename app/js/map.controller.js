/*
	Map Controller
*/
app.
	controller('MapController', function(mapService, NgMap){
		
		var map = this;
		
		map.title = "sgf test";
		map.urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

		map.lookForHost = function(address){

			mapService.getLocation(address)
									 .then(
									 	function(data){
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
									 	}
									 )
		}

	})