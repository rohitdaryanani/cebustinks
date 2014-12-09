'use strict';

(function () {

    var CheckLocationCtrl = function ( LocationFactory, $q ) {
        var vm    = this;
        vm.toggle = true;

        // getting current location and generating canvas for googlemaps
        function success(position) {
            var mapcanvas          = document.createElement('div');
            mapcanvas.id           = 'mapcontainer';
            mapcanvas.style.height = '400px';
            mapcanvas.style.width  = '600px';

            document.querySelector('article').appendChild(mapcanvas);

            var coords     = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            vm.coordinates = coords;

            var options = {
                zoom: 16,
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

            var area = new google.maps.Circle({
                center:coords,
                radius:200,
                strokeColor:'#0000FF',
                strokeOpacity:0.8,
                strokeWeight:2,
                fillColor:'#0000FF',
                fillOpacity:0.4
            });

            area.setMap(map);

            vm.toggle = true;
            console.log(vm.toggle);

        }

        // check for geolocation
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(success);
        } else {
          window.alert('Geo Location is not supported');
        }

        vm.addPlace = function () {
            LocationFactory.setLocation( vm.coordinates );
        };

        vm.test = function () {
            LocationFactory.getLocation();
        };

    };

angular.module('cebuStinks')
    .controller('CheckLocationCtrl', CheckLocationCtrl);

})();
