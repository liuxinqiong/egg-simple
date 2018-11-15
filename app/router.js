'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list)
  router.get('/search', controller.search.index)
  router.get('/user/:id/:name', app.controller.user.info);
  router.get(/^\/package\/([\w-.]+\/[\w-.]+)$/, app.controller.package.detail)
  router.post('/form', app.controller.form.post);
  router.post('/user', app.controller.user.create)
};
