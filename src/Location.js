
"use strict";

let $location = undefined;
let monadLanguageService = undefined;

export default class Location {

    constructor(_$location_, _monadLanguageService_) {
        $location = _$location_;
        monadLanguageService = _monadLanguageService_;
    }

    path(url, ...args) {
        $location.path(this.make(url), ...args);
    }

    search(...args) {
        return $location.search(...args);
    }

    make(url) {
        url = url.replace(/^\//, '');
        return `${this.language}/${url}`;
    }

    get language() {
        return monadLanguageService.current || monadLanguageService.list[0];
    }

};

Location.$inject = ['$location', 'monadLanguageService'];

