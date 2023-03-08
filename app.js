require('dotenv').config()
require('colors')
const express = require('express')
const operations = require('./routes/operations.js')
const connectDB = require('./db/connect')

const app = express()

const PORT = process.env.PORT || 5000

connectDB(process.env.URI)

app.use(express.json())
app.use('/api/v1/operations', operations)

const start = async () => {
  try {
    await connectDB(process.env.URI).then(() => {
      console.log('DB_Connected!'.cyan)
    })

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}...`.yellow.bold)
    })
  } catch (err) {
    console.log(err)
  }
}

start()
