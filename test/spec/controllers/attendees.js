'use strict';

describe('Controller: AttendeesCtrl', function () {

  // load the controller's module
  beforeEach(module('nudgeWebAppApp'));

  var AttendeesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AttendeesCtrl = $controller('AttendeesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
