'use strict'
const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('<html>Hello world SERVERLESS!</html>'))
module.exports = app
