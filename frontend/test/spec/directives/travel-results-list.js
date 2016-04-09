'use strict';

describe('Directive: travelResultsList', function () {

  // load the directive's module
  beforeEach(module('searchEngineApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<travel-results-list></travel-results-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the travelResultsList directive');
  }));
});
