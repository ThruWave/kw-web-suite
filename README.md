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
babel-core          | ![npm version](https://badge.fury.io/js/babel-core.svg)          | 6.8.0
babel-eslint        | ![npm version](https://badge.fury.io/js/babel-eslint.svg)        | 6.0.4
babel-loader        | ![npm version](https://badge.fury.io/js/babel-loader.svg)        | 6.2.4
babel-polyfill      | ![npm version](https://badge.fury.io/js/babel-polyfill.svg)      | 6.8.0
babel-preset-es2015 | ![npm version](https://badge.fury.io/js/babel-preset-es2015.svg) | 6.6.0
babel-preset-react  | ![npm version](https://badge.fury.io/js/babel-preset-react.svg)  | 6.5.0

### ESLint

Package name           | NPM Version                                                        | Version
---------------------- | ------------------------------------------------------------------ | --------
eslint                 | ![npm version](https://badge.fury.io/js/eslint.svg)                | 2.9.0
eslint-loader          | ![npm version](https://badge.fury.io/js/eslint-loader.svg)         | 1.3.0
eslint-config-airbnb   | ![npm version](https://badge.fury.io/js/eslint-config-airbnb.svg)  | 8.0.0
eslint-plugin-react    | ![npm version](https://badge.fury.io/js/eslint-plugin-react.svg)   | 5.0.1
eslint-plugin-import   | ![npm version](https://badge.fury.io/js/eslint-plugin-import.svg)  | 1.7.0
eslint-plugin-jsx-a11y | ![npm version](https://badge.fury.io/js/eslint-plugin-jsx-a11y.svg)| 1.0.4

### Webpack loaders

Package name        | NPM Version                                                       | Version
------------------- | ----------------------------------------------------------------- | --------
autoprefixer        | ![npm version](https://badge.fury.io/js/autoprefixer.svg)         | 6.3.6
css-loader          | ![npm version](https://badge.fury.io/js/css-loader.svg)           | 0.23.1
expose-loader       | ![npm version](https://badge.fury.io/js/expose-loader.svg)        | 0.7.1
file-loader         | ![npm version](https://badge.fury.io/js/file-loader.svg)          | 0.8.5
html-loader         | ![npm version](https://badge.fury.io/js/html-loader.svg)          | 0.4.3
json-loader         | ![npm version](https://badge.fury.io/js/json-loader.svg)          | 0.5.4
postcss-loader      | ![npm version](https://badge.fury.io/js/postcss-loader.svg)       | 0.9.1
shader-loader       | ![npm version](https://badge.fury.io/js/shader-loader.svg)        | 1.1.4
style-loader        | ![npm version](https://badge.fury.io/js/style-loader.svg)         | 0.13.1
svg-sprite-loader   | ![npm version](https://badge.fury.io/js/svg-sprite-loader.svg)    | 0.0.18
url-loader          | ![npm version](https://badge.fury.io/js/url-loader.svg)           | 0.5.7

### Webpack plugins

Package name        | NPM Version                                                      | Version
------------------- | ---------------------------------------------------------------- | --------
html-webpack-plugin | ![npm version](https://badge.fury.io/js/html-webpack-plugin.svg) | 2.16.1

### Webpack cli

Package name        | NPM Version                                                     | Version
------------------- | --------------------------------------------------------------- | --------
node-libs-browser   | ![npm version](https://badge.fury.io/js/node-libs-browser.svg)  | 1.0.0
webpack             | ![npm version](https://badge.fury.io/js/webpack.svg)            | 1.13.0
webpack-dev-server  | ![npm version](https://badge.fury.io/js/webpack-dev-server.svg) | 1.14.1

### Software process

Package name              | NPM Version                                                            | Version
------------------------- | ---------------------------------------------------------------------- | --------
commitizen                | ![npm version](https://badge.fury.io/js/commitizen.svg)                | 2.8.1
cz-conventional-changelog | ![npm version](https://badge.fury.io/js/cz-conventional-changelog.svg) | 1.1.6
semantic-release          | ![npm version](https://badge.fury.io/js/semantic-release.svg)          | 4.3.5


### Utilities

Package name  | NPM Version                                          | Version
------------- | ---------------------------------------------------- | --------
shelljs       | ![npm version](https://badge.fury.io/js/shelljs.svg) | 0.7.0
