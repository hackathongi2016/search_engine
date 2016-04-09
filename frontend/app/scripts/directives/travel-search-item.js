'use strict';

/**
 * @ngdoc directive
 * @name searchEngineApp.directive:travelSearchItem
 * @description
 * # travelSearchItem
 */
angular.module('searchEngineApp')
  .directive('travelSearchItem', function () {
    return {
      scope: {
            highlight: "=",
            item: "="
      },
      templateUrl: '/scripts/directives/travel-search-item.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the travelSearchItem directive');
      }
    };
  });
