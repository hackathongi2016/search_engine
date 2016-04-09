'use strict';

describe('Controller: ResultslistCtrl', function () {

  // load the controller's module
  beforeEach(module('searchEngineApp'));

  var ResultslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResultslistCtrl = $controller('ResultslistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResultslistCtrl.awesomeThings.length).toBe(3);
  });
});
