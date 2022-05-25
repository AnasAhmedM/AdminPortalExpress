const Facemask = require('../models/Facemask')

module.exports.All = function (req, res, next) {
    Facemask.find({}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

module.exports.PeopleWithoutMask = function (req, res, next) {
    Facemask.find({}).exec((err, data) => {
        if (err) throw err
        let NoMask =[
            {
              name: "Sun",
              "Total": 0,
            },
            {
              name: "Mon",
              "Total": 0,
            },
            {
              name: "Tue",
              "Total": 0,
            },
            {
              name: "Wed",
              "Total": 0,
            },
            {
              name: "Thu",
              "Total": 0,
            },
            {
              name: "Fri",
              "Total": 0,
            },
            {
              name: "Sat",
              "Total": 0,
            },
          ]
        let today = new Date()
        let day = today.getDay()
        NoMask = NoMask.splice(day+1).concat(NoMask.splice(0,day+1))
        NoMask.unshift({'name': 'base','Total': 0})
        data.forEach(e=>{
            let min = new Date()
            min.setDate(min.getDate() - 7);
            let max = new Date()
            let current = new Date(0)
            current.setUTCSeconds(e['timestamp'])
            if(current<min || current> max)
              return
              NoMask[current.getDay()]['Total'] += e['masked']
          })
        res.json(NoMask)
    })
}

module.exports.DeleteOne = function (req, res, next) {
    Facemask.findByIdAndDelete(req.params.id)
        .exec((err, data) => {
            if (err) throw err
            res.json({'message':'Sucess'})
        })
}