const { application } = require('express')
const express = require('express')
const app = express()

application.get('/', (req, res) => {
    res.send('Hhhhunnnnnggghhhhhh')
})

app.listen(3000)