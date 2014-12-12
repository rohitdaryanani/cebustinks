(function () {
	'use strict';

	angular.module( 'cebuStinks' )
		.controller( 'StinkController', [ 'map', '$scope', function ( map, $scope ) {
			var vm    = this;
			vm.hidden = true;

			// get coordinates
			navigator.geolocation.getCurrentPosition( function ( pos ) {
				var coords     = pos.coords;
				var mapElement = document.querySelector( '#map' );

				// set additional state info
				mapElement.innerText = 'Fetching google map data...';

				map.layoutMap( mapElement, coords ).then( function ( d ) {
					vm.hidden = false;
				} );

			} );

		} ] );

})();
