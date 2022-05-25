const Facemask = require('../models/Facemask')

module.exports.All = function (req, res, next) {
    Facemask.find({}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

module.exports.DeleteOne = function (req, res, next) {
    Facemask.findByIdAndDelete(req.params.id)
        .exec((err, data) => {
            if (err) throw err
            res.json({'message':'Sucess'})
        })
}