angular.module('nudgeWebAppApp')
  .factory('Login', ['$resource', function($resource) {

    return $resource( apiBase + 'login', 
        { }, { 
            submit: { 
                method: 'POST', 
                params: {}, 
                isArray: false 
            }
            
        } );

}]);