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

angular.module('nudgeWebAppApp')
  .factory('Join', ['$resource', function($resource) {

    return $resource( apiBase + 'join', 
        { }, { 
            submit: { 
                method: 'POST', 
                params: {}, 
                isArray: false 
            }
            
        } );

}]);