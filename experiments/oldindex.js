const zoho = require('./zoho')
const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('root')
  })

  app.get('/contact', (req, res) => {
    res.send('contacts')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port} http://localhost:${port}`)
  })

  app.use('/zoho', zoho)
