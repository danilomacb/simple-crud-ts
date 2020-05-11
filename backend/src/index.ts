import express from 'express'
import mongoose from 'mongoose'

import routes from './routes'

const app = express()
app.use(express.json())
app.use('/', routes)

const port = 3001
const mongodbUrl = 'mongodb://localhost:27017/simpleCrudTNRM'

mongoose.connect(mongodbUrl,
  { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) { return console.error('Error on connect mongodb: ', err) }
  })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
