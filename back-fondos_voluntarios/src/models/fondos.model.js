const {Schema, model} = require("mongoose")


// const mongoose= require("mongoose")
// const Schema= mongoose.Schema

const _fondo =new Schema({
    name: String,
    minimum: Number,
    category: String
})

module.exports = model("Fondos", _fondo)