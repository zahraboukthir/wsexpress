require('dotenv').config()
const express = require('express')
const product = require('./products')
const pfilter = require('./findproduct')

const app = express()
const port = process.env.port || 8080
const router = require('./productRoutes')


// app.get('/product', (req, res) => res.send({ product }))


// app.get('/product/:id', pfilter, (req, res) => res.send(req.prod))
app.use('/product', router)
app.listen(port, (error) =>
    error ? console.log(error) : console.log(`server 2 in runnig${port}`))