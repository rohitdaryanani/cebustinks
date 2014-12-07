'use strict';

(function () {

    var ViewAllLocationCtrl = function ( LocationFactory, $q ) {
        var vm    = this;
        var defer = $q.defer();

            function geoSuccess(position) {
                var latitude  = position.coords.latitude;
                var longitude = position.coords.longitude;

                vm.currentLocation = latitude + ' ' + longitude;
                vm.imgUrl          = 'https://maps.googleapis.com/maps/api/staticmap?center=' + latitude + ',' + longitude + '&zoom=13&size=300x300';

                console.log(latitude + ' ' + longitude);
            }

            function geoError() {
                window.alert('Sorry, no position available.');
            }

            var geoOptions = {
                enableHighAccuracy: true,
                maximumAge        : 30000,
                timeout           : 27000
            };

            vm.toggle = 'false';

            defer.promise
                .then( function () {
                    navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);
                })
                .then( function () {
                    vm.toggle = 'true';
                });

            vm.findMe = function () {
                defer.resolve();
            };


    };

angular.module('cebuStinks')
    .controller('ViewAllLocationCtrl', ViewAllLocationCtrl);

})();
