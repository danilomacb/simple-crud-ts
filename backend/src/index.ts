import express from 'express'
import mongoose from 'mongoose'

import routes from './routes'

const app = express()
app.use('/', routes)

mongoose.connect('mongodb://localhost:27017/simpleCrudTNRM', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) { return console.error('Error on connect mongodb: ', err) }
})

const port = 3001

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
