const express = require('express'),
Sequelize = require('sequelize')
app = express()

const PORT = process.env.PORT || 3000
const ENVIRONMENT = process.env.NODE_ENV || 'development'

app.use('/api', require('./routes/api'))

// TESTE SEQUELIZE
const sequelize = new Sequelize({
    "username": process.env.DATABASE_USER || "test",
    "password": process.env.DATABASE_PASSWORD || "test",
    "database": process.env.DATABASE_DB || "test",
    "host": process.env.DATABASE_HOST || "mysql",
    "port": 3306,
    "dialect": "mysql",
    "logging": true,
    "timezone": "America/Sao_Paulo"
});


const User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});

sequelize.sync()
.then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
}))
.then(jane => {
    console.log(jane.get({
        plain: true
    }));
})
.catch((error) => console.error('ERROR SEQUELIZE', error))



app.listen(PORT, () => {
    console.log('\n\n')
    console.log('> ---------- Servidor Rodando')
    console.log(`> ---------- PORTA: ${PORT}`)
    console.log(`> ---------- AMBIENTE: ${ENVIRONMENT}`)
    console.log('\n\n')
})