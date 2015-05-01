'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('nudgeWebAppApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

});
describe('Simple E2e Test', function()
{
    it('Should open the front page and check', function()
    {
        

    });
});
