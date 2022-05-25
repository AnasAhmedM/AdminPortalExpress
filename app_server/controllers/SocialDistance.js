const SocialDistance = require('../models/SocialDistance')

module.exports.All = function (req, res, next) {
    SocialDistance.find({}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

module.exports.DeleteOne = function (req, res, next) {
    SocialDistance.findByIdAndDelete(req.params.id)
        .exec((err, data) => {
            if (err) throw err
            res.json({'message':'Sucess'})
        })
}