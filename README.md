# monad-multilang
Support for multilanguage admin in Monad CMS

## Installation

### NPM
```sh
npm install --save monad-multilang
```

```js
var monad = require('monad-cms');
var monadMultilang = require('monad-multilang');

var admin = angular.module('myAwesomeAdmin', [monad, monadMultilang]);
```

### Bower
```sh
npm install --save monad-multilang
```

```html
<!-- Optionally use .min.js for production: -->
<script src="/path/to/monad.js"></script>
<script src="/path/to/monad-multilang.js"></script>
<script src="/path/to/your/admin/bundle.js"></script>
```

```js
var admin = angular.module('myAwesomeAdmin', ['monad-cms', 'monad-multilang']);
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

