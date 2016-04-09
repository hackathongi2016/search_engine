'use strict';

/**
 * @ngdoc service
 * @name searchEngineApp.travel
 * @description
 * # travel
 * Factory in the searchEngineApp.
 */
angular.module('searchEngineApp')
  .factory('travel', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
