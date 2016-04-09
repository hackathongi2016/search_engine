'use strict';

/**
 * @ngdoc directive
 * @name searchEngineApp.directive:travelResultsList
 * @description
 * # travelResultsList
 */
angular.module('searchEngineApp')
    .directive('travelResultsList', function () {
        return {
            templateUrl : '/scripts/directives/simple_result.html',
            restrict    : 'E',
            link        : function postLink(scope, element, attrs) {

            },
            controller  : function ($scope) {
                $scope.calculateNumDays = function(travel){
                    return moment(travel.tra_date).add(travel.tra_num_days, 'd').format('YYYY-MM-DD');
                };
            }
        };
    });
