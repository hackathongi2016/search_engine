'use strict';

describe('Controller: ResultsUserCtrl', function () {

  // load the controller's module
  beforeEach(module('searchEngineApp'));

  var ResultsUserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResultsUserCtrl = $controller('ResultsUserCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResultsUserCtrl.awesomeThings.length).toBe(3);
  });
});
