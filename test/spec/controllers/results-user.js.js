'use strict';

describe('Controller: ResultsUserJsCtrl', function () {

  // load the controller's module
  beforeEach(module('searchEngineApp'));

  var ResultsUserJsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResultsUserJsCtrl = $controller('ResultsUserJsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResultsUserJsCtrl.awesomeThings.length).toBe(3);
  });
});
