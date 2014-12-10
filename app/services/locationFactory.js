'use strict';

(function () {

    var LocationFactory = function ( $http ) {
        var factory   = {};
        var locations = [
            {
                B      : 123.89596819999997,
                k      : 10.3100297,
                rating : 0
            },
            {
                B      : 123.89596819999997,
                k      : 10.3100297,
                rating : 4
            },
            {
                B      : 123.89596819999997,
                k      : 10.3100297,
                rating : 6
            },
            {
                B      : 123.89596819999997,
                k      : 10.3100297,
                rating : 2
            }
        ];

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
