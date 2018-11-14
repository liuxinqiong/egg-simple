const Controller = require('egg').Controller

class NewsController extends Controller {
    async list() {
        const ctx = this.ctx
        const dataList = {
            list: await ctx.service.news.list(),
            ua: ctx.isIOS
        };
        await ctx.render('news/list.tpl', dataList)
    }
}

module.exports = NewsController