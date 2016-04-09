'use strict';

/**
 * @ngdoc function
 * @name searchEngineApp.controller:ResultsMapCtrl
 * @description
 * # ResultsMapCtrl
 * Controller of the searchEngineApp
 */
angular.module('searchEngineApp')
    .controller('ResultsMapCtrl', function ($scope, NgMap) {

        var me = this;

        $scope.positions = me.positions = [
            [54.779951, 9.334164], [47.209613, 15.991539],
            [51.975343, 7.596731], [51.97539, 7.596962],
            [47.414847, 8.23485], [47.658028, 9.159596],
            [47.525927, 7.68761], [50.85558, 9.704403],
            [54.320664, 10.285977], [49.214374, 6.97506],
            [52.975556, 7.596811], [52.975556, 7.596811],
            [52.975556, 7.596811], [52.975556, 7.596811],
            [52.975556, 7.596811], [52.975556, 7.596811],
            [52.975556, 7.596811], [52.975556, 7.596811],
            [52.975556, 7.596811], [52.975556, 20.596811]];

        me.dynMarkers = [];
        NgMap.getMap().then(function(map) {
            var bounds = new google.maps.LatLngBounds();
            for (var k in map.customMarkers) {
                var cm = map.customMarkers[k];
                me.dynMarkers.push(cm);
                bounds.extend(cm.getPosition());
            }

            me.markerClusterer = new MarkerClusterer(map, me.dynMarkers, {});
            map.setCenter(bounds.getCenter());
            map.fitBounds(bounds);
        });
    });
