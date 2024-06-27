require('dotenv').config()
const express = require('express')
const path = require('path')

const port = process.env.PORT

app = express()

app.use(express.static(path.join(__dirname, "apps", "HighLevelAppBoilerplate",  'public' )))

app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, "apps","HighLevelAppBoilerplate",  'public', 'index.html'))

})

app.get('/code', (req, res) => {
    console.log(req.query.code)
    res.send('data sent')
})
    

app.get('/url', (req, res) => {
    res.json({url: process.env.URL})
})

app.get('/subscribed', (req, res) =>{
    res.send('subscribed')
})

app.listen(port, console.log("server running on " + port))