const express = require('express')
const path = require('path')
const app = express()
const port = 9000

app.use(express.static(path.join(__dirname,'/')))

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, 'index.html'))
})

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, 'layout.html'))
})

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, 'about.html'))
})

app.listen(port, () => console.log(`Listening to port ${port}`))


