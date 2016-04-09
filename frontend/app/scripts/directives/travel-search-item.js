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
      template: '<div><span md-highlight-text="ctrl.searchText" md-highlight-flags="^i">{{item.display}}</span></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the travelSearchItem directive');
      }
    };
  });
