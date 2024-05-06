const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/app', (req, res) => {
  res.send('boaz!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
