'use strict'

const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send('Welcome to the endpoint')
})

app.get('/crash', (req,res) => {
  throw new Exception('8BAADF00D')
})

app.get('/exit', (req,res) => {
  process.exit()
})

app.listen(1337)
