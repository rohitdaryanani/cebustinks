'use strict';

(function () {

    var LocationFactory = function ( $http ) {
        var factory   = {};
        var locations = [];

        // factory.getAllLocation = function () {
        //     return $http.get('http://rest.learncode.academy/api/johnbob/friends');
        // };

        factory.setLocation = function ( location ) {
            locations.push(location);
            console.log( location );
        };

        factory.getLocations = function () {
            console.log(locations);
            return locations;
        };

        return factory;
    };

    angular.module( 'cebuStinks' )
        .factory( 'LocationFactory', LocationFactory);

})();
