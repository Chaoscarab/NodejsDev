require('dotenv').config()
const express = require('express')
const path = require('path')

const port = process.env.PORT
app.use(express.static(path.join(__dirname, "apps", 'public' )))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "apps", 'public', 'index.html'))   
})


app.listen(port, console.log("server running on " + port))