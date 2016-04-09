'use strict';

describe('Controller: ResultsmapCtrl', function () {

  // load the controller's module
  beforeEach(module('searchEngineApp'));

  var ResultsmapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResultsmapCtrl = $controller('ResultsmapCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResultsmapCtrl.awesomeThings.length).toBe(3);
  });
});
