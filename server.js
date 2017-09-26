const path = require('path')
const express = require('express')

const app = express()
const PORT = '8080'

app.use(express.static(path.join(__dirname, '/public')))
app.get('*', function response (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(PORT, err => {
  if (err) {
    console.log(err)
  }

  console.info('==> Listening on port %s', PORT)
})
