'use strict';

(function () {

    var ViewAllLocationCtrl = function ( LocationFactory ) {
        var vm = this;

        LocationFactory.getAllLocation()
            .success( function (locations) {
                vm.locations = locations;
                console.log(vm.locations);
            })
            .error(function (data, status) {
              console.log(data);
              console.log(status);
            });

            function geoSuccess(position) {
                var latitude  = position.coords.latitude;
                var longitude = position.coords.longitude;

                vm.currentLocation = latitude + ' ' + longitude;
                vm.imgUrl          = 'http://maps.googleapis.com/maps/api/staticmap?center=' + latitude + ',' + longitude + '&zoom=13&size=300x300&sensor=false';

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

            vm.findMe = function () {
                navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);
                vm.toggle = 'true';
            };


    };

angular.module('cebuStinks')
    .controller('ViewAllLocationCtrl', ViewAllLocationCtrl);

})();
