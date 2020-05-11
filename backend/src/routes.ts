import express from 'express'

import Element from './models/Element'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const elements = await Element.find()

    return res.status(200).send(elements)
  } catch (err) {
    console.error('Error on read: ', err)
    return res.status(500).send('Error on read')
  }
})

router.post('/', async (req, res) => {
  try {
    await Element.create(req.body)

    return res.status(200).send('create succeeded')
  } catch (err) {
    console.error('Error on create: ', err)
    return res.status(500).send('Error on create')
  }
})

export default router
