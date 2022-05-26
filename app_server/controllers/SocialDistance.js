const SocialDistance = require('../models/SocialDistance')

module.exports.All = function (req, res, next) {
    SocialDistance.find({}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

module.exports.NumberOfPeople = function (req, res, next) {
    SocialDistance.find({}).exec((err, data) => {
        if (err) throw err
        let NumPeople =[
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
        let total = 0
        data.forEach(e=>{
            let min = new Date()
            min.setDate(min.getDate() - 7);
            let max = new Date()
            let current = new Date(0)
            current.setUTCSeconds(e['timestamp'])
            if(current<min || current> max)
              return
              NumPeople[current.getDay()]['Total'] += e['crowd']
              total += e['crowd']
          })
        
        let today = new Date()
        let day = today.getDay()
        NumPeople = NumPeople.splice(day+1).concat(NumPeople.splice(0,day+1))
        NumPeople.unshift({'name': 'Avg','Total': parseInt(total/7)})
        res.json({'data': NumPeople, 'total': total})
    })
}

module.exports.PeopleNoSocialDistance = function (req, res, next) {
    SocialDistance.find({}).exec((err, data) => {
        if (err) throw err
        let NumViolation =[
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
        let total = 0 
        data.forEach(e=>{
            let min = new Date()
            min.setDate(min.getDate() - 7);
            let max = new Date()
            let current = new Date(0)
            current.setUTCSeconds(e['timestamp'])
            if(current<min || current> max)
              return
              NumViolation[current.getDay()]['Total'] += e['violation']
              total += e['violation']
          })
        let today = new Date()
        let day = today.getDay()
        NumViolation = NumViolation.splice(day+1).concat(NumViolation.splice(0,day+1))
        NumViolation.unshift({'name': 'Avg','Total': parseInt(total/7)})
        res.json({'data': NumViolation, 'total': total})
    })
}

module.exports.NumberOfPeopleLastWeek = function (req, res, next) {
  SocialDistance.find({}).exec((err, data) => {
      if (err) throw err
      let NumPeople =[
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
      let total = 0
      data.forEach(e=>{
          let min = new Date()
          min.setDate(min.getDate() - 14);
          let max = new Date()
          max.setDate(max.getDate() - 7);
          let current = new Date(0)
          current.setUTCSeconds(e['timestamp'])
          if(current<min || current> max)
            return
            NumPeople[current.getDay()]['Total'] += e['crowd']
            total += e['crowd']
        })
      
      let today = new Date()
      let day = today.getDay()
      NumPeople = NumPeople.splice(day+1).concat(NumPeople.splice(0,day+1))
      NumPeople.unshift({'name': 'Avg','Total': parseInt(total/7)})
      res.json({'data': NumPeople, 'total': total})
  })
}

module.exports.PeopleNoSocialDistanceLastWeek = function (req, res, next) {
  SocialDistance.find({}).exec((err, data) => {
      if (err) throw err
      let NumViolation =[
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
      let total = 0 
      data.forEach(e=>{
          let min = new Date()
          min.setDate(min.getDate() - 14);
          let max = new Date()
          max.setDate(max.getDate() - 7);
          let current = new Date(0)
          current.setUTCSeconds(e['timestamp'])
          if(current<min || current> max)
            return
            NumViolation[current.getDay()]['Total'] += e['violation']
            total += e['violation']
        })
      let today = new Date()
      let day = today.getDay()
      NumViolation = NumViolation.splice(day+1).concat(NumViolation.splice(0,day+1))
      NumViolation.unshift({'name': 'Avg','Total': parseInt(total/7)})
      res.json({'data': NumViolation, 'total': total})
  })
}

module.exports.DeleteOne = function (req, res, next) {
    SocialDistance.findByIdAndDelete(req.params.id)
        .exec((err, data) => {
            if (err) throw err
            res.json({'message':'Sucess'})
        })
}