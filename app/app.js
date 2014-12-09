'use strict';

(function () {
    angular
        .module('cebuStinks', ['ngRoute'])
        .config(function ( $routeProvider ) {
            $routeProvider
                .when( '/checklocation', {
                    controller  : 'CheckLocationCtrl as vm',
                    templateUrl : '/app/views/view-all.html'
                })
                .otherwise({
                    redirectTo : '/'
                });
        });
})();
