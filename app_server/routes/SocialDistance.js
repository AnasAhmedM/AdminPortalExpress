const express = require('express');
const router = express.Router();
const SocialDistanceController = require("../controllers/SocialDistance")

router.get('/', SocialDistanceController.All)
router.get('/numPeople', SocialDistanceController.NumberOfPeople)
router.get('/numViolation', SocialDistanceController.PeopleNoSocialDistance)
router.get('/numPeopleLastWeek', SocialDistanceController.NumberOfPeopleLastWeek)
router.get('/numViolationLastWeek', SocialDistanceController.PeopleNoSocialDistanceLastWeek)
router.delete('/delete/:id', SocialDistanceController.DeleteOne)
router.get('/clean', SocialDistanceController.Clean)

module.exports = router