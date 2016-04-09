'use strict';

/**
 * @ngdoc function
 * @name searchEngineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the searchEngineApp
 */
angular.module('searchEngineApp')
  .controller('MainCtrl', function (travelsList) {
      this.travelsList = travelsList;
  });
