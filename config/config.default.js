'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1526028338442_7656';

  // add your config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    }
  }

  config.middleware = [
    'robot'
  ]

  config.robot = {
    ua: [
      /Baiduspider/i
    ]
  }

  config.security = {
    csrf: false
  }

  return config;
};
