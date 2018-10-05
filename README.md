## Kitware Web Suite [![Dependency Status](https://img.shields.io/david/kitware/kw-web-suite.svg)](https://david-dm.org/kitware/kw-web-suite)

### Introduction

The **Kitware Web Suite** package aims to provide a common
set of tools used to build Web application at Kitware behind
a single dependency.

Anyone can use it, but the goal is to standardise
the tools and versions used accross our Web projects.

Here is the full list that will be available to you with **kw-web-suite**.

### Minimum Runtime requirement

__Node__: 8.12.0 LTS
__NPM__: 6.4.1

### ES6

Package name                            | NPM Version                                                      | Version
--------------------------------------- | ---------------------------------------------------------------- | ---------
babel-core                              | ![npm version](https://badge.fury.io/js/babel-core.svg)          | 6.26.3
babel-eslint                            | ![npm version](https://badge.fury.io/js/babel-eslint.svg)        | 10.0.1
babel-loader                            | ![npm version](https://badge.fury.io/js/babel-loader.svg)        | 8.0.4
babel-polyfill                          | ![npm version](https://badge.fury.io/js/babel-polyfill.svg)      | 6.26.0
babel-preset-env                        | ![npm version](https://badge.fury.io/js/babel-preset-env.svg)    | 1.7.0
babel-preset-flow                       | ![npm version](https://badge.fury.io/js/babel-preset-flow.svg)   | 6.23.0
babel-preset-react                      | ![npm version](https://badge.fury.io/js/babel-preset-react.svg)  | 6.24.1
babel-plugin-syntax-dynamic-import      | ![npm version](https://badge.fury.io/js/babel-plugin-syntax-dynamic-import.svg)  | 6.18.0

### ESLint

Package name                   | NPM Version                                                                | Version
------------------------------ | -------------------------------------------------------------------------- | --------
eslint                         | ![npm version](https://badge.fury.io/js/eslint.svg)                        | 5.6.1
eslint-config-airbnb           | ![npm version](https://badge.fury.io/js/eslint-config-airbnb.svg)          | 17.1.0
eslint-config-prettier         | ![npm version](https://badge.fury.io/js/eslint-config-prettier.svg)        | 3.1.0
eslint-import-resolver-webpack | ![npm version](https://badge.fury.io/js/eslint-import-resolver-webpack.svg)| 0.10.1
eslint-loader                  | ![npm version](https://badge.fury.io/js/eslint-loader.svg)                 | 2.1.1
eslint-plugin-import           | ![npm version](https://badge.fury.io/js/eslint-plugin-import.svg)          | 2.14.0
eslint-plugin-jsx-a11y         | ![npm version](https://badge.fury.io/js/eslint-plugin-jsx-a11y.svg)        | 6.1.2
eslint-plugin-prettier         | ![npm version](https://badge.fury.io/js/eslint-plugin-prettier.svg)        | 3.0.0
eslint-plugin-react            | ![npm version](https://badge.fury.io/js/eslint-plugin-react.svg)           | 7.11.1

### Webpack loaders

Package name          | NPM Version                                                       | Version
--------------------- | ----------------------------------------------------------------- | --------
autoprefixer          | ![npm version](https://badge.fury.io/js/autoprefixer.svg)         | 9.1.5
css-loader            | ![npm version](https://badge.fury.io/js/css-loader.svg)           | 1.0.0
exports-loader        | ![npm version](https://badge.fury.io/js/exports-loader.svg)       | 0.7.0
expose-loader         | ![npm version](https://badge.fury.io/js/expose-loader.svg)        | 0.7.5
file-loader           | ![npm version](https://badge.fury.io/js/file-loader.svg)          | 2.0.0
hson-loader           | ![npm version](https://badge.fury.io/js/hson-loader.svg)          | 2.0.0
html-loader           | ![npm version](https://badge.fury.io/js/html-loader.svg)          | 0.5.5
postcss-loader        | ![npm version](https://badge.fury.io/js/postcss-loader.svg)       | 3.0.0
raw-loader            | ![npm version](https://badge.fury.io/js/raw-loader.svg)           | 0.5.1
regexp-replace-loader | ![npm version](https://badge.fury.io/js/regexp-replace-loader.svg)| 1.0.1
shader-loader         | ![npm version](https://badge.fury.io/js/shader-loader.svg)        | 1.3.1
string-replace-loader | ![npm version](https://badge.fury.io/js/string-replace-loader.svg)| 2.1.1
style-loader          | ![npm version](https://badge.fury.io/js/style-loader.svg)         | 0.23.0
svg-sprite-loader     | ![npm version](https://badge.fury.io/js/svg-sprite-loader.svg)    | 3.8.0
url-loader            | ![npm version](https://badge.fury.io/js/url-loader.svg)           | 1.1.1
worker-loader         | ![npm version](https://badge.fury.io/js/worker-loader.svg)        | 2.0.0

### Webpack plugins

Package name        | NPM Version                                                      | Version
------------------- | ---------------------------------------------------------------- | --------
html-webpack-plugin | ![npm version](https://badge.fury.io/js/html-webpack-plugin.svg) | 3.2.0
copy-webpack-plugin | ![npm version](https://badge.fury.io/js/copy-webpack-plugin.svg) | 4.5.2
write-file-webpack-plugin | ![npm version](https://badge.fury.io/js/write-file-webpack-plugin.svg) | 4.4.1

### Webpack cli

Package name            | NPM Version                                                          | Version
----------------------- | -------------------------------------------------------------------- | --------
node-libs-browser       | ![npm version](https://badge.fury.io/js/node-libs-browser.svg)       | 2.1.0
webpack                 | ![npm version](https://badge.fury.io/js/webpack.svg)                 | 4.20.2
webpack-cli             | ![npm version](https://badge.fury.io/js/webpack-cli.svg)             | 3.1.2
webpack-dev-server      | ![npm version](https://badge.fury.io/js/webpack-dev-server.svg)      | 3.1.9
parallel-webpack        | ![npm version](https://badge.fury.io/js/parallel-webpack.svg)        | 2.3.0
uglifyjs-webpack-plugin | ![npm version](https://badge.fury.io/js/uglifyjs-webpack-plugin.svg) | 2.0.1
webpack-merge           | ![npm version](https://badge.fury.io/js/webpack-merge.svg)           | 4.1.4

### Software process

Package name              | NPM Version                                                            | Version
------------------------- | ---------------------------------------------------------------------- | --------
commitizen                | ![npm version](https://badge.fury.io/js/commitizen.svg)                | 3.0.2
cz-conventional-changelog | ![npm version](https://badge.fury.io/js/cz-conventional-changelog.svg) | 2.1.0
semantic-release          | ![npm version](https://badge.fury.io/js/semantic-release.svg)          | 15.9.17
git-cz                    | ![npm version](https://badge.fury.io/js/git-cz.svg)                    | 1.7.1

### Utilities

Package name      | NPM Version                                                    | Version
----------------- | -------------------------------------------------------------- | --------
shelljs           | ![npm version](https://badge.fury.io/js/shelljs.svg)           | 0.8.2
prettier          | ![npm version](https://badge.fury.io/js/prettier.svg)          | 1.14.3
shx               | ![npm version](https://badge.fury.io/js/shx.svg)               | 0.3.2
size-limit        | ![npm version](https://badge.fury.io/js/size-limit.svg)        | 0.20.1
normalize.css     | ![npm version](https://badge.fury.io/js/normalize.css.svg)     | 8.0.0
inline-source-cli | ![npm version](https://badge.fury.io/js/inline-source-cli.svg) | 1.2.0
