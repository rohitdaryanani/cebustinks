'use strict';

(function () {

    var LocationFactory = function ( $http ) {
           var factory = {};

           factory.getAllLocation = function () {
                return $http.get('http://rest.learncode.academy/api/johnbob/friends');
           };

           return factory;
    };

    angular.module( 'cebuStinks' )
        .factory( 'LocationFactory', LocationFactory);

})();
