const path = require('path')
const express = require('express')
const app = express()
const port = process.env.port || 5000

//express midelware
// app.get('/', (req, res) => res.send('<h1>Welcome</h1>'))
// app.get('/home', (req, res) => res.sendFile('./testSend.html', { root: __dirname }))

app.use(express.static(path.join(__dirname, 'public')))
app.listen(port, (error) =>
    error ? console.log(error) : console.log(`server is runnig en port:${port}`))