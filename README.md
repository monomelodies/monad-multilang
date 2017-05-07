# monad-multilang
Multilanguage support for your Monad CMS.

## Installation

### Using NPM
```sh
$ npm install --save monad-multilang
```

`require` the new module and add it as a dependency:

```js
require('monad-cms');
require('monad-multilang');

angular.module('myAwesomeAdmin', ['monad-cms', 'monad-multilang']);
```

### Using Bower
```sh
$ bower install --save monad-multilang
```

Load the script (optionally minified via `.min.js`) _after_ Monad but _before_
your own custom code:

```html
<script src="bower_components/monad/dist/monad.min.js"></script>
<script src="bower_components/monad-multilang/dist/monad-multilang.min.js"></script>
<script src="/path/to/myAwesomeAdmin.js"></script>
```

...and add the module as a dependency in your bundle:

```js
angular.module('myAwesomeAdmin', ['monad-cms', 'monad-multilang']);
```

### Styles
This plugin defines no additional styles.

## Usage
This module overrides a few core Monad packages and adds actual functionality to
them.

The `monadLanguageService` supplied by this module actually _does_ something,
namely set or get the current language. It can (should!) also be configured via
a hook to `config` in your custom admin code:

```js
angular.module('myAwesomAdmin', ['monad-cms', 'monad-multilang'])
    .config(['monadLanguageServiceProvider', monadLanguageServiceProvider => {
        monadLanguageServiceProvider.setAvailableLanguages(['en', 'nl', 'fr', 'de']);
    }]);
```

The above example sets the available languages to English, Dutch, French and
German, with English being the default (as it's mentioned first).

It also overrides the `monadLocation` service. This is still a bit of work in
progress, but the idea is that all calls are auto-prefixed with the current
language, the assumption being that `/:language/other/path/parts/` is the sanest
default for a multilingual admin. This way other plugin authors needn't worry
about whether or not they're in a multilang environment, as long as they utilise
the `make` method on `monadLocation` (`path` etc. use it internally too).

