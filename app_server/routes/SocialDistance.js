const express = require('express');
const router = express.Router();
const SocialDistanceController = require("../controllers/SocialDistance")

router.get('/', SocialDistanceController.All)
router.get('/numPeople', SocialDistanceController.NumberOfPeople)
router.get('/numViolation', SocialDistanceController.PeopleNoSocialDistance)
router.delete('/delete/:id', SocialDistanceController.DeleteOne)

module.exports = router