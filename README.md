## Kitware Web Suite

### Introduction

The **Kitware Web Suite** package aims to provide a common
set of tools used to build Web application at Kitware behind
a single dependency.

Anyone can use it, but the goal is to standardise
the tools and versions used accross our Web projects.

### Building

For building our Web applications, we rely on Webpack with a set of loaders.
Here is the full list that will be available to you with **kw-web-suite**.

#### ES6

Package name        | Version   | NPM Version
------------------- | --------- | -------------
babel-core          | 6.6.0     | ![npm version](https://badge.fury.io/js/babel-core.svg)
babel-eslint        | 5.0.0     | ![npm version](https://badge.fury.io/js/babel-eslint.svg)
babel-loader        | 6.2.4     | ![npm version](https://badge.fury.io/js/babel-loader.svg)
babel-polyfill      | 6.6.1     | ![npm version](https://badge.fury.io/js/babel-polyfill.svg)
babel-preset-es2015 | 6.6.0     | ![npm version](https://badge.fury.io/js/babel-preset-es2015.svg)
babel-preset-react  | 6.5.0     | ![npm version](https://badge.fury.io/js/babel-preset-react.svg)

#### ESLint

Package name        | Version   | NPM Version
------------------- | --------  | -------------
eslint              | 2.2.0     | ![npm version](https://badge.fury.io/js/eslint.svg)
eslint-loader       | 1.3.0     | ![npm version](https://badge.fury.io/js/eslint-loader.svg)
eslint-plugin-babel | 3.1.0     | ![npm version](https://badge.fury.io/js/eslint-plugin-babel.svg)
eslint-plugin-react | 4.1.0     | ![npm version](https://badge.fury.io/js/eslint-plugin-react.svg)

#### Webpack loaders

Package name        | Version   | NPM Version
------------------- | --------  | -------------
autoprefixer        | 6.3.3     | ![npm version](https://badge.fury.io/js/autoprefixer.svg)
css-loader          | 0.23.1    | ![npm version](https://badge.fury.io/js/css-loader.svg)
expose-loader       | 0.7.1     | ![npm version](https://badge.fury.io/js/expose-loader.svg)
file-loader         | 0.8.5     | ![npm version](https://badge.fury.io/js/file-loader.svg)
html-loader         | 0.4.3     | ![npm version](https://badge.fury.io/js/html-loader.svg)
json-loader         | 0.5.4     | ![npm version](https://badge.fury.io/js/json-loader.svg)
postcss-loader      | 0.8.1     | ![npm version](https://badge.fury.io/js/postcss-loader.svg)
shader-loader       | 1.1.4     | ![npm version](https://badge.fury.io/js/shader-loader.svg)
style-loader        | 0.13.0    | ![npm version](https://badge.fury.io/js/style-loader.svg)
svg-sprite-loader   | 0.0.16    | ![npm version](https://badge.fury.io/js/svg-sprite-loader.svg)
url-loader          | 0.5.7     | ![npm version](https://badge.fury.io/js/url-loader.svg)

#### Webpack plugins

Package name        | Version   | NPM Version
------------------- | --------  | -------------
html-webpack-plugin | 2.9.0     | ![npm version](https://badge.fury.io/js/html-webpack-plugin.svg)

#### Webpack cli

Package name        | Version   | NPM Version
------------------- | --------  | -------------
node-libs-browser   | 1.0.0     | ![npm version](https://badge.fury.io/js/node-libs-browser.svg)
webpack             | 1.12.14   | ![npm version](https://badge.fury.io/js/webpack.svg)
webpack-dev-server  | 1.14.1    | ![npm version](https://badge.fury.io/js/webpack-dev-server.svg)

### Testing

Package name            | Version   | NPM Version
----------------------- | --------  | -------------
expect                  | 1.14.0    | ![npm version](https://badge.fury.io/js/expect.svg)
jasmine-core            | 2.4.1     | ![npm version](https://badge.fury.io/js/jasmine-core.svg)
jest-cli                | 0.8.2     | ![npm version](https://badge.fury.io/js/jest-cli.svg)
karma                   | 0.13.21   | ![npm version](https://badge.fury.io/js/karma.svg)
karma-chrome-launcher   | 0.2.2     | ![npm version](https://badge.fury.io/js/karma-chrome-launcher.svg)
karma-cli               | 0.1.2     | ![npm version](https://badge.fury.io/js/karma-cli.svg)
karma-coverage          | 0.5.3     | ![npm version](https://badge.fury.io/js/karma-coverage.svg)
karma-firefox-launcher  | 0.1.7     | ![npm version](https://badge.fury.io/js/karma-firefox-launcher.svg)
karma-jasmine           | 0.3.7     | ![npm version](https://badge.fury.io/js/karma-jasmine.svg)
karma-phantomjs-launcher| 0.2.3     | ![npm version](https://badge.fury.io/js/karma-phantomjs-launcher.svg)
karma-safari-launcher   | 0.1.1     | ![npm version](https://badge.fury.io/js/karma-safari-launcher.svg)
karma-sourcemap-loader  | 0.3.7     | ![npm version](https://badge.fury.io/js/karma-sourcemap-loader.svg)
karma-webpack           | 1.7.0     | ![npm version](https://badge.fury.io/js/karma-webpack.svg)
phantomjs               | 1.9.19    | ![npm version](https://badge.fury.io/js/phantomjs.svg)

### Coverage

Package name                    | Version   | NPM Version
------------------------------- | --------  | -------------
istanbul                        | 0.4.2     | ![npm version](https://badge.fury.io/js/istanbul.svg)
istanbul-instrumenter-loader    | 0.2.0     | ![npm version](https://badge.fury.io/js/istanbul-instrumenter-loader.svg)

### Software process

Package name                | Version   | NPM Version
--------------------------- | --------  | -------------
commitizen                  | 2.5.0     | ![npm version](https://badge.fury.io/js/commitizen.svg)
cz-conventional-changelog   | 1.1.5     | ![npm version](https://badge.fury.io/js/cz-conventional-changelog.svg)
semantic-release            | 4.3.5     | ![npm version](https://badge.fury.io/js/semantic-release.svg)
