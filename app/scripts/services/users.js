angular.module('nudgeWebAppApp')
  .factory('Login', ['$resource', function($resource) {

    return $resource( apiBase + 'users.php/login',
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

    return $resource( apiBase + 'users.php/join',
        { }, {
            submit: {
                method: 'POST',
                params: {},
                isArray: false
            }

        } );

}]);

angular.module('nudgeWebAppApp')
  .factory('User', ['$resource', function($resource) {

    return $resource( apiBase + 'users.php/user/:Id',
        { Id: '@Id' }, {
            delete: {
                method: 'DELETE',
                params: { Id: '' },
                isArray: false
            },
            update: {
                method: 'PUT',
                params: { Id: '' },
                isArray: false
            },
            get: {
                method: 'GET',
                params: { Id: '@Id' },
                isArray: false
            }

        } );

}]);

angular.module('nudgeWebAppApp')
  .factory('StringSearch', ['$resource', function($resource) {

    return $resource( apiBase + 'users.php/users/string',
        {}, {
            search: {
                method: 'POST', 
                params: {},
                isArray: false
            }
        } );

}]);
