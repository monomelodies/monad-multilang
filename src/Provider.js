
"use strict";

import Service from './Service';

let availableLanguages = ['en'];

export default class Provider {

    constructor() {
        this.$get = ['gettextCatalog', gettextCatalog => new Service(gettextCatalog, availableLanguages)];
    }

    setAvailableLanguages(languages) {
        availableLanguages = languages;
    }

};

