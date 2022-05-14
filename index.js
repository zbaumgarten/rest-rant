
require('dotenv').config()

const { application } = require('express')
const express = require('express')
const app = express()

application.get('/', (req, res) => {
    res.send('Hhhhunnnnnggghhhhhh!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 senpai not found 0w0</h1>')
})

app.listen(process.env.PORT)