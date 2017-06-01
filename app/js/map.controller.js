/*
	Map Controller
*/
app.
	controller('MapController', function(mapService){
		
		var map = this;
		map.title = "sgf test";

		map.lookForHost = function(address){

			mapService.getLocation(address)
									 .then(
									 	function(data){
									 		map.latitude  = data.latitude;
									 		map.longitude = data.longitude;
									 	},
									 	function(err){
									 		mapService.getLocation('');
									 		console.log(err);
									 	}
									 )
		}

	})