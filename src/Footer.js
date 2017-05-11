
"use strict";

import FooterCtrl from 'monad-cms/components/Footer/Controller';

let monadLanguageService = undefined;

export default class Controller extends FooterCtrl {

    constructor(_monadLanguageService_, ...args) {
        super(...args);
        monadLanguageService = _monadLanguageService_;
    }

    get language() {
        return monadLanguageService.current || 'en';
    }

    get languages() {
        return monadLanguageService.list || ['en'];
    }

};

Controller.$inject = ['monadLanguageService'].concat(FooterCtrl.$inject);

