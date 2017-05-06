
"use strict";

import 'angular-gettext';
import Service from './Service';

export default angular.module('monad.multilang', ['monad.cms', 'gettext'])
    .service('monadLanguageService', Service)
    .name
    ;

