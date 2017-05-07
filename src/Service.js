
"use strict";

let current = undefined;
let gettextCatalog = undefined;
let languages = undefined;

/**
 * Service handling Monad interface languages.
 */
export default class Service {

    /**
     * Class constructor.
     *
     * @param object gettextCatalog Catalog service so a language change sets
     *  the new language.
     * @param array availableLanguages Array of available languages, as string.
     * @return void
     */
    constructor(_gettextCatalog_, availableLanguages) {
        gettextCatalog = _gettextCatalog_;
        languages = availableLanguages;
    }

    /**
     * Virtual property returning the current language.
     *
     * @return string Current language identifier.
     */
    get current() {
        return current;
    }

    /**
     * Virtual setter for the current language. The new language must be
     * available to the application.
     *
     * @param string lang The language identifier to set.
     * @return void
     */
    set current(lang) {
        if (lang == current) {
            return;
        }
        if (languages.indexOf(lang) == -1) {
            throw `Language "${lang}" is unavailable, sorry.`;
        }
        current = lang;
        gettextCatalog.setCurrentLanguage(current);
    }

    /**
     * Virtual property getting the list of defined languages.
     *
     * @return array Array of languages available to this application.
     */
    get list() {
        return languages;
    }

};

Service.$inject = ['gettextCatalog'];

