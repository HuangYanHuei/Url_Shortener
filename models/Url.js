const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UrlSchema = new Schema({
  shortURL: { type: String, required: true },
  longURL: { type: String, required: true }
})
module.exports = mongoose.model('Url', UrlSchema)