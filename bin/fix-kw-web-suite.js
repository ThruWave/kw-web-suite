#! /usr/bin/env node

/* eslint-disable */
var shell = require('shelljs'),
    path = require('path');

// Copy packages over
if (shell.test('-d', './node_modules/kw-web-suite/node_modules')) {
    shell.ls('./node_modules/kw-web-suite/node_modules').forEach(function(fileName) {
        shell.rm('-rf', './node_modules/' + fileName);
        shell.cp('-rf', './node_modules/kw-web-suite/node_modules/' + fileName, './node_modules/');
    });

    // Copy links
    shell.mkdir('-p', './node_modules/.bin');
    shell.ls('./node_modules/kw-web-suite/node_modules/.bin').forEach(function(fileName) {
        shell.cp('-f', './node_modules/kw-web-suite/node_modules/.bin/' + fileName, './node_modules/.bin/');
    });
}
