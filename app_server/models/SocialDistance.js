const mongoose = require("mongoose")

const SocialDistanceSchema = mongoose.Schema({
    crowd: Number,
    violation: Number,
    timestamp: Number
}, {collection: 'SocialDistance'})

const SocialDistance = mongoose.model("SocialDistance", SocialDistanceSchema)
mongoose.connect("mongodb://localhost:27017/FYP", (error => {if (error) throw error}))

module.exports = SocialDistance