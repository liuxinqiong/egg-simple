'use strict';
const path = require('path');

// had enabled by egg
// exports.static = true;

exports.nunjucks = {
    enabled: true,
    package: "egg-view-nunjucks"
}

exports.ua = {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-ua')
}

exports.validate = {
    enable: true,
    package: 'egg-validate',
};