'use strict';

(function () {

    var ViewAllLocationCtrl = function ( LocationFactory, $q ) {
        var vm    = this;
        var defer = $q.defer();

        function success(position) {
            var mapcanvas          = document.createElement('div');
            mapcanvas.id           = 'mapcontainer';
            mapcanvas.style.height = '400px';
            mapcanvas.style.width  = '600px';

            document.querySelector('article').appendChild(mapcanvas);

            var coords     = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            vm.coordinates = coords;

            var options = {
                zoom: 15,
                center: coords,
                mapTypeControl: false,
                navigationControlOptions: {
                  style: google.maps.NavigationControlStyle.SMALL
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById('mapcontainer'), options);

            var marker = new google.maps.Marker({
                position: coords,
                map: map,
                title:'You are here!'
            });
        }

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(success);
        } else {
          window.alert('Geo Location is not supported');
        }

        vm.addPlace = function () {
            console.log( vm.coordinates );
        };

    };

angular.module('cebuStinks')
    .controller('ViewAllLocationCtrl', ViewAllLocationCtrl);

})();
