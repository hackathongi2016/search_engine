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
                $scope.getLimitDays = function(travel){
                    return moment(travel.tra_planning_limit).diff(moment(),'d');
                };
            }
        };
    });
