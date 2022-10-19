const express = require('express')
const app = express()

app.get('/user', (req, res) => {
  res.send('Amadeu')
})

app.listen(3333, () => {})
