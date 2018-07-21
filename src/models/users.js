import mongoose from 'mongoose'
import { saveOrUpdate } from '../util/mongodb'

const User = mongoose.model('user', mongoose.Schema({
  name: String,
  email: String,
  pwd: String
}))

User.saveOrUpdate = saveOrUpdate(User)

export { User }
