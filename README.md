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

## Usage

