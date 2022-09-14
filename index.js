const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/info', (req, res) => {
    res.json({
        status: 'success',
        message: 'request completes',
        appname: "backend api",
        appversion: "1.0.0.", 
        author: "Pattaraphon"
    })
})

app.get('/dev', (req, res) => {
    res.json({
        name: "Pattaraphon",
        surname: "Chantagasorn",
        email: "pattarapon9741@gmail.com"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})