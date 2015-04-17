'use strict';

angular.module('nudgeWebAppApp')
  .factory('Friends', ['$resource', function($resource) {

    return $resource( apiBase + 'friend/:Id',
        { Id: '@Id' }, {
            query: {
                method: 'POST',
                params: { Id: '' },
                isArray: false
            },
            add: {
                method: 'POST',
                params: { Id: 'add' },
                isArray: false
            },
            remove: {
                method: 'POST',
                params: { Id: 'remove' }, 
                isArray: false
            },
            accept: {
                method: 'POST',
                params: { Id: 'accept' },
                isArray: false
            },
            decline: {
                method: 'POST',
                params: { Id: 'decline' },
                isArray: false
            }

        } );

}]);
