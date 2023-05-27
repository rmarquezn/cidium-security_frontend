//importamos dependencias
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//creamos el esquema

const PostsSchema = new Schema({
  userName: String,
  postContent: String,
  postTitle:String,
  comments: Array
})

module.exports = mongoose.model('posts', PostsSchema)