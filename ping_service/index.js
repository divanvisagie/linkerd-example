'use strict'

const express = require('express')


const app = express()

app.get('/', (req,res) => {
    res.send('Welcome to the endpoint')
})

app.listen(1337)