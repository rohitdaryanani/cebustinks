'use strict';

(function () {

	angular.module('cebuStinks').factory('map', MapService);

	function MapService($http, $q, $timeout) {

		return {
			// needs the element for the map
			// and the initial position
			layoutMap : function ( el, pos ) {
				var df = $q.defer();

				// Add a one second delay for map processing
				$timeout(function () {
					// get initial coords based on the given position
					var coords = new google.maps.LatLng(pos.latitude, pos.longitude);

					var options = {
						zoom           : 15,
						center         : coords,
						mapTypeControl : false,
						mapTypeId      : google.maps.MapTypeId.ROADMAP,

						navigationControlOptions: {
							style : google.maps.NavigationControlStyle.SMALL
						}
					};

					var map = new google.maps.Map( el, options);

					// let's add them markers and shit
					new google.maps.Marker({
						position : coords,
						map      : map,
						title    : 'You are here!'
					});

					// create a fucking circle
					var area = new google.maps.Circle({
						center:coords,
						radius:200,
						strokeColor:'#0000FF',
						strokeOpacity:0.8,
						strokeWeight:2,
						fillColor:'#0000FF',
						fillOpacity:0.4
					});

					// you know this shit already
					// lol :D
					area.setMap( map );

					df.resolve(123);
				}, 1000);

				// return a promise object
				return df.promise;
			}
		};

	}

})();
