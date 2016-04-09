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

        $scope.getLimitDays = function(travel){
            return moment(travel.tra_planning_limit).diff(moment(),'d');
        };

        me.dynMarkers = [];
        NgMap.getMap().then(function (map) {
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
