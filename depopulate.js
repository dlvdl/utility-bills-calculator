require('dotenv').config()

const connectDB = require('./db/connect')
const Setting = require('./models/setting')
const Operation = require('./models/operation')

const start = async () => {
  try {
    await connectDB(process.env.URI)
    await Setting.deleteMany()
    await Operation.deleteMany()
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
