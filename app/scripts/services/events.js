'use strict';

angular.module('nudgeWebAppApp')
  .factory('Events', ['$resource', function($resource) {

    return $resource( apiBase + 'events.php/events/:Id',
        { Id: '@Id' }, {
            query: {
                method: 'GET',
                params: {},
                isArray: false
            },
            get: {
                method: 'GET',
                params: { Id: '@Id' },
                isArray: false
            },
            save: {
                method: 'POST',
                params: {},
                isArray: false
            },
            update: {
                method: 'PUT',
                params: { Id: '@id' },
                isArray: false 
            },
            delete: {
                method: 'DELETE',
                params: { Id: '@Id' },
                isArray: false
            }

        } );

}]);

angular.module('nudgeWebAppApp')
  .factory('MyEvents', ['$resource', function($resource) {

    return $resource( apiBase + 'events.php/events/me',
        { Id: '@Id' }, {
            get: {
                method: 'POST',
                params: {},
                isArray: true
            }

        } );

}]);

  angular.module('nudgeWebAppApp')
  .factory('RSVP', ['$resource', function($resource) {

     return $resource( apiBase + 'events.php/events/rsvp/:Id',
        { Id: '@Id' }, {
            //request, invite, accept, cancel, get(blank id), all post
            get: {
                method: 'POST',
                params: { Id: '' },
                isArray: false
            },
            request: {
                method: 'POST',
                params: { Id: 'request' },
                isArray: false
            },
            invite: {
                method: 'POST',
                params: { Id: 'invite' },
                isArray: false
            },
            accept: {
                method: 'POST',
                params: { Id: 'accept' },
                isArray: false
            },
            cancel: {
                method: 'POST',
                params: { Id: 'cancel' },
                isArray: false
            }

        } );

}]);
