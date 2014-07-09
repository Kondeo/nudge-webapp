'use strict';

angular.module('nudgeWebAppApp')
  .factory('Events', ['$resource', function($resource) {

    return $resource( apiBase + 'events/:Id', 
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
