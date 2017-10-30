# angular-ys-service-keyboard

[![TravisCI Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependencies][dependencies-image]][dependencies-url]
[![dev-dependencies][dev-dependencies-image]][dev-dependencies-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
[![npm version][npm-image]][npm-url]

Angular service to use factory keyboard event


## Installation
To install this module, you need to run the following command

```
$ npm install --save angular-ys-service-keyboard
```

## Dependency

```
$ npm install --save jquery@~3.0.0
$ npm install --save angular@~1.6.1
$ npm install --save angular-ys-factory-keyboard@~1.0.0
```

## Include Javascripts in index.html

```html
<script src="node_modules/angular-ys-factory-keyboard/dist/angular-ys-factory-keyboard.js"></script>
<script src="node_modules/angular-ys-service-keyboard/dist/angular-ys-service-keyboard.js"></script>
```

## Add directive in app.js or main.js

```Javascript
angular.module('app', ['angularYS.ServiceKeyboard']);
```

[travis-image]: https://travis-ci.org/yadickson/angular-ys-service-keyboard.svg
[travis-url]: https://travis-ci.org/yadickson/angular-ys-service-keyboard

[coveralls-image]: https://coveralls.io/repos/github/yadickson/angular-ys-service-keyboard/badge.svg
[coveralls-url]: https://coveralls.io/github/yadickson/angular-ys-service-keyboard

[dependencies-image]: https://david-dm.org/yadickson/angular-ys-service-keyboard/status.svg
[dependencies-url]: https://david-dm.org/yadickson/angular-ys-service-keyboard?view=list

[dev-dependencies-image]: https://david-dm.org/yadickson/angular-ys-service-keyboard/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/yadickson/angular-ys-service-keyboard?type=dev&view=list

[vulnerabilities-image]: https://snyk.io/package/npm/angular-ys-service-keyboard/badge.svg
[vulnerabilities-url]: https://snyk.io/package/npm/angular-ys-service-keyboard

[npm-image]: https://badge.fury.io/js/angular-ys-service-keyboard.svg
[npm-url]: https://badge.fury.io/js/angular-ys-service-keyboard
