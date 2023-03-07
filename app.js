require('dotenv').config()
require('colors')
const express = require('express')
const app = express()
const operations = require('./routes/operations.js')
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use('/api/v1/operations', operations)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`.cyan.bold)
})
