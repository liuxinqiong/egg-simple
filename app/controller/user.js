exports.info = async ctx => {
    ctx.body = `user: ${ctx.params.id}, ${ctx.params.name}`;
};

exports.create = async ctx => {
    const createRule = {
        username: {
            type: 'email',
        },
        password: {
            type: 'password',
            compare: 're-password',
        }
    }
    // ctx.validate(rule, [body]) 如果不传第二个参数会自动校验 `ctx.request.body`
    // 如果校验报错，会抛出异常
    ctx.validate(createRule);
    ctx.body = ctx.request.body;
};