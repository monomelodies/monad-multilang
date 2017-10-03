
"use strict";

import 'angular-gettext';
import Provider from './Provider';
import Location from './Location';
import '../lib/templates';

export default angular.module('monad.multilang', ['monad.cms', 'monad.multilang.templates', 'gettext'])
    .provider('monadLanguageService', Provider)
    .service('monadLocation', Location)
    .config(['$routeProvider', $routeProvider => {
        $routeProvider.
            when('/', {
                template: '<noop></noop>',
                controller: ['monadLocation', monadLocation => monadLocation.path('/')]
            });
    }])
    .run(['$rootScope', 'monadLanguageService', ($rootScope, monadLanguageService) => {
        $rootScope.$on('$routeChangeSuccess', (event, target) => {
            if (target.params.language && target.params.language != monadLanguageService.current) {
                monadLanguageService.current = target.params.language;
            }
        });
    }])
    .name
    ;

