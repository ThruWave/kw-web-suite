## Kitware Web Suite [![Dependency Status](https://img.shields.io/david/kitware/kw-web-suite.svg)](https://david-dm.org/kitware/kw-web-suite)

### Introduction

The **Kitware Web Suite** package aims to provide a common
set of tools used to build Web application at Kitware behind
a single dependency.

Anyone can use it, but the goal is to standardise
the tools and versions used accross our Web projects.

Here is the full list that will be available to you with **kw-web-suite**.

**Caution**:

For npm < 3.x the executable from kw-web-suite will be located underneath kw-web-suite/node_modules
which will prevent your application from properly using them. In order to fix that you can
add the following **postinstall** command in your package.json.

```js
 [...]
 "scripts": {
    "postinstall": "fix-kw-web-suite || true"
    [...]
 }
```

### ES6

Package name        | NPM Version                                                      | Version
------------------- | ---------------------------------------------------------------- | ---------
babel-core          | ![npm version](https://badge.fury.io/js/babel-core.svg)          | 6.7.2
babel-eslint        | ![npm version](https://badge.fury.io/js/babel-eslint.svg)        | 5.0.0
babel-loader        | ![npm version](https://badge.fury.io/js/babel-loader.svg)        | 6.2.4
babel-polyfill      | ![npm version](https://badge.fury.io/js/babel-polyfill.svg)      | 6.7.2
babel-preset-es2015 | ![npm version](https://badge.fury.io/js/babel-preset-es2015.svg) | 6.6.0
babel-preset-react  | ![npm version](https://badge.fury.io/js/babel-preset-react.svg)  | 6.5.0

### ESLint

Package name         | NPM Version                                                       | Version
-------------------- | ----------------------------------------------------------------- | --------
eslint               | ![npm version](https://badge.fury.io/js/eslint.svg)               | 2.4.0
eslint-loader        | ![npm version](https://badge.fury.io/js/eslint-loader.svg)        | 1.3.0
eslint-config-airbnb | ![npm version](https://badge.fury.io/js/eslint-config-airbnb.svg) | 6.1.0
eslint-plugin-react  | ![npm version](https://badge.fury.io/js/eslint-plugin-react.svg)  | 4.2.3

### Webpack loaders

Package name        | NPM Version                                                       | Version
------------------- | ----------------------------------------------------------------- | --------
autoprefixer        | ![npm version](https://badge.fury.io/js/autoprefixer.svg)         | 6.3.4
css-loader          | ![npm version](https://badge.fury.io/js/css-loader.svg)           | 0.23.1
expose-loader       | ![npm version](https://badge.fury.io/js/expose-loader.svg)        | 0.7.1
file-loader         | ![npm version](https://badge.fury.io/js/file-loader.svg)          | 0.8.5
html-loader         | ![npm version](https://badge.fury.io/js/html-loader.svg)          | 0.4.3
json-loader         | ![npm version](https://badge.fury.io/js/json-loader.svg)          | 0.5.4
postcss-loader      | ![npm version](https://badge.fury.io/js/postcss-loader.svg)       | 0.8.2
shader-loader       | ![npm version](https://badge.fury.io/js/shader-loader.svg)        | 1.1.4
style-loader        | ![npm version](https://badge.fury.io/js/style-loader.svg)         | 0.13.0
svg-sprite-loader   | ![npm version](https://badge.fury.io/js/svg-sprite-loader.svg)    | 0.0.16
url-loader          | ![npm version](https://badge.fury.io/js/url-loader.svg)           | 0.5.7

### Webpack plugins

Package name        | NPM Version                                                      | Version
------------------- | ---------------------------------------------------------------- | --------
html-webpack-plugin | ![npm version](https://badge.fury.io/js/html-webpack-plugin.svg) | 2.12.0

### Webpack cli

Package name        | NPM Version                                                     | Version
------------------- | --------------------------------------------------------------- | --------
node-libs-browser   | ![npm version](https://badge.fury.io/js/node-libs-browser.svg)  | 1.0.0
webpack             | ![npm version](https://badge.fury.io/js/webpack.svg)            | 1.12.14
webpack-dev-server  | ![npm version](https://badge.fury.io/js/webpack-dev-server.svg) | 1.14.1

### Testing

Package name              | NPM Version                                                            | Version
------------------------- | ---------------------------------------------------------------------- | --------
expect                    | ![npm version](https://badge.fury.io/js/expect.svg)                    | 1.15.2
jasmine-core              | ![npm version](https://badge.fury.io/js/jasmine-core.svg)              | 2.4.1
jest-cli                  | ![npm version](https://badge.fury.io/js/jest-cli.svg)                  | 0.9.2
karma                     | ![npm version](https://badge.fury.io/js/karma.svg)                     | 0.13.22
karma-chrome-launcher     | ![npm version](https://badge.fury.io/js/karma-chrome-launcher.svg)     | 0.2.2
karma-coverage            | ![npm version](https://badge.fury.io/js/karma-coverage.svg)            | 0.5.5
karma-firefox-launcher    | ![npm version](https://badge.fury.io/js/karma-firefox-launcher.svg)    | 0.1.7
karma-jasmine             | ![npm version](https://badge.fury.io/js/karma-jasmine.svg)             | 0.3.8
karma-phantomjs2-launcher | ![npm version](https://badge.fury.io/js/karma-phantomjs2-launcher.svg) | 0.5.0
karma-safari-launcher     | ![npm version](https://badge.fury.io/js/karma-safari-launcher.svg)     | 0.1.1
karma-sourcemap-loader    | ![npm version](https://badge.fury.io/js/karma-sourcemap-loader.svg)    | 0.3.7
karma-webpack             | ![npm version](https://badge.fury.io/js/karma-webpack.svg)             | 1.7.0
phantomjs-prebuilt        | ![npm version](https://badge.fury.io/js/phantomjs-prebuilt.svg)        | 2.1.6

### Coverage

Package name                 | NPM Version                                                               | Version
---------------------------- | ------------------------------------------------------------------------- | --------
istanbul                     | ![npm version](https://badge.fury.io/js/istanbul.svg)                     | 0.4.2
istanbul-instrumenter-loader | ![npm version](https://badge.fury.io/js/istanbul-instrumenter-loader.svg) | 0.2.0

### Software process

Package name              | NPM Version                                                            | Version
------------------------- | ---------------------------------------------------------------------- | --------
commitizen                | ![npm version](https://badge.fury.io/js/commitizen.svg)                | 2.7.3
cz-conventional-changelog | ![npm version](https://badge.fury.io/js/cz-conventional-changelog.svg) | 1.1.5
semantic-release          | ![npm version](https://badge.fury.io/js/semantic-release.svg)          | 4.3.5


### Utilities

Package name  | NPM Version                                          | Version
------------- | ---------------------------------------------------- | --------
shelljs       | ![npm version](https://badge.fury.io/js/shelljs.svg) | 0.6.0
