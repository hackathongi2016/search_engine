'use strict';

describe('Controller: ResultsJoinedCtrl', function () {

  // load the controller's module
  beforeEach(module('searchEngineApp'));

  var ResultsJoinedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResultsJoinedCtrl = $controller('ResultsJoinedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResultsJoinedCtrl.awesomeThings.length).toBe(3);
  });
});
