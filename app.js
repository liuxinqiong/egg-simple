module.exports = app => {
    app.beforeStart(async () => {
        console.log('beforeStart')
    })
}