//importamos dependencias
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//creamos el esquema

const UsersSchema = new Schema({
    email: String,
    password: String,
    userName: String,
    phone: String,
    occupation: String,
    deleteFlag: Boolean

})

module.exports = mongoose.model('users', UsersSchema) 