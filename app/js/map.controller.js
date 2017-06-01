/*
	Map Controller
*/
app.
	controller('MapController', function(mapService){
		
		var map = this;
		
		map.title = "sgf test";
		map.urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

		map.lookForHost = function(address){

			mapService.getLocation(address)
									 .then(
									 	function(data){
									 		map.latitude  = data.latitude;
									 		map.longitude = data.longitude;
									 	},
									 	function(err){
									 		mapService.getLocation('');		

									 		console.log("?")							 		
									 	}
									 )
		}

	})