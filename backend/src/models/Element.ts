import mongoose from 'mongoose'

const ElementSchema = new mongoose.Schema({
  content: { type: String, required: true }
})

export default mongoose.model('Element', ElementSchema)
