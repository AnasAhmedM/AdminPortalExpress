const mongoose = require("mongoose")

const FacemaskSchema = mongoose.Schema({
    count: Number,
    masked: Number,
    unmasked: Number,
    timestamp: Number
}, {collection: 'Facemask'})

const Facemask = mongoose.model("Facemask", FacemaskSchema)
mongoose.connect("mongodb://localhost:27017/FYP", (error => {if (error) throw error}))

module.exports = Facemask