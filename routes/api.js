const app = require('express')()

app.use('/', (req, res, next) => {
    res.status(200).json({
        ok: "API FUNCIONANDO!"
    })
})

module.exports = app